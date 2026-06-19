import { NavLink } from 'react-router-dom';

import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Paper,
    Stack,
    Typography,
} from '@mui/material';

import {
    AccountTree,
    ArrowForward,
    BuildCircle,
    CalendarMonth,
    CheckCircle,
    CloudQueue,
    Code,
    Dns,
    FactCheck,
    HeadsetMic,
    IntegrationInstructions,
    Lan,
    NetworkCheck,
    PhoneInTalk,
    Security,
    SupportAgent,
    Terminal,
    Troubleshoot,
    VerifiedUser,
} from '@mui/icons-material';

const projectSteps = [
    {
        label: 'Scope',
        title: 'Define the exact project',
        text: 'We identify the customer’s phone setup, ticketing needs, Microsoft 365/Slack/calendar workflow, and network issues before quoting.',
    },
    {
        label: 'Build',
        title: 'Configure and integrate',
        text: 'We configure customer-owned tools like Freshservice, Microsoft Teams Phone, Zoom Phone, Google Voice, Slack, Microsoft 365, and calendars.',
    },
    {
        label: 'Deliver',
        title: 'Finish the contract',
        text: 'We hand over documentation, diagrams, tested workflows, scripts, and admin instructions so the project can close cleanly.',
    },
];

const skills = [
    {
        title: 'VoIP Platform Setup',
        description:
            'Flat-rate setup for Microsoft Teams Phone, Zoom Phone, or Google Voice for smaller businesses, including routing, users, voicemail, and business call flow.',
        icon: <PhoneInTalk />,
    },
    {
        title: 'Freshservice Ticket Workflows',
        description:
            'Ticket categories, statuses, assignment rules, support intake, escalation paths, and workflow documentation for customer support operations.',
        icon: <SupportAgent />,
    },
    {
        title: 'Network Diagnostics',
        description:
            'Packet capture basics, Wireshark review, DNS checks, firewall rule review, NAT behavior review, ping testing, and traceroute-based troubleshooting.',
        icon: <NetworkCheck />,
    },
    {
        title: 'Custom Automation',
        description:
            'Webhook workflows, custom Node.js scripts, Python scripts, reporting exports, support forms, internal tools, and lightweight dashboards.',
        icon: <Code />,
    },
];

const toolStack = [
    'Freshservice',
    'Microsoft 365',
    'Microsoft Teams Phone',
    'Zoom Phone',
    'Google Voice',
    'Slack',
    'Google Calendar',
    'Outlook Calendar',
    'Webhooks',
    'Node.js',
    'Python',
    'Wireshark',
];

