import { NavLink } from 'react-router-dom';

import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Link,
    Paper,
    Stack,
    Typography,
} from '@mui/material';

import {
    AccountTree,
    AlternateEmail,
    ArrowForward,
    BackupTable,
    BuildCircle,
    CheckCircle,
    CloudQueue,
    Code,
    HeadsetMic,
    IntegrationInstructions,
    NetworkCheck,
    PhoneInTalk,
    Public,
    Storage,
    SupportAgent,
    Troubleshoot,
    VerifiedUser,
} from '@mui/icons-material';

const contactEmail = 'cloudcordvoice@protonmail.com';

const serviceHighlights = [
    {
        label: 'AWS support',
        details:
            'EC2, S3, RDS, Route 53, Amplify, Elastic Beanstalk, PostgreSQL, and deployment handoff.',
        icon: <CloudQueue />,
    },
    {
        label: 'VoIP setup',
        details:
            'Teams Phone, Zoom Phone, Google Voice, routing, voicemail, business hours, and call flow.',
        icon: <PhoneInTalk />,
    },
    {
        label: 'Freshservice workflows',
        details:
            'Ticket categories, statuses, assignment rules, intake flow, escalation, and support handoff.',
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
            'Packet capture basics, Wireshark review, DNS, firewall, NAT, ping, and traceroute.',
        icon: <Troubleshoot />,
    },
];

const projectSteps = [
    {
        label: 'Scope',
        title: 'Define the exact project',
        text:
            'We identify the customer’s AWS, VoIP, ticketing, workflow, calendar, automation, or network problem before quoting.',
    },
    {
        label: 'Build',
        title: 'Configure and connect',
        text:
            'We work inside customer-owned tools like AWS, Freshservice, Microsoft 365, Slack, Teams Phone, Zoom Phone, Google Voice, and calendars.',
    },
    {
        label: 'Deliver',
        title: 'Test and hand off',
        text:
            'We provide final documentation, screenshots, handoff notes, testing results, and any scripts included in the project.',
    },
];

const skills = [
    {
        title: 'AWS Service Support',
        description:
            'Flat-rate help around Amazon EC2, S3, RDS, Route 53, Amplify, Elastic Beanstalk, PostgreSQL, DNS, and deployment handoff.',
        icon: <CloudQueue />,
    },
    {
        title: 'VoIP Platform Setup',
        description:
            'Microsoft Teams Phone, Zoom Phone, or Google Voice setup for smaller businesses, including routing, users, voicemail, and business hours.',
        icon: <PhoneInTalk />,
    },
    {
        title: 'Freshservice Workflows',
        description:
            'Ticket categories, statuses, assignment rules, support intake, escalation paths, and documentation for customer support operations.',
        icon: <SupportAgent />,
    },
    {
        title: 'Node/Python Automation',
        description:
            'Webhook workflows, custom scripts, support forms, reporting exports, internal tools, and lightweight dashboard handoffs.',
        icon: <Code />,
    },
    {
        title: 'Network Diagnostics',
        description:
            'Packet capture basics, Wireshark review, DNS checks, firewall review, NAT behavior, ping testing, and traceroute troubleshooting.',
        icon: <NetworkCheck />,
    },
    {
        title: 'Cloud App Handoff',
        description:
            'React, Django, static site, backend API, database, DNS, S3 storage, and deployment documentation support.',
        icon: <IntegrationInstructions />,
    },
];

