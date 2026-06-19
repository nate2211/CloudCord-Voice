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
    BackupTable,
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
    Public,
    Security,
    Storage,
    SupportAgent,
    Terminal,
    Troubleshoot,
} from '@mui/icons-material';

const servicePills = [
    { label: 'AWS support', icon: <CloudQueue /> },
    { label: 'VoIP setup', icon: <PhoneInTalk /> },
    { label: 'Freshservice workflows', icon: <SupportAgent /> },
    { label: 'Node/Python automation', icon: <Code /> },
    { label: 'Network troubleshooting', icon: <Troubleshoot /> },
];

const flatRateServices = [
    {
        title: 'AWS Cloud Support Project',
        price: 'Flat Rate',
        description:
            'A practical AWS support project for small businesses that need help with hosting, storage, databases, DNS, and deployment handoff.',
        icon: <CloudQueue />,
        items: [
            'Amazon EC2 setup notes',
            'Amazon S3 storage/static asset review',
            'Amazon RDS and PostgreSQL/SQL support',
            'Amazon Route 53 DNS record review',
            'Amplify or Elastic Beanstalk deployment handoff',
        ],
    },
    {
        title: 'Voice Setup Project',
        price: 'Flat Rate',
        description:
            'A fixed-scope setup for Microsoft Teams Phone, Zoom Phone, or Google Voice for smaller business use cases.',
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
        title: 'Node/Python Automation Build',
        price: 'Flat Rate',
        description:
            'Custom automation between forms, Freshservice, calendars, Slack, Microsoft 365, AWS-hosted APIs, or other support tools.',
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
        title: 'Network Readiness Audit',
        price: 'Flat Rate',
        description:
            'A practical review of network conditions that can affect VoIP, support tools, AWS-hosted apps, and cloud platforms.',
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
            'A project to connect Microsoft 365, Slack, Google Calendar, Outlook Calendar, support notifications, and cloud handoff steps.',
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
        title: 'Support Reporting Package',
        price: 'Flat Rate',
        description:
            'A lightweight reporting project for teams that need visibility into tickets, calls, handoffs, cloud notes, and follow-ups.',
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
            'Best for customers who need answers before they commit to a setup.',
        points: [
            'Software and workflow review',
            'Network diagnostic checklist',
            'AWS/DNS/database findings when relevant',
            'Recommended build plan',
        ],
    },
    {
        name: 'Setup Contract',
        price: 'Fixed Project Quote',
        description:
            'Best for customers who need one system configured and handed over.',
        points: [
            'VoIP, Freshservice, AWS, or workflow setup',
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
            'Microsoft 365, Slack, or AWS workflow',
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

const technicalServices = [
    { label: 'Amazon EC2', icon: <CloudQueue /> },
    { label: 'Amazon S3', icon: <Storage /> },
    { label: 'Amazon RDS', icon: <BackupTable /> },
    { label: 'Amazon Route 53', icon: <Public /> },
    { label: 'AWS Amplify', icon: <CloudQueue /> },
    { label: 'Elastic Beanstalk', icon: <CloudQueue /> },
    { label: 'PostgreSQL / SQL', icon: <BackupTable /> },
    { label: 'React frontend support', icon: <Code /> },
    { label: 'Django backend support', icon: <Code /> },
    { label: 'Node.js / Python scripts', icon: <Code /> },
    { label: 'Webhooks', icon: <IntegrationInstructions /> },
    { label: 'Freshservice tickets', icon: <FactCheck /> },
    { label: 'Microsoft 365 workflows', icon: <CloudQueue /> },
    { label: 'Slack notifications', icon: <IntegrationInstructions /> },
    { label: 'Google Calendar', icon: <FactCheck /> },
    { label: 'Outlook Calendar', icon: <FactCheck /> },
    { label: 'Microsoft Teams Phone', icon: <PhoneInTalk /> },
    { label: 'Zoom Phone', icon: <PhoneInTalk /> },
    { label: 'Google Voice', icon: <CallSplit /> },
    { label: 'Packet capture basics', icon: <Terminal /> },
    { label: 'Wireshark review', icon: <Troubleshoot /> },
    { label: 'DNS settings', icon: <Dns /> },
    { label: 'Firewall rules', icon: <Security /> },
    { label: 'NAT behavior', icon: <Lan /> },
    { label: 'Ping / traceroute', icon: <NetworkCheck /> },
    { label: 'Handoff documentation', icon: <AssignmentTurnedIn /> },
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
                maxWidth: 1100,
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

function Services() {
    return (
        <Box>
            <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
                <Stack spacing={2.5} sx={{ maxWidth: 1100 }}>
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
                            letterSpacing: { xs: -1, md: -1.8 },
                            lineHeight: 1,
                        }}
                    >
                        Fixed-scope projects for AWS, VoIP, ticketing, integrations, diagnostics, and automation.
                    </Typography>

                    <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        Scoped contracts with clear deliverables, final testing, cloud notes,
                        workflow documentation, and a finished handoff.
                    </Typography>

                    <ResponsivePillGrid />

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                        <Button
                            component={NavLink}
                            to="/contact"
                            variant="contained"
                            size="large"
                            startIcon={<ContactPhone />}
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                        >
                            Request Flat Quote
                        </Button>

                        <Button
                            component={NavLink}
                            to="/about"
                            variant="outlined"
                            size="large"
                            endIcon={<ArrowForward />}
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
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
                            md: 'repeat(2, minmax(0, 1fr))',
                            xl: 'repeat(3, minmax(0, 1fr))',
                        },
                        gap: { xs: 2, md: 2.5 },
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
                            <CardContent sx={{ height: '100%' }}>
                                <Stack spacing={2} sx={{ height: '100%' }}>
                                    <Stack direction="row" justifyContent="space-between" spacing={2}>
                                        <Box
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                borderRadius: 3,
                                                display: 'grid',
                                                placeItems: 'center',
                                                bgcolor: 'primary.main',
                                                color: 'primary.contrastText',
                                                flexShrink: 0,
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

                                    <Box>
                                        <Typography variant="h5" sx={{ fontWeight: 950, mb: 1 }}>
                                            {service.title}
                                        </Typography>

                                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                            {service.description}
                                        </Typography>
                                    </Box>

                                    <Divider />

                                    <List dense sx={{ pt: 0 }}>
                                        {service.items.map((item) => (
                                            <ListItem key={item} disableGutters>
                                                <ListItemIcon sx={{ minWidth: 34 }}>
                                                    <CheckCircle color="success" fontSize="small" />
                                                </ListItemIcon>

                                                <ListItemText primary={item} />
                                            </ListItem>
                                        ))}
                                    </List>
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
                                Contract Model
                            </Typography>

                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                No default monthly retainer. Each job has a finish line.
                            </Typography>

                            <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 1000, lineHeight: 1.8 }}>
                                Every CloudCord Voice project starts with a scope and ends with a
                                deliverable: a completed setup, tested workflow, documentation, cloud
                                or network notes when relevant, and a handoff.
                            </Typography>
                        </Box>

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
                            {contractPackages.map((pkg) => (
                                <Paper
                                    key={pkg.name}
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        borderRadius: 4,
                                        border: '1px solid',
                                        borderColor:
                                            pkg.name === 'Setup Contract' ? 'primary.main' : 'divider',
                                        bgcolor:
                                            pkg.name === 'Setup Contract'
                                                ? 'rgba(124,77,255,0.08)'
                                                : 'background.default',
                                        height: '100%',
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
                            sm: 'repeat(2, minmax(0, 1fr))',
                            md: 'repeat(3, minmax(0, 1fr))',
                            xl: 'repeat(4, minmax(0, 1fr))',
                        },
                        gap: 2,
                    }}
                >
                    {technicalServices.map((item) => (
                        <Paper
                            key={item.label}
                            elevation={0}
                            sx={{
                                p: 2,
                                minHeight: 76,
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                                bgcolor: 'background.paper',
                                display: 'flex',
                                alignItems: 'center',
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
                                        color: 'primary.contrastText',
                                        flexShrink: 0,
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