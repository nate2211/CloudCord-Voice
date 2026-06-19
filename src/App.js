import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';

import {
    AppBar,
    Box,
    Button,
    Container,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';

import {
    Code,
    HeadsetMic,
    HomeRounded,
    InfoRounded,
    MiscellaneousServicesRounded,
    MailRounded,
} from '@mui/icons-material';

import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Projects from './pages/projects';

const navLinks = [
    {
        label: 'Home',
        href: '/',
        icon: <HomeRounded />,
        end: true,
    },
    {
        label: 'About',
        href: '/about',
        icon: <InfoRounded />,
    },
    {
        label: 'Services',
        href: '/services',
        icon: <MiscellaneousServicesRounded />,
    },
    {
        label: 'Projects',
        href: '/projects',
        icon: <Code />,
    },
    {
        label: 'Contact',
        href: '/contact',
        icon: <MailRounded />,
    },
];

function NotFound() {
    return (
        <Container maxWidth="md" sx={{ py: 14, textAlign: 'center' }}>
            <Typography variant="h1" sx={{ fontWeight: 950 }}>
                404
            </Typography>

            <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
                This page does not exist.
            </Typography>

            <Button component={NavLink} to="/" variant="contained" size="large">
                Return Home
            </Button>
        </Container>
    );
}

function App() {
    return (
        <Box className="cloudcord-app">
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bgcolor: 'rgba(8, 11, 20, 0.9)',
                    backdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        disableGutters
                        sx={{
                            minHeight: { xs: 66, md: 72 },
                            gap: 2,
                        }}
                    >
                        <Stack
                            component={NavLink}
                            to="/"
                            direction="row"
                            alignItems="center"
                            spacing={1.25}
                            sx={{
                                flexGrow: 1,
                                textDecoration: 'none',
                                color: 'inherit',
                                minWidth: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 42,
                                    height: 42,
                                    borderRadius: 2.5,
                                    display: 'grid',
                                    placeItems: 'center',
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                    boxShadow: '0 0 26px rgba(124,77,255,0.38)',
                                    flexShrink: 0,
                                }}
                            >
                                <HeadsetMic />
                            </Box>

                            <Box sx={{ minWidth: 0 }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 950,
                                        lineHeight: 1,
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    CloudCord Voice
                                </Typography>

                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{
                                        display: { xs: 'none', sm: 'block' },
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    VoIP • AWS • Support • Automation
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={0.75}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'center',
                            }}
                        >
                            {navLinks.map((link) => (
                                <Button
                                    key={link.label}
                                    component={NavLink}
                                    to={link.href}
                                    end={link.end}
                                    startIcon={link.icon}
                                    color="inherit"
                                    sx={{
                                        borderRadius: 2,
                                        px: 1.35,
                                        minHeight: 42,
                                        color: 'text.secondary',
                                        fontWeight: 850,
                                        '&:hover': {
                                            color: 'text.primary',
                                            bgcolor: 'rgba(255,255,255,0.06)',
                                        },
                                        '&.active': {
                                            bgcolor: 'primary.main',
                                            color: 'primary.contrastText',
                                        },
                                    }}
                                >
                                    {link.label}
                                </Button>
                            ))}
                        </Stack>
                    </Toolbar>

                    <Stack
                        direction="row"
                        spacing={0.75}
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            overflowX: 'auto',
                            pb: 1.25,
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': {
                                display: 'none',
                            },
                        }}
                    >
                        {navLinks.map((link) => (
                            <Button
                                key={link.label}
                                component={NavLink}
                                to={link.href}
                                end={link.end}
                                startIcon={link.icon}
                                color="inherit"
                                size="small"
                                sx={{
                                    borderRadius: 2,
                                    px: 1.25,
                                    flexShrink: 0,
                                    color: 'text.secondary',
                                    fontWeight: 850,
                                    '&:hover': {
                                        color: 'text.primary',
                                        bgcolor: 'rgba(255,255,255,0.06)',
                                    },
                                    '&.active': {
                                        bgcolor: 'primary.main',
                                        color: 'primary.contrastText',
                                    },
                                }}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Stack>
                </Container>
            </AppBar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Box>
    );
}

export default App;