const toolStack = [
    'Amazon EC2',
    'Amazon S3',
    'Amazon RDS',
    'Amazon Route 53',
    'AWS Amplify',
    'Elastic Beanstalk',
    'PostgreSQL / SQL',
    'React',
    'Django',
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

const spotlightCards = [
    {
        icon: <Public />,
        title: 'DNS and Route 53',
        text: 'Review DNS behavior, records, routing, and service access problems.',
    },
    {
        icon: <Storage />,
        title: 'S3 and Storage',
        text: 'Help structure static files, storage, backups, and simple handoff notes.',
    },
    {
        icon: <BackupTable />,
        title: 'RDS and Databases',
        text: 'Support database planning, connection notes, PostgreSQL/SQL handoff, and app configuration.',
    },
    {
        icon: <BuildCircle />,
        title: 'Flat-Rate Handoff',
        text: 'Deliver documentation, screenshots, diagrams, credential checklists, and admin notes.',
    },
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
                        borderColor: 'rgba(255,255,255,0.18)',
                        bgcolor: 'rgba(7,12,24,0.62)',
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

function DeliveryPanel() {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: { xs: 'auto', xl: 520 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    width: {
                        xs: '100%',
                        md: 'min(100%, 620px)',
                    },
                    maxWidth: 620,
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 5,
                    border: '1px solid',
                    borderColor: 'rgba(255,255,255,0.18)',
                    bgcolor: 'rgba(7,12,24,0.68)',
                }}
            >
                <Stack spacing={2}>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={1.5}
                        alignItems={{ xs: 'flex-start', sm: 'center' }}
                    >
                        <Box
                            sx={{
                                width: 58,
                                height: 58,
                                borderRadius: 3,
                                display: 'grid',
                                placeItems: 'center',
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                flexShrink: 0,
                            }}
                        >
                            <AccountTree />
                        </Box>

                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 950 }}>
                                Contract-Based Delivery
                            </Typography>

                            <Typography color="text.secondary">
                                Scope it, build it, test it, document it, and hand it over.
                            </Typography>
                        </Box>
                    </Stack>

                    <Divider sx={{ borderColor: 'rgba(255,255,255,0.14)' }} />

                    <Stack spacing={1.25}>
                        {projectSteps.map((step) => (
                            <Paper
                                key={step.label}
                                elevation={0}
                                sx={{
                                    p: 1.75,
                                    borderRadius: 3,
                                    border: '1px solid',
                                    borderColor: 'rgba(255,255,255,0.14)',
                                    bgcolor: 'rgba(3,7,18,0.34)',
                                }}
                            >
                                <Typography color="primary" sx={{ fontWeight: 950 }}>
                                    {step.label}
                                </Typography>

                                <Typography sx={{ fontWeight: 950 }}>
                                    {step.title}
                                </Typography>

                                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                    {step.text}
                                </Typography>
                            </Paper>
                        ))}
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    );
}

function PhotoPanel({
                        image,
                        label,
                        title,
                        text,
                        minHeight = 520,
                        imagePosition = 'center',
                    }) {
    return (
        <Paper
            elevation={0}
            sx={{
                position: 'relative',
                overflow: 'hidden',
                minHeight,
                borderRadius: 5,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: '#050816',
                isolation: 'isolate',
            }}
        >
            <Box
                component="img"
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: imagePosition,
                    opacity: 0.82,
                    zIndex: -3,
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(90deg, rgba(3,7,18,0.76), rgba(3,7,18,0.28) 48%, rgba(3,7,18,0.58)), linear-gradient(180deg, rgba(3,7,18,0.05), rgba(3,7,18,0.72))',
                    zIndex: -2,
                }}
            />

            <Stack
                spacing={1.5}
                sx={{
                    p: { xs: 3, md: 4 },
                    minHeight,
                    justifyContent: 'flex-end',
                    maxWidth: 760,
                }}
            >
                <Chip
                    label={label}
                    color="primary"
                    sx={{
                        width: 'fit-content',
                        fontWeight: 950,
                        bgcolor: 'rgba(124,77,255,0.28)',
                        border: '1px solid',
                        borderColor: 'rgba(124,77,255,0.48)',
                    }}
                />

                <Typography variant="h4" sx={{ fontWeight: 950, letterSpacing: -0.8 }}>
                    {title}
                </Typography>

                <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {text}
                </Typography>
            </Stack>
        </Paper>
    );
}

