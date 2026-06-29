import React, { useEffect, useMemo, useRef, useState } from 'react';

import {
    Alert,
    Box,
    Button,
    Chip,
    Container,
    Divider,
    IconButton,
    Paper,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material';

import {
    CallEnd,
    ContentCopy,
    Groups,
    Link as LinkIcon,
    Mic,
    MicOff,
    Person,
    PresentToAll,
    RestartAlt,
    SettingsInputAntenna,
    Videocam,
    VideocamOff,
} from '@mui/icons-material';

const RTC_CONFIG = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
    ],
};

const AUDIO_CONSTRAINTS = {
    echoCancellation: true,
    noiseSuppression: true,
    autoGainControl: true,
};

const VIDEO_CONSTRAINTS = {
    width: { ideal: 1280 },
    height: { ideal: 720 },
    facingMode: 'user',
};

function createRoomId() {
    const first = Math.random().toString(36).slice(2, 8);
    const second = Math.random().toString(36).slice(2, 8);
    return `room-${first}-${second}`;
}

function getRoomFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('room') || '';
}

function makeRoomUrl(roomId) {
    const url = new URL(window.location.href);
    url.pathname = '/voice-call';
    url.search = '';
    url.searchParams.set('room', roomId);
    url.hash = '';
    return url.toString();
}

function makeWsUrl(roomId) {
    const customBase = process.env.REACT_APP_SIGNALING_WS_URL;

    if (customBase) {
        return `${customBase.replace(/\/$/, '')}/api/voice/ws/${encodeURIComponent(roomId)}`;
    }

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    return `${protocol}//${window.location.host}/api/voice/ws/${encodeURIComponent(roomId)}`;
}

function safeJsonParse(value) {
    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
}

function ParticipantTile({
                             name,
                             stream,
                             isLocal = false,
                             isMuted = false,
                             audioEnabled = true,
                             videoEnabled = true,
                             status = 'waiting',
                         }) {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    return (
        <Paper
            elevation={0}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: { xs: 240, sm: 280, md: 340 },
                borderRadius: 4,
                border: '1px solid',
                borderColor: status === 'connected' ? 'rgba(34,197,94,0.55)' : 'divider',
                bgcolor: '#030712',
            }}
        >
            <Box
                component="video"
                ref={videoRef}
                autoPlay
                playsInline
                muted={isMuted}
                sx={{
                    width: '100%',
                    height: { xs: 240, sm: 280, md: 340 },
                    objectFit: 'cover',
                    display: stream && videoEnabled ? 'block' : 'none',
                    transform: isLocal ? 'scaleX(-1)' : 'none',
                    bgcolor: '#030712',
                }}
            />

            {(!stream || !videoEnabled) && (
                <Box
                    sx={{
                        minHeight: { xs: 240, sm: 280, md: 340 },
                        display: 'grid',
                        placeItems: 'center',
                        background:
                            'radial-gradient(circle at 50% 20%, rgba(124,77,255,0.22), transparent 38%), #030712',
                    }}
                >
                    <Stack spacing={1.25} alignItems="center">
                        <Box
                            sx={{
                                width: 78,
                                height: 78,
                                borderRadius: '50%',
                                display: 'grid',
                                placeItems: 'center',
                                bgcolor: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(255,255,255,0.12)',
                            }}
                        >
                            <Person fontSize="large" />
                        </Box>

                        <Typography color="text.secondary" sx={{ fontWeight: 850 }}>
                            {videoEnabled ? 'Waiting for video' : 'Camera off'}
                        </Typography>
                    </Stack>
                </Box>
            )}

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background:
                        'linear-gradient(180deg, rgba(3,7,18,0.7), transparent 34%, rgba(3,7,18,0.78))',
                }}
            />

            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    position: 'absolute',
                    left: 14,
                    right: 14,
                    bottom: 14,
                }}
            >
                <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 950 }} noWrap>
                        {name || 'Guest'}
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                        {isLocal ? 'You' : status}
                    </Typography>
                </Box>

                <Stack direction="row" spacing={0.75}>
                    <Chip
                        size="small"
                        icon={audioEnabled ? <Mic /> : <MicOff />}
                        label={audioEnabled ? 'Mic' : 'Muted'}
                        color={audioEnabled ? 'success' : 'default'}
                    />

                    <Chip
                        size="small"
                        icon={videoEnabled ? <Videocam /> : <VideocamOff />}
                        label={videoEnabled ? 'Cam' : 'Off'}
                        color={videoEnabled ? 'success' : 'default'}
                    />
                </Stack>
            </Stack>
        </Paper>
    );
}

