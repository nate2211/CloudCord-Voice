import {
    Box,
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
    AssignmentTurnedIn,
    BuildCircle,
    BusinessCenter,
    CalendarMonth,
    Code,
    Dns,
    FactCheck,
    Groups,
    Handshake,
    HeadsetMic,
    Hub,
    IntegrationInstructions,
    Lan,
    NetworkCheck,
    Security,
    SupportAgent,
    Terminal,
    Troubleshoot,
} from '@mui/icons-material';

const principles = [
    {
        title: 'Flat-rate project delivery',
        description:
            'We define the scope, quote the work, complete the setup, test the workflow, document everything, and close the contract.',
        icon: <BusinessCenter />,
    },
    {
        title: 'Customer-owned software',
        description:
            'The customer owns their Freshservice, Microsoft 365, Slack, Zoom Phone, Teams Phone, Google Voice, and calendar accounts.',
        icon: <Security />,
    },
    {
        title: 'Coding as the advantage',
        description:
            'When normal settings are not enough, we build the missing piece with Node.js, Python, webhooks, scripts, forms, and dashboards.',
        icon: <Code />,
    },
];

const workflow = [
    {
        label: 'Discover',
        text: 'Interview the customer about phone calls, missed calls, ticket flow, calendar needs, Slack/Microsoft 365 usage, and current network issues.',
    },
    {
        label: 'Audit',
        text: 'Review the customer’s existing software, DNS settings, firewall behavior, NAT patterns, endpoint access, and support process.',
    },
    {
        label: 'Design',
        text: 'Create a fixed project scope with call routing, Freshservice workflow, notifications, calendar handoff, and automation requirements.',
    },
    {
        label: 'Configure',
        text: 'Configure the selected tools: Teams Phone, Zoom Phone, Google Voice, Freshservice, Slack, Microsoft 365, Google Calendar, or Outlook Calendar.',
    },
    {
        label: 'Test',
        text: 'Validate calls, tickets, webhooks, scripts, ping/traceroute findings, user access, notifications, and handoff behavior.',
    },
    {
        label: 'Handoff',
        text: 'Deliver documentation, diagrams, screenshots, admin notes, workflow instructions, and any Node.js/Python scripts included in the contract.',
    },
];

const skills = [
    'Packet capture basics',
    'Wireshark review',
    'DNS settings',
    'Firewall rule review',
    'NAT behavior',
    'Ping and traceroute',
    'Freshservice workflows',
    'Microsoft 365 support flow',
    'Slack alerts',
    'Google Calendar routing',
    'Outlook Calendar routing',
    'Webhooks',
    'Node.js scripts',
    'Python scripts',
    'Teams Phone setup',
    'Zoom Phone setup',
    'Google Voice setup',
];