function Home() {
    return (
        <Box>
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
                        backgroundImage: 'url("/voip-stock1.webp")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center right',
                        opacity: 0.58,
                        zIndex: -3,
                    },
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(90deg, rgba(3,7,18,0.93), rgba(3,7,18,0.76) 42%, rgba(3,7,18,0.52)), linear-gradient(180deg, rgba(3,7,18,0.18), rgba(3,7,18,0.86)), radial-gradient(circle at 78% 15%, rgba(0,229,255,0.16), transparent 34%)',
                        zIndex: -2,
                    },
                }}
            >
                <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10, xl: 12 } }}>
                    <Stack
                        direction={{ xs: 'column', xl: 'row' }}
                        spacing={{ xs: 4, md: 6 }}
                        alignItems="center"
                    >
                        <Stack
                            spacing={3}
                            sx={{
                                flex: 0.95,
                                minWidth: 0,
                                justifyContent: 'center',
                            }}
                        >
                            <Chip
                                icon={<VerifiedUser />}
                                label="Flat-rate AWS, VoIP, support, and automation projects"
                                color="primary"
                                sx={{
                                    width: 'fit-content',
                                    maxWidth: '100%',
                                    fontWeight: 900,
                                }}
                            />

                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 950,
                                    fontSize: { xs: 40, sm: 52, md: 68, xl: 78 },
                                    lineHeight: 0.94,
                                    letterSpacing: { xs: -1.4, md: -2.5 },
                                }}
                            >
                                We build the support system, connect the cloud, and hand it over.
                            </Typography>

                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{ maxWidth: 900, lineHeight: 1.75 }}
                            >
                                CloudCord Voice helps businesses complete fixed-scope projects around
                                AWS support, VoIP setup, Freshservice workflows, Microsoft 365,
                                Slack, calendars, network diagnostics, and custom Node.js or Python automation.
                            </Typography>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                                <Button
                                    component={NavLink}
                                    to="/services"
                                    variant="contained"
                                    size="large"
                                    startIcon={<HeadsetMic />}
                                    sx={{ width: { xs: '100%', sm: 'auto' } }}
                                >
                                    View Services
                                </Button>

                                <Button
                                    component={NavLink}
                                    to="/contact"
                                    variant="outlined"
                                    size="large"
                                    endIcon={<ArrowForward />}
                                    sx={{
                                        width: { xs: '100%', sm: 'auto' },
                                        bgcolor: 'rgba(255,255,255,0.04)',
                                    }}
                                >
                                    Contact Us
                                </Button>
                            </Stack>

                            <ServiceWrapRow />
                        </Stack>

                        <Box
                            sx={{
                                flex: 1.05,
                                minWidth: 0,
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <DeliveryPanel />
                        </Box>
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth="xl" sx={{ py: { xs: 7, md: 9 } }}>
                <Stack spacing={2} sx={{ mb: 4, maxWidth: 950 }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                        Real Skills We Sell
                    </Typography>

                    <Typography variant="h3" sx={{ fontWeight: 950, letterSpacing: -1 }}>
                        Practical technical projects for companies that need support systems, cloud basics, and workflows working now.
                    </Typography>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        Customers own their accounts. We configure, connect, document, test, and
                        hand over a finished system across AWS, voice, tickets, calendars,
                        collaboration tools, diagnostics, and automation.
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, minmax(0, 1fr))',
                            lg: 'repeat(3, minmax(0, 1fr))',
                        },
                        gap: { xs: 2, md: 2.5 },
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
                            }}
                        >
                            <CardContent sx={{ height: '100%' }}>
                                <Stack spacing={2} sx={{ height: '100%' }}>
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

                                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                            {item.description}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>

            <Container maxWidth="xl" sx={{ pb: { xs: 7, md: 10 } }}>
                <PhotoPanel
                    image="/voip-stock2.webp"
                    label="Cloud communications planning"
                    title="Voice, support, and cloud systems planned together."
                    text="We organize the customer’s phone flow, support ownership, AWS notes, network findings, automation needs, and documentation into one clean project handoff."
                    minHeight={520}
                    imagePosition="center"
                />
            </Container>

            <Container maxWidth="xl" sx={{ pb: { xs: 7, md: 10 } }}>
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
                    <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4}>
                        <Stack spacing={2} sx={{ flex: 0.85 }}>
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                                Tools We Work Around
                            </Typography>

                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                Business software and AWS services configured into one support workflow.
                            </Typography>

                            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                We help customers use tools they already trust: AWS hosting pieces,
                                DNS records, storage, databases, phone routing, support desk setup,
                                Microsoft 365 workflows, Slack notifications, and custom scripts.
                            </Typography>
                        </Stack>

                        <Box
                            sx={{
                                flex: 1.15,
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: 'repeat(2, minmax(0, 1fr))',
                                    xl: 'repeat(3, minmax(0, 1fr))',
                                },
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
                                        minHeight: 48,
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

            <Container maxWidth="xl" sx={{ pb: { xs: 7, md: 10 } }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, minmax(0, 1fr))',
                            lg: 'repeat(4, minmax(0, 1fr))',
                        },
                        gap: 2,
                    }}
                >
                    {spotlightCards.map((item) => (
                        <Paper
                            key={item.title}
                            elevation={0}
                            sx={{
                                p: 2.5,
                                borderRadius: 4,
                                border: '1px solid',
                                borderColor: 'divider',
                                bgcolor: 'background.paper',
                                height: '100%',
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
                                {item.text}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Container>

            <Box
                component="footer"
                sx={{
                    borderTop: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    py: 4,
                }}
            >
                <Container maxWidth="xl">
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={2}
                        justifyContent="space-between"
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                    >
                        <Box>
                            <Typography sx={{ fontWeight: 950 }}>
                                CloudCord Voice
                            </Typography>

                            <Typography color="text.secondary">
                                Flat-rate AWS, VoIP, support workflow, diagnostics, and automation projects.
                            </Typography>
                        </Box>

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
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

export default Home;