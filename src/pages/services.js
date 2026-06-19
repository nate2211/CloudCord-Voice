import { NavLink } from 'react-router-dom';

import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from '@mui/material';

import {
    Analytics,
    ArrowForward,
    AssignmentTurnedIn,
    CalendarMonth,
    CallSplit,
    CheckCircle,
    CloudQueue,
    Code,
    ContactPhone,
    Dns,
    FactCheck,
    HeadsetMic,
    IntegrationInstructions,
    Lan,
    NetworkCheck,
    PhoneInTalk,
    PriceCheck,
    Security,
    SupportAgent,
    Terminal,
    Troubleshoot,
} from '@mui/icons-material';

const flatRateServices = [
    {
        title: 'Voice Setup Project',
        price: 'Flat Rate',
        description:
            'A fixed-scope setup for Microsoft Teams Phone, Zoom Phone, or Google Voice for small/simple business use cases.',
        icon: <PhoneInTalk />,
        items: [
            'User and extension setup',
            'Call routing plan',
            'Voicemail and business hours',
            'Basic support call flow',
            'Final testing and handoff notes',
        ],
    },
    {
        title: 'Freshservice Support Desk Build',
        price: 'Flat Rate',
        description:
            'A completed Freshservice workflow build for companies that need tickets, ownership, and support visibility.',
        icon: <SupportAgent />,
        items: [
            'Ticket categories and statuses',
            'Assignment and escalation rules',
            'Support intake workflow',
            'Agent instructions',
            'Admin handoff documentation',
        ],
    },
    {
        title: 'Network Voice Readiness Audit',
        price: 'Flat Rate',
        description:
            'A practical review of network conditions that can affect VoIP, support tools, and cloud communication platforms.',
        icon: <NetworkCheck />,
        items: [
            'Packet capture basics',
            'Wireshark review',
            'DNS setting review',
            'Firewall and NAT behavior review',
            'Ping and traceroute testing',
        ],
    },
    {
        title: 'Business Workflow Integration',
        price: 'Flat Rate',
        description:
            'A project to connect Microsoft 365, Slack, Google Calendar, Outlook Calendar, and support notifications.',
        icon: <IntegrationInstructions />,
        items: [
            'Slack support notifications',
            'Microsoft 365 workflow mapping',
            'Google Calendar handoff',
            'Outlook Calendar handoff',
            'Final workflow documentation',
        ],
    },
    {
        title: 'Webhook Automation Build',
        price: 'Flat Rate',
        description:
            'Custom event-based automation between forms, Freshservice, calendars, Slack, Microsoft 365, or other support tools.',
        icon: <Code />,
        items: [
            'Webhook endpoint planning',
            'Trigger/action workflow',
            'Node.js or Python script',
            'Test payload examples',
            'Deployment and handoff notes',
        ],
    },
    {
        title: 'Support Reporting Package',
        price: 'Flat Rate',
        description:
            'A lightweight reporting project for support teams that need visibility into tickets, calls, handoffs, and follow-ups.',
        icon: <Analytics />,
        items: [
            'Ticket export structure',
            'Call/support report layout',
            'CSV or spreadsheet workflow',
            'Simple dashboard concept',
            'Final report template',
        ],
    },
];

const contractPackages = [
    {
        name: 'Diagnostic Contract',
        price: 'Starting Flat Quote',
        description:
            'Best for customers who need answers before they commit to a full setup.',
        points: [
            'Software and workflow review',
            'Network diagnostic checklist',
            'Findings report',
            'Recommended build plan',
        ],
    },
    {
        name: 'Setup Contract',
        price: 'Fixed Project Quote',
        description:
            'Best for customers who need one system configured and handed over.',
        points: [
            'VoIP or Freshservice setup',
            'Workflow documentation',
            'Testing checklist',
            'Admin handoff',
        ],
    },
    {
        name: 'Integration Contract',
        price: 'Fixed Project Quote',
        description:
            'Best for customers who need multiple tools connected into one workflow.',
        points: [
            'Microsoft 365 or Slack workflow',
            'Calendar integration planning',
            'Webhook automation',
            'Final test run',
        ],
    },
    {
        name: 'Custom Script Contract',
        price: 'Custom Flat Quote',
        description:
            'Best for customers who need code to fill the gap between their tools.',
        points: [
            'Node.js script',
            'Python script',
            'API/webhook handling',
            'README and handoff',
        ],
    },
];

