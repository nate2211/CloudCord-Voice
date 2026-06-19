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
    BusinessCenter,
    CloudQueue,
    Code,
    FactCheck,
    Handshake,
    HeadsetMic,
    Hub,
    IntegrationInstructions,
    NetworkCheck,
    PhoneInTalk,
    Security,
    SupportAgent,
    Terminal,
    Troubleshoot,
} from '@mui/icons-material';

const serviceHighlights = [
    {
        label: 'AWS support',
        details:
            'EC2, S3, RDS, Route 53, Amplify, Elastic Beanstalk, PostgreSQL, DNS, and deployment handoff.',
        icon: <CloudQueue />,
    },
    {
        label: 'VoIP setup',
        details:
            'Teams Phone, Zoom Phone, Google Voice, call routing, voicemail, business hours, and user setup.',
        icon: <PhoneInTalk />,
    },
    {
        label: 'Freshservice workflows',
        details:
            'Ticket categories, statuses, assignment rules, intake flow, escalation paths, and handoff notes.',
        icon: <SupportAgent />,
    },
    {
        label: 'Node/Python automation',
        details:
            'Webhooks, scripts, APIs, forms, reporting exports, dashboards, and workflow glue code.',
        icon: <Code />,
    },
    {
        label: 'Network troubleshooting',
        details:
            'Packet capture basics, Wireshark review, DNS, firewall, NAT, ping, traceroute, and connectivity checks.',
        icon: <Troubleshoot />,
    },
];

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
            'The customer owns their AWS, Freshservice, Microsoft 365, Slack, Zoom Phone, Teams Phone, Google Voice, database, DNS, and calendar accounts.',
        icon: <Security />,
    },
    {
        title: 'Coding as the advantage',
        description:
            'When normal settings are not enough, we build the missing piece with React, Node.js, Python, Django, webhooks, scripts, forms, and dashboards.',
        icon: <Code />,
    },
];

const workflow = [
    {
        label: 'Discover',
        text: 'We learn what the customer is trying to fix: AWS, phone calls, missed calls, tickets, calendars, Microsoft 365, Slack, automation, or network issues.',
    },
    {
        label: 'Audit',
        text: 'We review existing software, DNS settings, firewall behavior, NAT patterns, endpoint access, AWS services, database notes, and support process.',
    },
    {
        label: 'Design',
        text: 'We create a fixed project scope with call routing, Freshservice workflow, AWS handoff needs, notifications, calendar routing, and automation requirements.',
    },
    {
        label: 'Configure',
        text: 'We configure selected tools such as AWS, Teams Phone, Zoom Phone, Google Voice, Freshservice, Slack, Microsoft 365, and calendars.',
    },
    {
        label: 'Test',
        text: 'We validate calls, tickets, webhooks, scripts, DNS records, Route 53 behavior, S3 access, RDS/app connection notes, and network findings.',
    },
    {
        label: 'Handoff',
        text: 'We deliver documentation, diagrams, screenshots, admin notes, workflow instructions, AWS notes, DNS notes, database notes, and scripts.',
    },
];

const technicalAreas = [
    {
        icon: <CloudQueue />,
        title: 'AWS service support',
        text: 'Amazon EC2, S3, RDS, Route 53, Amplify, Elastic Beanstalk, PostgreSQL, and deployment notes.',
    },
    {
        icon: <PhoneInTalk />,
        title: 'VoIP setup',
        text: 'Teams Phone, Zoom Phone, Google Voice, call flow, voicemail, business hours, and user setup.',
    },
    {
        icon: <FactCheck />,
        title: 'Ticketing and process',
        text: 'Freshservice setup, request categories, assignment rules, statuses, and support handoff.',
    },
    {
        icon: <NetworkCheck />,
        title: 'Network troubleshooting',
        text: 'Packet capture basics, Wireshark review, DNS, firewall, NAT, ping, and traceroute.',
    },
    {
        icon: <Hub />,
        title: 'Business tool integration',
        text: 'Microsoft 365, Slack, Google Calendar, Outlook Calendar, webhooks, and custom automation.',
    },
    {
        icon: <Terminal />,
        title: 'Developer support',
        text: 'React, Django, Node.js, Python, APIs, forms, scripts, and documentation.',
    },
];

const skills = [
    'Amazon EC2',
    'Amazon S3',
    'Amazon RDS',
    'Amazon Route 53',
    'AWS Amplify',
    'Elastic Beanstalk',
    'PostgreSQL / SQL',
    'React frontend support',
    'Django backend support',
    'Node.js scripts',
    'Python scripts',
    'Webhooks',
    'Freshservice workflows',
    'Microsoft 365 support flow',
    'Slack alerts',
    'Google Calendar routing',
    'Outlook Calendar routing',
    'Teams Phone setup',
    'Zoom Phone setup',
    'Google Voice setup',
    'Packet capture basics',
    'Wireshark review',
    'DNS settings',
    'Firewall rule review',
    'NAT behavior',
    'Ping and traceroute',
];

