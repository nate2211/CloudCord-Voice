/* eslint-env worker */
/* global WebSocketPair */

export class VoiceRoom {
    constructor(state, env) {
        this.state = state;
        this.env = env;
        this.clients = new Map();
    }

    async fetch(request) {
        if (request.headers.get('Upgrade') !== 'websocket') {
            return new Response('Expected WebSocket upgrade.', { status: 426 });
        }

        const pair = new WebSocketPair();
        const [client, server] = Object.values(pair);
        const id = crypto.randomUUID();

        server.accept();

        this.clients.set(id, {
            id,
            socket: server,
            name: 'Guest',
            introduced: false,
            audioEnabled: true,
            videoEnabled: true,
            joinedAt: Date.now(),
        });

        server.send(
            JSON.stringify({
                type: 'welcome',
                id,
                peers: this.getIntroducedPeers(id),
            })
        );

        server.addEventListener('message', (event) => {
            this.handleMessage(id, event.data);
        });

        server.addEventListener('close', () => {
            this.removeClient(id);
        });

        server.addEventListener('error', () => {
            this.removeClient(id);
        });

        return new Response(null, {
            status: 101,
            webSocket: client,
        });
    }

    handleMessage(id, rawMessage) {
        let message;

        try {
            message = JSON.parse(rawMessage);
        } catch {
            return;
        }

        const client = this.clients.get(id);

        if (!client) {
            return;
        }

        if (message.type === 'introduce') {
            client.name = String(message.name || 'Guest').slice(0, 48);
            client.audioEnabled = message.audioEnabled !== false;
            client.videoEnabled = message.videoEnabled !== false;
            client.introduced = true;

            this.broadcast(
                {
                    type: 'peer-joined',
                    peer: this.publicPeer(client),
                },
                id
            );

            return;
        }

        if (message.type === 'update-media') {
            client.audioEnabled = message.audioEnabled !== false;
            client.videoEnabled = message.videoEnabled !== false;

            this.broadcast({
                type: 'peer-media',
                id,
                audioEnabled: client.audioEnabled,
                videoEnabled: client.videoEnabled,
            });

            return;
        }

        if (message.type === 'signal') {
            const target = this.clients.get(message.to);

            if (!target) {
                return;
            }

            this.send(target.socket, {
                ...message,
                from: id,
            });
        }
    }

    removeClient(id) {
        const client = this.clients.get(id);

        if (!client) {
            return;
        }

        this.clients.delete(id);

        if (client.introduced) {
            this.broadcast({
                type: 'peer-left',
                id,
            });
        }
    }

    getIntroducedPeers(excludeId) {
        return Array.from(this.clients.values())
            .filter((client) => client.id !== excludeId && client.introduced)
            .map((client) => this.publicPeer(client));
    }

    publicPeer(client) {
        return {
            id: client.id,
            name: client.name,
            audioEnabled: client.audioEnabled,
            videoEnabled: client.videoEnabled,
            joinedAt: client.joinedAt,
        };
    }

    broadcast(payload, excludeId = '') {
        for (const client of this.clients.values()) {
            if (client.id === excludeId) continue;
            this.send(client.socket, payload);
        }
    }

    send(socket, payload) {
        try {
            socket.send(JSON.stringify(payload));
        } catch {
            // Ignore dead sockets.
        }
    }
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname.startsWith('/api/voice/ws/')) {
            const roomId = decodeURIComponent(url.pathname.split('/').pop() || '');

            if (!roomId) {
                return new Response('Missing room id.', { status: 400 });
            }

            const durableId = env.VOICE_ROOMS.idFromName(roomId);
            const room = env.VOICE_ROOMS.get(durableId);

            return room.fetch(request);
        }

        if (url.pathname === '/api/voice/health') {
            return Response.json({
                ok: true,
                service: 'CloudCord Voice signaling',
            });
        }

        if (url.pathname.startsWith('/api/')) {
            return Response.json(
                {
                    ok: false,
                    error: 'API route not found.',
                },
                { status: 404 }
            );
        }

        return env.ASSETS.fetch(request);
    },
};