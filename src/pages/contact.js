import { useState } from 'react';

import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Link,
    MenuItem,
    Paper,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import {
    AlternateEmail,
    ArrowForward,
    AssignmentTurnedIn,
    CloudQueue,
    Code,
    FactCheck,
    HeadsetMic,
    LocalPhone,
    NetworkCheck,
    SupportAgent,
    Terminal,
    Troubleshoot,
} from '@mui/icons-material';

const WEB3FORMS_ACCESS_KEY = '35829ef1-413d-41d1-92cb-d6351aa427a9';

const contactEmail = 'cloudcordvoice@protonmail.com';

const contactReceivers = [
    'cloudcordvoice@protonmail.com',
    'unusualsuspectsclothing@gmail.com',
];

const servicePills = [
    { label: 'AWS support', icon: <CloudQueue /> },
    { label: 'VoIP setup', icon: <LocalPhone /> },
    { label: 'Freshservice workflows', icon: <SupportAgent /> },
    { label: 'Node/Python automation', icon: <Code /> },
    { label: 'Network troubleshooting', icon: <Troubleshoot /> },
];

const serviceOptions = [
    'AWS support',
    'VoIP setup',
    'Freshservice workflow',
    'Node/Python automation',
    'Network troubleshooting',
    'Not sure yet',
];

const quickCards = [
    {
        title: 'Fast quote request',
        description: 'Send a short message. We can ask follow-up questions after we review it.',
        icon: <FactCheck />,
    },
    {
        title: 'Flat-rate scope',
        description: 'We define a clear project with deliverables before starting the work.',
        icon: <AssignmentTurnedIn />,
    },
    {
        title: 'Remote-first support',
        description: 'AWS, VoIP, ticketing, workflow, automation, and diagnostics can usually start remotely.',
        icon: <NetworkCheck />,
    },
];

function ResponsivePillGrid() {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, minmax(0, 1fr))',
                    md: 'repeat(3, minmax(0, 1fr))',
                    xl: 'repeat(5, minmax(0, 1fr))',
                },
                gap: 1.25,
                width: '100%',
            }}
        >
            {servicePills.map((pill) => (
                <Paper
                    key={pill.label}
                    elevation={0}
                    sx={{
                        minHeight: 58,
                        px: 1.5,
                        py: 1.25,
                        borderRadius: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            width: 34,
                            height: 34,
                            borderRadius: 2,
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            flexShrink: 0,
                        }}
                    >
                        {pill.icon}
                    </Box>

                    <Typography sx={{ fontWeight: 900, lineHeight: 1.2 }}>
                        {pill.label}
                    </Typography>
                </Paper>
            ))}
        </Box>
    );
}