function Home() {
    return (
        <Box>
            <Box
                sx={{
                    overflow: 'hidden',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    background:
                        'linear-gradient(135deg, rgba(124,77,255,0.22), transparent 45%), radial-gradient(circle at 85% 20%, rgba(0,229,255,0.14), transparent 34%)',
                }}
            >
                <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
                    <Stack direction={{ xs: 'column', lg: 'row' }} spacing={6} alignItems="center">
                        <Stack spacing={3} sx={{ flex: 1 }}>
                            <Chip
                                icon={<VerifiedUser />}
                                label="Flat-rate VoIP, support, and automation projects"
                                color="primary"
                                sx={{ width: 'fit-content', fontWeight: 900 }}
                            />

                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 950,
                                    fontSize: { xs: 42, sm: 56, md: 76 },
                                    lineHeight: 0.94,
                                    letterSpacing: -2.5,
                                }}
                            >
                                We build the support system, finish the contract, and hand it over.
                            </Typography>

                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{ maxWidth: 850, lineHeight: 1.75 }}
                            >
                                CloudCord Voice helps businesses complete fixed-scope projects around
                                VoIP setup, Freshservice ticketing, Microsoft 365 workflows, Slack
                                notifications, Google/Outlook calendar routing, network diagnostics,
                                and custom Node.js or Python automation.
                            </Typography>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                                <Button
                                    component={NavLink}
                                    to="/services"
                                    variant="contained"
                                    size="large"
                                    startIcon={<HeadsetMic />}
                                >
                                    View Flat-Rate Services
                                </Button>

                                <Button
                                    component={NavLink}
                                    to="/contact"
                                    variant="outlined"
                                    size="large"
                                    endIcon={<ArrowForward />}
                                >
                                    Request Project Quote
                                </Button>
                            </Stack>

                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                <Chip icon={<CloudQueue />} label="VoIP setup" />
                                <Chip icon={<FactCheck />} label="Freshservice workflows" />
                                <Chip icon={<Terminal />} label="Node/Python automation" />
                                <Chip icon={<Troubleshoot />} label="Network troubleshooting" />
                            </Stack>
                        </Stack>

                        <Paper
                            elevation={0}
                            sx={{
                                flex: 1,
                                width: '100%',
                                p: { xs: 2.5, md: 3 },
                                borderRadius: 5,
                                border: '1px solid',
                                borderColor: 'divider',
                                bgcolor: 'background.paper',
                                boxShadow: '0 30px 90px rgba(0,0,0,0.38)',
                            }}
                        >
                            <Stack spacing={2.25}>
                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <Box
                                        sx={{
                                            width: 58,
                                            height: 58,
                                            borderRadius: 3,
                                            display: 'grid',
                                            placeItems: 'center',
                                            bgcolor: 'primary.main',
                                        }}
                                    >
                                        <AccountTree />
                                    </Box>

                                    <Box>
                                        <Typography variant="h5" sx={{ fontWeight: 950 }}>
                                            Contract-Based Delivery
                                        </Typography>

                                        <Typography color="text.secondary">
                                            Scope the work, build the system, deliver the handoff.
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Divider />

                                {projectSteps.map((step) => (
                                    <Paper
                                        key={step.label}
                                        elevation={0}
                                        sx={{
                                            p: 2,
                                            borderRadius: 3,
                                            border: '1px solid',
                                            borderColor: 'divider',
                                            bgcolor: 'background.default',
                                        }}
                                    >
                                        <Typography color="primary" sx={{ fontWeight: 950 }}>
                                            {step.label}
                                        </Typography>

                                        <Typography sx={{ fontWeight: 950 }}>
                                            {step.title}
                                        </Typography>

                                        <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
                                            {step.text}
                                        </Typography>
                                    </Paper>
                                ))}
                            </Stack>
                        </Paper>
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth="xl" sx={{ py: 9 }}>
                <Stack spacing={2} sx={{ mb: 4, maxWidth: 900 }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                        Real Skills We Sell
                    </Typography>

                    <Typography variant="h3" sx={{ fontWeight: 950, letterSpacing: -1 }}>
                        Practical technical projects for companies that need support systems working now.
                    </Typography>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        CloudCord Voice does not require proprietary software to deliver value.
                        Customers own their accounts. We configure, connect, document, test, and
                        hand over a finished system.
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            lg: 'repeat(4, 1fr)',
                        },
                        gap: 2.5,
                    }}
                >
                    {skills.map((item) => (
                        <Card
                            key={item.title}
                            elevation={0}
                            sx={{
                                borderRadius: 4,
                                border: '1px solid',
                                borderColor: 'divider',
                                height: '100%',
                                bgcolor: 'background.paper',
                                transition: '160ms ease',
                                '&:hover': {
                                    borderColor: 'primary.main',
                                    transform: 'translateY(-4px)',
                                },
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        width: 54,
                                        height: 54,
                                        borderRadius: 3,
                                        display: 'grid',
                                        placeItems: 'center',
                                        bgcolor: 'primary.main',
                                        color: 'primary.contrastText',
                                        mb: 2,
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 950, mb: 1 }}>
                                    {item.title}
                                </Typography>

                                <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>

            <Container maxWidth="xl" sx={{ pb: 10 }}>
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 3, md: 5 },
                        borderRadius: 5,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                    }}
                >
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                        <Stack spacing={2} sx={{ flex: 1 }}>
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                                Tools We Work Around
                            </Typography>

                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                Common business software, configured into one support workflow.
                            </Typography>

                            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                The customer does not need to buy a custom platform from us. They can
                                use tools they already trust. We connect the support process across
                                voice, tickets, calendars, collaboration, and automation.
                            </Typography>
                        </Stack>

                        <Box
                            sx={{
                                flex: 1,
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                                gap: 1.25,
                            }}
                        >
                            {toolStack.map((tool) => (
                                <Stack
                                    key={tool}
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                    sx={{
                                        p: 1.25,
                                        borderRadius: 2,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <CheckCircle color="success" fontSize="small" />
                                    <Typography sx={{ fontWeight: 800 }}>{tool}</Typography>
                                </Stack>
                            ))}
                        </Box>
                    </Stack>
                </Paper>
            </Container>

            <Container maxWidth="xl" sx={{ pb: 10 }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(4, 1fr)',
                        },
                        gap: 2,
                    }}
                >
                    {[
                        {
                            icon: <Dns />,
                            title: 'DNS Settings',
                            text: 'Review DNS behavior that can affect login, service access, and support tools.',
                        },
                        {
                            icon: <Security />,
                            title: 'Firewall Rules',
                            text: 'Review allow/block behavior for voice apps, ticket systems, calendars, and collaboration tools.',
                        },
                        {
                            icon: <Lan />,
                            title: 'NAT Behavior',
                            text: 'Identify routing or translation patterns that may affect connectivity and call reliability.',
                        },
                        {
                            icon: <BuildCircle />,
                            title: 'Flat-Rate Handoff',
                            text: 'Deliver documentation, screenshots, diagrams, credentials checklist, and admin instructions.',
                        },
                    ].map((item) => (
                        <Paper
                            key={item.title}
                            elevation={0}
                            sx={{
                                p: 2.5,
                                borderRadius: 4,
                                border: '1px solid',
                                borderColor: 'divider',
                                bgcolor: 'background.paper',
                            }}
                        >
                            <Box
                                sx={{
                                    width: 46,
                                    height: 46,
                                    borderRadius: 2,
                                    display: 'grid',
                                    placeItems: 'center',
                                    bgcolor: 'primary.main',
                                    mb: 2,
                                }}
                            >
                                {item.icon}
                            </Box>

                            <Typography variant="h6" sx={{ fontWeight: 950, mb: 1 }}>
                                {item.title}
                            </Typography>

                            <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                {item.text}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default Home;