function ServiceWrapRow() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1.5,
                width: '100%',
                alignItems: 'stretch',
            }}
        >
            {serviceHighlights.map((item) => (
                <Paper
                    key={item.label}
                    elevation={0}
                    sx={{
                        flex: {
                            xs: '1 1 100%',
                            sm: '1 1 calc(50% - 12px)',
                            md: '1 1 calc(33.333% - 12px)',
                            xl: '1 1 calc(20% - 12px)',
                        },
                        minWidth: {
                            xs: '100%',
                            sm: 250,
                            md: 230,
                            xl: 190,
                        },
                        p: 1.75,
                        borderRadius: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.25,
                    }}
                >
                    <Box
                        sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                            flexShrink: 0,
                        }}
                    >
                        {item.icon}
                    </Box>

                    <Box sx={{ minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 950, lineHeight: 1.2 }}>
                            {item.label}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                                mt: 0.5,
                                lineHeight: 1.45,
                            }}
                        >
                            {item.details}
                        </Typography>
                    </Box>
                </Paper>
            ))}
        </Box>
    );
}

function About() {
    return (
        <Box>
            <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
                <Stack spacing={2.5} sx={{ maxWidth: 1080 }}>
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
                            letterSpacing: { xs: -1, md: -1.8 },
                            lineHeight: 1,
                        }}
                    >
                        A project-based technical partner for support systems, cloud basics, and automation.
                    </Typography>

                    <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        CloudCord Voice helps companies complete fixed-scope support technology
                        projects. We work with existing platforms, diagnose network issues, configure
                        business workflows, support practical AWS service setups, and build lightweight automation.
                    </Typography>

                    <ServiceWrapRow />
                </Stack>
            </Container>

            <Container maxWidth="xl" sx={{ pb: 8 }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '1.05fr 0.95fr',
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
                            height: '100%',
                        }}
                    >
                        <Stack spacing={2.5}>
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                                What We Actually Do
                            </Typography>

                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                We turn existing tools into a finished support and cloud workflow.
                            </Typography>

                            <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                                Most customers already have pieces of the system: Microsoft 365,
                                Slack, calendars, maybe a phone provider, maybe Freshservice, maybe
                                an AWS-hosted app, maybe no ticket system at all. CloudCord Voice
                                organizes those pieces into a reliable workflow with routing, ownership,
                                notifications, documentation, and handoff notes.
                            </Typography>

                            <Typography color="text.secondary" sx={{ lineHeight: 1.85 }}>
                                The business model is flat-rate and contract-based. The customer gets
                                a clear scope, a fixed deliverable, and a completed project instead of
                                an open-ended monthly subscription from us.
                            </Typography>

                            <Divider />

                            <ServiceWrapRow />
                        </Stack>
                    </Paper>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, minmax(0, 1fr))',
                                lg: '1fr',
                            },
                            gap: 2,
                        }}
                    >
                        {technicalAreas.map((item) => (
                            <Paper
                                key={item.title}
                                elevation={0}
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    bgcolor: 'background.paper',
                                    height: '100%',
                                }}
                            >
                                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                    <Box
                                        sx={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: 2,
                                            display: 'grid',
                                            placeItems: 'center',
                                            bgcolor: 'primary.main',
                                            color: 'primary.contrastText',
                                            flexShrink: 0,
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    <Box>
                                        <Typography sx={{ fontWeight: 950 }}>
                                            {item.title}
                                        </Typography>

                                        <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                            {item.text}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        ))}
                    </Box>
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
                            md: 'repeat(3, minmax(0, 1fr))',
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
                                <Stack spacing={2}>
                                    <Box
                                        sx={{
                                            width: 54,
                                            height: 54,
                                            borderRadius: 3,
                                            display: 'grid',
                                            placeItems: 'center',
                                            bgcolor: 'primary.main',
                                            color: 'primary.contrastText',
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 950, mb: 1 }}>
                                            {item.title}
                                        </Typography>

                                        <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Stack>
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
                                    md: 'repeat(2, minmax(0, 1fr))',
                                    xl: 'repeat(3, minmax(0, 1fr))',
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
                                        height: '100%',
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
                                    sm: 'repeat(2, minmax(0, 1fr))',
                                    md: 'repeat(3, minmax(0, 1fr))',
                                    xl: 'repeat(4, minmax(0, 1fr))',
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
                                        minHeight: 48,
                                        borderRadius: 2,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <AssignmentTurnedIn color="success" fontSize="small" />
                                    <Typography sx={{ fontWeight: 800 }}>
                                        {skill}
                                    </Typography>
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