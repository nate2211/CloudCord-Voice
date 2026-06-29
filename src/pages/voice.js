import React from 'react';
import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Groups, Link as LinkIcon, VideoCall } from '@mui/icons-material';
import VoiceCallRoom from '../components/voicecomponents';

function Voice() {
    return (
        <Box>
            <Helmet>
                <title>Voice Call | CloudCord Voice</title>
                <meta
                    name="description"
                    content="Create a browser voice and webcam room with a single shareable CloudCord Voice room link."
                />
                <meta
                    name="keywords"
                    content="CloudCord Voice call, WebRTC group call, browser voice chat, webcam room, video room"
                />
                <link rel="canonical" href="https://cloud-cord.com/voice-call" />
            </Helmet>

            <Box
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: '#050816',
                    isolation: 'isolate',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background:
                            'radial-gradient(circle at 18% 12%, rgba(124,77,255,0.32), transparent 34%), radial-gradient(circle at 82% 14%, rgba(0,229,255,0.2), transparent 32%), linear-gradient(135deg, rgba(3,7,18,0.97), rgba(3,7,18,0.82))',
                        zIndex: -2,
                    },
                }}
            >
                <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
                    <Stack spacing={2.5} sx={{ maxWidth: 980 }}>
                        <Chip
                            icon={<Groups />}
                            label="Group voice, webcam, and room-link calling"
                            color="primary"
                            sx={{
                                width: 'fit-content',
                                maxWidth: '100%',
                                fontWeight: 950,
                            }}
                        />

                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 950,
                                fontSize: { xs: 38, sm: 52, md: 68 },
                                lineHeight: 0.95,
                                letterSpacing: { xs: -1.2, md: -2.4 },
                            }}
                        >
                            Create a room link and let people join instantly.
                        </Typography>

                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{ maxWidth: 900, lineHeight: 1.75 }}
                        >
                            Start a browser-based voice and video room. Everyone joins the same
                            CloudCord Voice link, turns on camera or microphone, and appears in the
                            group call grid.
                        </Typography>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.25}>
                            <Chip icon={<LinkIcon />} label="One room link" variant="outlined" />
                            <Chip icon={<VideoCall />} label="Webcam tiles" variant="outlined" />
                            <Chip icon={<Groups />} label="Multiple people" variant="outlined" />
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            <VoiceCallRoom />
        </Box>
    );
}

export default Voice;