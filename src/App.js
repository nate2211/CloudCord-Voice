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
        label: 'Contact',
        href: '/contact',
        icon: <MailRounded />,
    },
];

function App() {
    return (
        <Box className="cloudcord-app">
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    bgcolor: 'rgba(8, 11, 20, 0.88)',
                    backdropFilter: 'blur(18px)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ minHeight: 78 }}>
                        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ flexGrow: 1 }}>
                            <Box
                                sx={{
                                    width: 46,
                                    height: 46,
                                    borderRadius: 3,
                                    display: 'grid',
                                    placeItems: 'center',
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                    boxShadow: '0 0 32px rgba(124,77,255,0.45)',
                                }}
                            >
                                <HeadsetMic />
                            </Box>

                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 950, lineHeight: 1 }}>
                                    CloudCord Voice
                                </Typography>

                                <Typography variant="caption" color="text.secondary">
                                    Flat-Rate VoIP • Support • Automation Projects
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack
                            direction="row"
                            spacing={1}
                            sx={{ display: { xs: 'none', md: 'flex' } }}
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
                                        px: 1.5,
                                        color: 'text.secondary',
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

                        <Button
                            component={NavLink}
                            to="/contact"
                            variant="contained"
                            sx={{ ml: 2, display: { xs: 'none', sm: 'inline-flex' } }}
                        >
                            Request Flat Quote
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Box>
    );
}

export default App;