function About() {
    return (
        <Box>
            <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
                <Stack spacing={2.5} sx={{ maxWidth: 980 }}>
                    <Chip
                        icon={<Handshake />}
                        label="About CloudCord Voice"
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
                        We are a project-based technical partner for support systems.
                    </Typography>

                    <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        CloudCord Voice helps companies complete fixed-scope support technology
                        projects. We work with existing platforms, diagnose network issues, configure
                        business workflows, and build lightweight automation when off-the-shelf
                        software does not connect everything cleanly.
                    </Typography>
                </Stack>
            </Container>

            <Container maxWidth="xl" sx={{ pb: 8 }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '1.1fr 0.9fr',
                        },
                        gap: 3,
                    }}
                >
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
                        <Stack spacing={2.5}>
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                                What We Actually Do
                            </Typography>

                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                We turn existing business tools into a finished support workflow.
                            </Typography>

                            <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                                Most customers already have pieces of the system: Microsoft 365,
                                Slack, calendars, maybe a phone provider, maybe Freshservice, maybe
                                no ticket system at all. CloudCord Voice organizes those pieces into a
                                reliable workflow with clear routing, ownership, notifications, and
                                documentation.
                            </Typography>

                            <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                                The business model is flat-rate and contract-based. The customer gets
                                a clear scope, a fixed deliverable, and a completed project instead of
                                an open-ended monthly subscription from us.
                            </Typography>

                            <Divider />

                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                <Chip icon={<HeadsetMic />} label="VoIP setup" />
                                <Chip icon={<SupportAgent />} label="Freshservice tickets" />
                                <Chip icon={<IntegrationInstructions />} label="Webhooks" />
                                <Chip icon={<Terminal />} label="Node/Python scripts" />
                            </Stack>
                        </Stack>
                    </Paper>

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
                        <Stack spacing={2}>
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                                Real Technical Areas
                            </Typography>

                            {[
                                {
                                    icon: <NetworkCheck />,
                                    title: 'Network troubleshooting',
                                    text: 'Packet capture basics, Wireshark review, DNS, firewall, NAT, ping, and traceroute.',
                                },
                                {
                                    icon: <FactCheck />,
                                    title: 'Ticketing and process',
                                    text: 'Freshservice setup, request categories, assignment rules, statuses, and support handoff.',
                                },
                                {
                                    icon: <Hub />,
                                    title: 'Business tool integration',
                                    text: 'Microsoft 365, Slack, Google Calendar, Outlook Calendar, webhooks, and custom automation.',
                                },
                            ].map((item) => (
                                <Paper
                                    key={item.title}
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <Stack direction="row" spacing={1.5}>
                                        <Box
                                            sx={{
                                                width: 44,
                                                height: 44,
                                                borderRadius: 2,
                                                display: 'grid',
                                                placeItems: 'center',
                                                bgcolor: 'primary.main',
                                            }}
                                        >
                                            {item.icon}
                                        </Box>

                                        <Box>
                                            <Typography sx={{ fontWeight: 950 }}>{item.title}</Typography>
                                            <Typography color="text.secondary">{item.text}</Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            ))}
                        </Stack>
                    </Paper>
                </Box>
            </Container>

            <Container maxWidth="xl" sx={{ pb: 8 }}>
                <Typography variant="h4" sx={{ fontWeight: 950, mb: 3 }}>
                    Our operating principles
                </Typography>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: 2.5,
                    }}
                >
                    {principles.map((item) => (
                        <Card
                            key={item.title}
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
                                <Box
                                    sx={{
                                        width: 54,
                                        height: 54,
                                        borderRadius: 3,
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

                                <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                                    {item.description}
                                </Typography>
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
                                Project Workflow
                            </Typography>

                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                Every job ends with a finished handoff.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    md: 'repeat(3, 1fr)',
                                },
                                gap: 2,
                            }}
                        >
                            {workflow.map((step, index) => (
                                <Paper
                                    key={step.label}
                                    elevation={0}
                                    sx={{
                                        p: 2.5,
                                        borderRadius: 4,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <Typography color="primary" sx={{ fontWeight: 950, mb: 1 }}>
                                        0{index + 1}
                                    </Typography>

                                    <Typography variant="h6" sx={{ fontWeight: 950, mb: 1 }}>
                                        {step.label}
                                    </Typography>

                                    <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                                        {step.text}
                                    </Typography>
                                </Paper>
                            ))}
                        </Box>
                    </Stack>
                </Paper>
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
                    <Stack spacing={3}>
                        <Box>
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                                Skill Inventory
                            </Typography>

                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                The services are based on skills we can realistically perform.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: 'repeat(2, 1fr)',
                                    lg: 'repeat(4, 1fr)',
                                },
                                gap: 1.25,
                            }}
                        >
                            {skills.map((skill) => (
                                <Stack
                                    key={skill}
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
                                    <AssignmentTurnedIn color="success" fontSize="small" />
                                    <Typography sx={{ fontWeight: 800 }}>{skill}</Typography>
                                </Stack>
                            ))}
                        </Box>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
}

export default About;