function Contact() {
    const [status, setStatus] = useState({
        loading: false,
        error: '',
        success: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formElement = event.currentTarget;
        const formData = new FormData(formElement);

        if (formData.get('botcheck')) {
            setStatus({
                loading: false,
                error: '',
                success: 'Message sent.',
            });

            formElement.reset();
            return;
        }

        formData.append('access_key', WEB3FORMS_ACCESS_KEY);
        formData.append('subject', 'New CloudCord Voice Contact Request');
        formData.append('from_name', 'CloudCord Voice Website');
        formData.append('replyto', String(formData.get('email') || ''));
        formData.append('ccemail', contactReceivers.join('; '));

        setStatus({
            loading: true,
            error: '',
            success: '',
        });

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Unable to send message.');
            }

            formElement.reset();

            setStatus({
                loading: false,
                error: '',
                success: 'Message sent. We will review it and follow up.',
            });
        } catch (error) {
            setStatus({
                loading: false,
                error:
                    error.message ||
                    `Something went wrong. Please email ${contactEmail} directly.`,
                success: '',
            });
        }
    };

    return (
        <Box>
            <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
                <Stack spacing={3} sx={{ maxWidth: 1050 }}>
                    <Chip
                        icon={<HeadsetMic />}
                        label="Contact CloudCord Voice"
                        color="primary"
                        sx={{ width: 'fit-content', fontWeight: 900 }}
                    />

                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 950,
                            letterSpacing: { xs: -1, md: -1.8 },
                            lineHeight: 1,
                        }}
                    >
                        Contact Us / Request a Quote
                    </Typography>

                    <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        Send a short message about what you need built, connected, diagnosed, or handed off.
                        We keep the first contact simple so you do not have to write a full project brief.
                    </Typography>

                    <ResponsivePillGrid />
                </Stack>
            </Container>

            <Container maxWidth="xl" sx={{ pb: { xs: 7, md: 10 } }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '0.85fr 1.15fr',
                        },
                        gap: { xs: 2.5, md: 3 },
                        alignItems: 'stretch',
                    }}
                >
                    <Stack spacing={2.5}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: 'repeat(3, minmax(0, 1fr))',
                                    lg: '1fr',
                                },
                                gap: 2,
                            }}
                        >
                            {quickCards.map((card) => (
                                <Card
                                    key={card.title}
                                    elevation={0}
                                    sx={{
                                        borderRadius: 4,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        bgcolor: 'background.paper',
                                        height: '100%',
                                    }}
                                >
                                    <CardContent>
                                        <Stack spacing={1.5}>
                                            <Box
                                                sx={{
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: 3,
                                                    display: 'grid',
                                                    placeItems: 'center',
                                                    bgcolor: 'primary.main',
                                                    color: 'primary.contrastText',
                                                }}
                                            >
                                                {card.icon}
                                            </Box>

                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 950 }}>
                                                    {card.title}
                                                </Typography>

                                                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                                    {card.description}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                borderRadius: 4,
                                border: '1px solid',
                                borderColor: 'divider',
                                bgcolor: 'background.paper',
                            }}
                        >
                            <Stack spacing={2}>
                                <Typography variant="h6" sx={{ fontWeight: 950 }}>
                                    Direct email
                                </Typography>

                                <Divider />

                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <AlternateEmail color="primary" />
                                    <Link
                                        href={`mailto:${contactEmail}`}
                                        underline="hover"
                                        color="inherit"
                                        sx={{ fontWeight: 900, wordBreak: 'break-word' }}
                                    >
                                        {contactEmail}
                                    </Link>
                                </Stack>

                                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                    Use the form for the fastest quote request, or email us directly if
                                    you already have notes, screenshots, or project details ready.
                                </Typography>
                            </Stack>
                        </Paper>
                    </Stack>

                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: 5,
                            border: '1px solid',
                            borderColor: 'divider',
                            bgcolor: 'background.paper',
                        }}
                    >
                        <Stack spacing={2.5}>
                            <Box>
                                <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                                    Simple Contact Form
                                </Typography>

                                <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                    Tell us what you need.
                                </Typography>

                                <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>
                                    Only the basics are required. We will follow up for the details needed
                                    to build a flat-rate scope.
                                </Typography>
                            </Box>

                            <Box component="form" onSubmit={handleSubmit}>
                                <Stack spacing={2}>
                                    <TextField
                                        name="name"
                                        label="Name"
                                        placeholder="Your name"
                                        required
                                        fullWidth
                                    />

                                    <TextField
                                        name="email"
                                        label="Email"
                                        placeholder="you@company.com"
                                        type="email"
                                        required
                                        fullWidth
                                    />

                                    <TextField
                                        name="service"
                                        label="What do you need help with?"
                                        defaultValue="Not sure yet"
                                        select
                                        fullWidth
                                    >
                                        {serviceOptions.map((option) => (
                                            <MenuItem key={option} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>

                                    <TextField
                                        name="message"
                                        label="Message"
                                        placeholder="Example: We need help setting up AWS DNS, a VoIP call flow, Freshservice tickets, or a small automation."
                                        multiline
                                        minRows={5}
                                        required
                                        fullWidth
                                    />

                                    <TextField
                                        name="botcheck"
                                        label="Bot Check"
                                        sx={{ display: 'none' }}
                                        inputProps={{
                                            tabIndex: -1,
                                            autoComplete: 'off',
                                        }}
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        endIcon={<ArrowForward />}
                                        disabled={status.loading}
                                        sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                                    >
                                        {status.loading ? 'Sending...' : 'Send Message'}
                                    </Button>

                                    {status.error && (
                                        <Typography color="error" sx={{ fontWeight: 800 }}>
                                            {status.error}
                                        </Typography>
                                    )}

                                    {status.success && (
                                        <Typography color="success.main" sx={{ fontWeight: 800 }}>
                                            {status.success}
                                        </Typography>
                                    )}

                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                        This form sends through Web3Forms, so no SMTP server, local backend,
                                        or always-on computer is required.
                                    </Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}

export default Contact;