function Services() {
    return (
        <Box>
            <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
                <Stack spacing={2.5} sx={{ maxWidth: 1000 }}>
                    <Chip
                        icon={<HeadsetMic />}
                        label="Flat-rate services"
                        color="primary"
                        sx={{ width: 'fit-content', fontWeight: 900 }}
                    />

                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 950,
                            letterSpacing: -1.8,
                            lineHeight: 1,
                        }}
                    >
                        Fixed-scope projects for VoIP, ticketing, integrations, diagnostics, and automation.
                    </Typography>

                    <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        CloudCord Voice does not sell open-ended monthly support by default.
                        We sell scoped contracts with clear deliverables, final testing, and a
                        finished handoff.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                        <Button
                            component={NavLink}
                            to="/contact"
                            variant="contained"
                            size="large"
                            startIcon={<ContactPhone />}
                        >
                            Request Flat Quote
                        </Button>

                        <Button
                            component={NavLink}
                            to="/about"
                            variant="outlined"
                            size="large"
                            endIcon={<ArrowForward />}
                        >
                            How We Work
                        </Button>
                    </Stack>
                </Stack>
            </Container>

            <Container maxWidth="xl" sx={{ pb: 8 }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(2, 1fr)',
                            xl: 'repeat(3, 1fr)',
                        },
                        gap: 2.5,
                    }}
                >
                    {flatRateServices.map((service) => (
                        <Card
                            key={service.title}
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
                                <Stack direction="row" justifyContent="space-between" spacing={2}>
                                    <Box
                                        sx={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: 3,
                                            display: 'grid',
                                            placeItems: 'center',
                                            bgcolor: 'primary.main',
                                            mb: 2,
                                        }}
                                    >
                                        {service.icon}
                                    </Box>

                                    <Chip
                                        icon={<PriceCheck />}
                                        label={service.price}
                                        color="primary"
                                        variant="outlined"
                                        sx={{ fontWeight: 900 }}
                                    />
                                </Stack>

                                <Typography variant="h5" sx={{ fontWeight: 950, mb: 1 }}>
                                    {service.title}
                                </Typography>

                                <Typography color="text.secondary" sx={{ lineHeight: 1.7, mb: 2 }}>
                                    {service.description}
                                </Typography>

                                <Divider sx={{ mb: 1 }} />

                                <List dense>
                                    {service.items.map((item) => (
                                        <ListItem key={item} disableGutters>
                                            <ListItemIcon sx={{ minWidth: 34 }}>
                                                <CheckCircle color="success" fontSize="small" />
                                            </ListItemIcon>

                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>

            <Container maxWidth="xl" sx={{ pb: 8 }}>
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
                    <Stack spacing={3}>
                        <Box>
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                                Contract Model
                            </Typography>

                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                No default monthly retainer. Each job has a finish line.
                            </Typography>

                            <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 950, lineHeight: 1.8 }}>
                                Every CloudCord Voice project starts with a scope and ends with a
                                deliverable. The customer gets a completed setup, a tested workflow,
                                documentation, and a handoff instead of an indefinite service agreement.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    md: 'repeat(4, 1fr)',
                                },
                                gap: 2.5,
                            }}
                        >
                            {contractPackages.map((pkg) => (
                                <Paper
                                    key={pkg.name}
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        borderRadius: 4,
                                        border: '1px solid',
                                        borderColor: pkg.name === 'Setup Contract' ? 'primary.main' : 'divider',
                                        bgcolor:
                                            pkg.name === 'Setup Contract'
                                                ? 'rgba(124,77,255,0.08)'
                                                : 'background.default',
                                    }}
                                >
                                    <Stack spacing={1.5}>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <PriceCheck color="primary" />
                                            <Typography variant="h5" sx={{ fontWeight: 950 }}>
                                                {pkg.name}
                                            </Typography>
                                        </Stack>

                                        <Typography color="primary" sx={{ fontWeight: 950 }}>
                                            {pkg.price}
                                        </Typography>

                                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                            {pkg.description}
                                        </Typography>

                                        <Divider />

                                        {pkg.points.map((point) => (
                                            <Stack key={point} direction="row" spacing={1} alignItems="center">
                                                <CheckCircle color="success" fontSize="small" />
                                                <Typography>{point}</Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Paper>
                            ))}
                        </Box>
                    </Stack>
                </Paper>
            </Container>

            <Container maxWidth="xl" sx={{ pb: 10 }}>
                <Typography variant="h4" sx={{ fontWeight: 950, mb: 3 }}>
                    Specific technical services
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            lg: 'repeat(4, 1fr)',
                        },
                        gap: 2,
                    }}
                >
                    {[
                        {
                            label: 'Packet capture basics',
                            icon: <Terminal />,
                        },
                        {
                            label: 'Wireshark review',
                            icon: <Troubleshoot />,
                        },
                        {
                            label: 'DNS settings',
                            icon: <Dns />,
                        },
                        {
                            label: 'Firewall rules',
                            icon: <Security />,
                        },
                        {
                            label: 'NAT behavior',
                            icon: <Lan />,
                        },
                        {
                            label: 'Ping / traceroute',
                            icon: <NetworkCheck />,
                        },
                        {
                            label: 'Freshservice tickets',
                            icon: <FactCheck />,
                        },
                        {
                            label: 'Microsoft 365 workflows',
                            icon: <CloudQueue />,
                        },
                        {
                            label: 'Slack notifications',
                            icon: <IntegrationInstructions />,
                        },
                        {
                            label: 'Google Calendar',
                            icon: <CalendarMonth />,
                        },
                        {
                            label: 'Outlook Calendar',
                            icon: <CalendarMonth />,
                        },
                        {
                            label: 'Node.js / Python scripts',
                            icon: <Code />,
                        },
                        {
                            label: 'Microsoft Teams Phone',
                            icon: <PhoneInTalk />,
                        },
                        {
                            label: 'Zoom Phone',
                            icon: <PhoneInTalk />,
                        },
                        {
                            label: 'Google Voice',
                            icon: <CallSplit />,
                        },
                        {
                            label: 'Handoff documentation',
                            icon: <AssignmentTurnedIn />,
                        },
                    ].map((item) => (
                        <Paper
                            key={item.label}
                            elevation={0}
                            sx={{
                                p: 2,
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                bgcolor: 'background.paper',
                            }}
                        >
                            <Stack direction="row" spacing={1.5} alignItems="center">
                                <Box
                                    sx={{
                                        width: 42,
                                        height: 42,
                                        borderRadius: 2,
                                        display: 'grid',
                                        placeItems: 'center',
                                        bgcolor: 'primary.main',
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Typography sx={{ fontWeight: 950 }}>
                                    {item.label}
                                </Typography>
                            </Stack>
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default Services;