function CopyButton({ value, label = 'Copy Link' }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        if (!value) return;

        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    };

    return (
        <Button
            variant="outlined"
            startIcon={<ContentCopy />}
            onClick={copy}
            disabled={!value}
            sx={{ flexShrink: 0 }}
        >
            {copied ? 'Copied' : label}
        </Button>
    );
}

export default function VoiceCallRoom() {
    const [roomId, setRoomId] = useState(getRoomFromUrl);
    const [roomLink, setRoomLink] = useState(() => {
        const existingRoom = getRoomFromUrl();
        return existingRoom ? makeRoomUrl(existingRoom) : '';
    });

    const [displayName, setDisplayName] = useState('');
    const [joined, setJoined] = useState(false);
    const [selfId, setSelfId] = useState('');
    const [status, setStatus] = useState('Create a room link or open a room link to join.');
    const [error, setError] = useState('');

    const [localStreamVersion, setLocalStreamVersion] = useState(0);
    const [micEnabled, setMicEnabled] = useState(true);
    const [cameraEnabled, setCameraEnabled] = useState(true);
    const [screenSharing, setScreenSharing] = useState(false);

    const [participants, setParticipants] = useState(new Map());
    const [events, setEvents] = useState([
        'Ready. Create a room link and share it with people you want in the call.',
    ]);

    const wsRef = useRef(null);
    const selfIdRef = useRef('');
    const localStreamRef = useRef(null);
    const cameraVideoTrackRef = useRef(null);
    const screenTrackRef = useRef(null);
    const peerConnectionsRef = useRef(new Map());
    const pendingCandidatesRef = useRef(new Map());

    const participantList = useMemo(() => Array.from(participants.values()), [participants]);

    const localTileStream = localStreamRef.current;

    const addEvent = (message) => {
        setEvents((current) => [
            `${new Date().toLocaleTimeString()}: ${message}`,
            ...current,
        ].slice(0, 10));
    };

    const upsertParticipant = (id, patch) => {
        setParticipants((current) => {
            const next = new Map(current);
            const existing = next.get(id) || {
                id,
                name: 'Guest',
                stream: null,
                audioEnabled: true,
                videoEnabled: true,
                status: 'waiting',
            };

            next.set(id, {
                ...existing,
                ...patch,
            });

            return next;
        });
    };

    const removeParticipant = (id) => {
        setParticipants((current) => {
            const next = new Map(current);
            next.delete(id);
            return next;
        });
    };

    const sendSignal = (payload) => {
        const socket = wsRef.current;

        if (!socket || socket.readyState !== WebSocket.OPEN) {
            return;
        }

        socket.send(JSON.stringify(payload));
    };

    const createRoom = async () => {
        const nextRoomId = createRoomId();
        const nextLink = makeRoomUrl(nextRoomId);

        window.history.pushState({}, '', nextLink);

        setRoomId(nextRoomId);
        setRoomLink(nextLink);
        setStatus('Room link created. Share it, then click Join Room.');
        setError('');
        addEvent('Room link created.');
    };

    const getLocalMedia = async () => {
        if (localStreamRef.current) {
            return localStreamRef.current;
        }

        setStatus('Requesting camera and microphone access...');

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: AUDIO_CONSTRAINTS,
                video: VIDEO_CONSTRAINTS,
            });

            localStreamRef.current = stream;
            cameraVideoTrackRef.current = stream.getVideoTracks()[0] || null;
            setMicEnabled(true);
            setCameraEnabled(Boolean(cameraVideoTrackRef.current));
            setLocalStreamVersion((value) => value + 1);
            addEvent('Camera and microphone started.');

            return stream;
        } catch {
            const audioOnlyStream = await navigator.mediaDevices.getUserMedia({
                audio: AUDIO_CONSTRAINTS,
                video: false,
            });

            localStreamRef.current = audioOnlyStream;
            cameraVideoTrackRef.current = null;
            setMicEnabled(true);
            setCameraEnabled(false);
            setLocalStreamVersion((value) => value + 1);
            addEvent('Audio-only mode started.');

            return audioOnlyStream;
        }
    };

    const closePeerConnection = (peerId) => {
        const pc = peerConnectionsRef.current.get(peerId);

        if (pc) {
            pc.onicecandidate = null;
            pc.ontrack = null;
            pc.onconnectionstatechange = null;
            pc.close();
        }

        peerConnectionsRef.current.delete(peerId);
        pendingCandidatesRef.current.delete(peerId);
    };

    const closeAllPeerConnections = () => {
        Array.from(peerConnectionsRef.current.keys()).forEach(closePeerConnection);
    };

    const addPendingCandidate = (peerId, candidate) => {
        const existing = pendingCandidatesRef.current.get(peerId) || [];
        existing.push(candidate);
        pendingCandidatesRef.current.set(peerId, existing);
    };

    const flushPendingCandidates = async (peerId, pc) => {
        const candidates = pendingCandidatesRef.current.get(peerId) || [];

        for (const candidate of candidates) {
            try {
                await pc.addIceCandidate(new RTCIceCandidate(candidate));
            } catch {
                // Ignore stale ICE candidates.
            }
        }

        pendingCandidatesRef.current.delete(peerId);
    };

    const createPeerConnection = async (peerId, shouldCreateOffer = false) => {
        if (peerConnectionsRef.current.has(peerId)) {
            return peerConnectionsRef.current.get(peerId);
        }

        const localStream = localStreamRef.current;

        if (!localStream) {
            throw new Error('Local camera or microphone is not ready.');
        }

        const pc = new RTCPeerConnection(RTC_CONFIG);
        peerConnectionsRef.current.set(peerId, pc);

        localStream.getTracks().forEach((track) => {
            pc.addTrack(track, localStream);
        });

        pc.onicecandidate = (event) => {
            if (!event.candidate) return;

            sendSignal({
                type: 'signal',
                to: peerId,
                kind: 'candidate',
                candidate: event.candidate,
            });
        };

        pc.ontrack = (event) => {
            const incomingStream = event.streams?.[0] || new MediaStream([event.track]);

            upsertParticipant(peerId, {
                stream: incomingStream,
                status: 'connected',
            });

            addEvent('Remote media connected.');
        };

        pc.onconnectionstatechange = () => {
            upsertParticipant(peerId, {
                status: pc.connectionState,
            });

            if (pc.connectionState === 'failed' || pc.connectionState === 'closed') {
                addEvent(`Peer ${peerId.slice(0, 6)} ${pc.connectionState}.`);
            }
        };

        if (shouldCreateOffer) {
            const offer = await pc.createOffer({
                offerToReceiveAudio: true,
                offerToReceiveVideo: true,
            });

            await pc.setLocalDescription(offer);

            sendSignal({
                type: 'signal',
                to: peerId,
                kind: 'offer',
                description: pc.localDescription,
            });

            addEvent('Sent call offer to peer.');
        }

        return pc;
    };

    const handleSignal = async (message) => {
        const peerId = message.from;

        if (!peerId || peerId === selfIdRef.current) {
            return;
        }

        let pc = peerConnectionsRef.current.get(peerId);

        if (!pc) {
            pc = await createPeerConnection(peerId, false);
        }

        if (message.kind === 'offer') {
            await pc.setRemoteDescription(new RTCSessionDescription(message.description));
            await flushPendingCandidates(peerId, pc);

            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);

            sendSignal({
                type: 'signal',
                to: peerId,
                kind: 'answer',
                description: pc.localDescription,
            });

            addEvent('Received offer and sent answer.');
            return;
        }

        if (message.kind === 'answer') {
            await pc.setRemoteDescription(new RTCSessionDescription(message.description));
            await flushPendingCandidates(peerId, pc);
            addEvent('Received answer.');
            return;
        }

        if (message.kind === 'candidate') {
            if (pc.remoteDescription) {
                try {
                    await pc.addIceCandidate(new RTCIceCandidate(message.candidate));
                } catch {
                    // Ignore stale candidate.
                }
            } else {
                addPendingCandidate(peerId, message.candidate);
            }
        }
    };

    const handleSocketMessage = async (event) => {
        const message = safeJsonParse(event.data);

        if (!message?.type) {
            return;
        }

        if (message.type === 'welcome') {
            selfIdRef.current = message.id;
            setSelfId(message.id);

            const peers = Array.isArray(message.peers) ? message.peers : [];

            peers.forEach((peer) => {
                upsertParticipant(peer.id, {
                    name: peer.name || 'Guest',
                    audioEnabled: peer.audioEnabled !== false,
                    videoEnabled: peer.videoEnabled !== false,
                    status: 'waiting',
                });
            });

            for (const peer of peers) {
                await createPeerConnection(peer.id, true);
            }

            setStatus(`Joined room ${roomId}. Waiting for media connections.`);
            addEvent(`Joined room with ${peers.length} existing participant(s).`);
            return;
        }

        if (message.type === 'peer-joined') {
            const peer = message.peer;

            if (!peer || peer.id === selfIdRef.current) {
                return;
            }

            upsertParticipant(peer.id, {
                name: peer.name || 'Guest',
                audioEnabled: peer.audioEnabled !== false,
                videoEnabled: peer.videoEnabled !== false,
                status: 'waiting',
            });

            await createPeerConnection(peer.id, false);
            addEvent(`${peer.name || 'Someone'} joined the room.`);
            return;
        }

        if (message.type === 'peer-left') {
            closePeerConnection(message.id);
            removeParticipant(message.id);
            addEvent('A participant left the room.');
            return;
        }

        if (message.type === 'peer-media') {
            upsertParticipant(message.id, {
                audioEnabled: message.audioEnabled !== false,
                videoEnabled: message.videoEnabled !== false,
            });
            return;
        }

        if (message.type === 'signal') {
            await handleSignal(message);
        }
    };

    const joinRoom = async () => {
        try {
            setError('');

            if (!roomId) {
                throw new Error('Create a room link first.');
            }

            if (joined) {
                return;
            }

            await getLocalMedia();

            const socket = new WebSocket(makeWsUrl(roomId));
            wsRef.current = socket;

            socket.onopen = () => {
                setJoined(true);
                setStatus('Connected to signaling room. Building peer connections...');
                addEvent('Connected to room signaling.');

                sendSignal({
                    type: 'introduce',
                    name: displayName.trim() || 'Guest',
                    audioEnabled: micEnabled,
                    videoEnabled: cameraEnabled,
                });
            };

            socket.onmessage = handleSocketMessage;

            socket.onerror = () => {
                setError('WebSocket signaling failed. Check your Worker route or signaling URL.');
                addEvent('Signaling socket error.');
            };

            socket.onclose = () => {
                setJoined(false);
                setStatus('Disconnected from room signaling.');
                addEvent('Disconnected from room signaling.');
            };
        } catch (joinError) {
            setError(joinError.message || 'Could not join the room.');
        }
    };

    const leaveRoom = () => {
        if (wsRef.current) {
            wsRef.current.close();
            wsRef.current = null;
        }

        closeAllPeerConnections();
        setParticipants(new Map());
        setJoined(false);
        setStatus('Left the room.');
        addEvent('Left room.');
    };

    const resetEverything = () => {
        leaveRoom();

        if (localStreamRef.current) {
            localStreamRef.current.getTracks().forEach((track) => track.stop());
            localStreamRef.current = null;
        }

        if (screenTrackRef.current) {
            screenTrackRef.current.stop();
            screenTrackRef.current = null;
        }

        cameraVideoTrackRef.current = null;
        selfIdRef.current = '';
        setSelfId('');
        setRoomId('');
        setRoomLink('');
        setError('');
        setMicEnabled(true);
        setCameraEnabled(true);
        setScreenSharing(false);
        setLocalStreamVersion((value) => value + 1);

        const url = new URL(window.location.href);
        url.pathname = '/voice-call';
        url.search = '';
        window.history.pushState({}, '', url.toString());

        setStatus('Reset complete. Create a new room link to start again.');
        addEvent('Reset complete.');
    };

    const toggleMic = () => {
        const stream = localStreamRef.current;
        if (!stream) return;

        const next = !micEnabled;

        stream.getAudioTracks().forEach((track) => {
            track.enabled = next;
        });

        setMicEnabled(next);

        sendSignal({
            type: 'update-media',
            audioEnabled: next,
            videoEnabled: cameraEnabled,
        });

        addEvent(next ? 'Microphone unmuted.' : 'Microphone muted.');
    };

    const toggleCamera = () => {
        const stream = localStreamRef.current;
        if (!stream) return;

        const next = !cameraEnabled;

        stream.getVideoTracks().forEach((track) => {
            track.enabled = next;
        });

        setCameraEnabled(next);

        sendSignal({
            type: 'update-media',
            audioEnabled: micEnabled,
            videoEnabled: next,
        });

        addEvent(next ? 'Camera enabled.' : 'Camera disabled.');
    };

    const replaceVideoTrackForAllPeers = async (newTrack) => {
        for (const pc of peerConnectionsRef.current.values()) {
            const sender = pc.getSenders().find((item) => item.track?.kind === 'video');

            if (sender) {
                await sender.replaceTrack(newTrack);
            }
        }
    };

    const startScreenShare = async () => {
        try {
            if (!localStreamRef.current) {
                await getLocalMedia();
            }

            const screenStream = await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: false,
            });

            const screenTrack = screenStream.getVideoTracks()[0];

            if (!screenTrack) {
                throw new Error('No screen video track was found.');
            }

            screenTrackRef.current = screenTrack;

            const localStream = localStreamRef.current;
            const oldVideoTrack = localStream.getVideoTracks()[0];

            if (oldVideoTrack) {
                localStream.removeTrack(oldVideoTrack);
            }

            localStream.addTrack(screenTrack);

            await replaceVideoTrackForAllPeers(screenTrack);

            setScreenSharing(true);
            setCameraEnabled(true);
            setLocalStreamVersion((value) => value + 1);

            screenTrack.onended = async () => {
                await stopScreenShare();
            };

            sendSignal({
                type: 'update-media',
                audioEnabled: micEnabled,
                videoEnabled: true,
            });

            addEvent('Screen sharing started.');
        } catch (screenError) {
            setError(screenError.message || 'Could not start screen sharing.');
        }
    };

    const stopScreenShare = async () => {
        const localStream = localStreamRef.current;
        const originalCameraTrack = cameraVideoTrackRef.current;

        if (!localStream || !screenTrackRef.current) {
            return;
        }

        localStream.removeTrack(screenTrackRef.current);
        screenTrackRef.current.stop();
        screenTrackRef.current = null;

        if (originalCameraTrack) {
            localStream.addTrack(originalCameraTrack);
            await replaceVideoTrackForAllPeers(originalCameraTrack);
        } else {
            await replaceVideoTrackForAllPeers(null);
        }

        setScreenSharing(false);
        setLocalStreamVersion((value) => value + 1);
        addEvent('Screen sharing stopped.');
    };

    const activePeopleCount = participantList.length + (joined ? 1 : 0);

    return (
        <Container maxWidth="xl" sx={{ py: { xs: 5, md: 7 } }}>
            <Stack spacing={4}>
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 2.5, md: 3 },
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                    }}
                >
                    <Stack spacing={2.5}>
                        <Stack
                            direction={{ xs: 'column', lg: 'row' }}
                            spacing={2}
                            justifyContent="space-between"
                            alignItems={{ xs: 'stretch', lg: 'center' }}
                        >
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                    CloudCord Room
                                </Typography>

                                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                    Create one room link. Everyone opens the same link and clicks Join Room.
                                </Typography>
                            </Box>

                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                <Chip
                                    icon={<Groups />}
                                    label={`${activePeopleCount} in call`}
                                    color={activePeopleCount > 1 ? 'success' : 'default'}
                                    sx={{ fontWeight: 900 }}
                                />

                                <Chip
                                    icon={<SettingsInputAntenna />}
                                    label={joined ? 'Signaling connected' : 'Not joined'}
                                    color={joined ? 'success' : 'default'}
                                    sx={{ fontWeight: 900 }}
                                />

                                {selfId && (
                                    <Chip
                                        label={`ID ${selfId.slice(0, 6)}`}
                                        variant="outlined"
                                    />
                                )}
                            </Stack>
                        </Stack>

                        <Divider />

                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            spacing={1.5}
                            alignItems="stretch"
                        >
                            <TextField
                                label="Your display name"
                                value={displayName}
                                onChange={(event) => setDisplayName(event.target.value)}
                                placeholder="Nate"
                                disabled={joined}
                                sx={{ minWidth: { md: 260 } }}
                            />

                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<LinkIcon />}
                                onClick={createRoom}
                                disabled={joined}
                            >
                                Create Room Link
                            </Button>

                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                startIcon={<Groups />}
                                onClick={joinRoom}
                                disabled={!roomId || joined}
                            >
                                Join Room
                            </Button>

                            <Button
                                variant="outlined"
                                color="error"
                                size="large"
                                startIcon={<CallEnd />}
                                onClick={leaveRoom}
                                disabled={!joined}
                            >
                                Leave
                            </Button>
                        </Stack>

                        {roomLink && (
                            <Stack
                                direction={{ xs: 'column', md: 'row' }}
                                spacing={1}
                                alignItems="stretch"
                            >
                                <TextField
                                    label="Share this room link"
                                    value={roomLink}
                                    fullWidth
                                    InputProps={{ readOnly: true }}
                                />

                                <CopyButton value={roomLink} />
                            </Stack>
                        )}

                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                            {status}
                        </Typography>

                        {error && <Alert severity="error">{error}</Alert>}
                    </Stack>
                </Paper>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, minmax(0, 1fr))',
                            xl: 'repeat(3, minmax(0, 1fr))',
                        },
                        gap: 2,
                    }}
                >
                    <ParticipantTile
                        key={`local-${localStreamVersion}`}
                        name={displayName.trim() || 'You'}
                        stream={localTileStream}
                        isLocal
                        isMuted
                        audioEnabled={micEnabled}
                        videoEnabled={cameraEnabled}
                        status={joined ? 'connected' : 'local preview'}
                    />

                    {participantList.map((participant) => (
                        <ParticipantTile
                            key={participant.id}
                            name={participant.name}
                            stream={participant.stream}
                            audioEnabled={participant.audioEnabled}
                            videoEnabled={participant.videoEnabled}
                            status={participant.status}
                        />
                    ))}
                </Box>

                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 2.5, md: 3 },
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                    }}
                >
                    <Stack
                        direction={{ xs: 'column', lg: 'row' }}
                        spacing={2}
                        justifyContent="space-between"
                        alignItems={{ xs: 'stretch', lg: 'center' }}
                    >
                        <Stack spacing={0.5}>
                            <Typography variant="h5" sx={{ fontWeight: 950 }}>
                                Call Controls
                            </Typography>

                            <Typography color="text.secondary">
                                Mute, camera toggle, screen share, leave, or fully reset the room.
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} flexWrap="wrap">
                            <Tooltip title={micEnabled ? 'Mute microphone' : 'Unmute microphone'}>
                                <span>
                                    <IconButton
                                        onClick={toggleMic}
                                        disabled={!localStreamRef.current}
                                        color={micEnabled ? 'primary' : 'error'}
                                        sx={{ border: '1px solid', borderColor: 'divider' }}
                                    >
                                        {micEnabled ? <Mic /> : <MicOff />}
                                    </IconButton>
                                </span>
                            </Tooltip>

                            <Tooltip title={cameraEnabled ? 'Turn camera off' : 'Turn camera on'}>
                                <span>
                                    <IconButton
                                        onClick={toggleCamera}
                                        disabled={!localStreamRef.current}
                                        color={cameraEnabled ? 'primary' : 'error'}
                                        sx={{ border: '1px solid', borderColor: 'divider' }}
                                    >
                                        {cameraEnabled ? <Videocam /> : <VideocamOff />}
                                    </IconButton>
                                </span>
                            </Tooltip>

                            <Tooltip title={screenSharing ? 'Stop screen share' : 'Share screen'}>
                                <span>
                                    <IconButton
                                        onClick={screenSharing ? stopScreenShare : startScreenShare}
                                        disabled={!localStreamRef.current}
                                        color={screenSharing ? 'success' : 'primary'}
                                        sx={{ border: '1px solid', borderColor: 'divider' }}
                                    >
                                        <PresentToAll />
                                    </IconButton>
                                </span>
                            </Tooltip>

                            <Tooltip title="Reset everything">
                                <IconButton
                                    onClick={resetEverything}
                                    sx={{ border: '1px solid', borderColor: 'divider' }}
                                >
                                    <RestartAlt />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Paper>

                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 2.5, md: 3 },
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                    }}
                >
                    <Stack spacing={1.5}>
                        <Typography variant="h5" sx={{ fontWeight: 950 }}>
                            Room Activity
                        </Typography>

                        <Divider />

                        {events.map((event, index) => (
                            <Typography key={`${event}-${index}`} color="text.secondary">
                                {event}
                            </Typography>
                        ))}
                    </Stack>
                </Paper>

                <Alert severity="warning">
                    This needs the Cloudflare Worker/Durable Object signaling endpoint below.
                    Without signaling, a one-link group room cannot auto-connect people.
                </Alert>
            </Stack>
        </Container>
    );
}