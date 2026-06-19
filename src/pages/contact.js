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
    TextField,
    Typography,
} from '@mui/material';

import {
    AlternateEmail,
    ArrowForward,
    AssignmentTurnedIn,
    CalendarMonth,
    ContactSupport,
    FactCheck,
    HeadsetMic,
    LocalPhone,
    ManageSearch,
    NetworkCheck,
    Place,
    Terminal,
} from '@mui/icons-material';

const contactCards = [
    {
        title: 'Request a Flat-Rate Scope',
        description:
            'Tell us what system you need fixed or built. We define the deliverables before quoting.',
        icon: <ManageSearch />,
    },
    {
        title: 'Start a VoIP or Ticketing Build',
        description:
            'Best for Teams Phone, Zoom Phone, Google Voice, Freshservice, calendars, or support workflows.',
        icon: <LocalPhone />,
    },
    {
        title: 'Request a Network Diagnostic',
        description:
            'Best for packet capture basics, Wireshark review, DNS, firewall, NAT, ping, or traceroute work.',
        icon: <NetworkCheck />,
    },
];

function Contact() {
    return (
        <Box>
            <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
                <Stack spacing={2.5} sx={{ maxWidth: 950 }}>
                    <Chip
                        icon={<HeadsetMic />}
                        label="Request a fixed-scope project"
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
                        Tell us what needs to be built, connected, diagnosed, or handed off.
                    </Typography>

                    <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                        CloudCord Voice quotes work as a flat-rate project whenever possible.
                        We define the scope, complete the work, test the result, and deliver
                        documentation so the contract can close cleanly.
                    </Typography>
                </Stack>
            </Container>

            <Container maxWidth="xl" sx={{ pb: 10 }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            lg: '0.9fr 1.1fr',
                        },
                        gap: 3,
                    }}
                >
                    <Stack spacing={2.5}>
                        {contactCards.map((card) => (
                            <Card
                                key={card.title}
                                elevation={0}
                                sx={{
                                    borderRadius: 4,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    bgcolor: 'background.paper',
                                }}
                            >
                                <CardContent>
                                    <Stack direction="row" spacing={1.5}>
                                        <Box
                                            sx={{
                                                width: 52,
                                                height: 52,
                                                borderRadius: 3,
                                                display: 'grid',
                                                placeItems: 'center',
                                                bgcolor: 'primary.main',
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
                                    What happens after you submit?
                                </Typography>

                                <Divider />

                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <FactCheck color="primary" />
                                    <Typography color="text.secondary">
                                        We review your current software, network, and support workflow.
                                    </Typography>
                                </Stack>

                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <AssignmentTurnedIn color="primary" />
                                    <Typography color="text.secondary">
                                        We define a fixed project scope with clear deliverables.
                                    </Typography>
                                </Stack>

                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <Terminal color="primary" />
                                    <Typography color="text.secondary">
                                        If needed, we include Node.js, Python, or webhook automation in the quote.
                                    </Typography>
                                </Stack>

                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <CalendarMonth color="primary" />
                                    <Typography color="text.secondary">
                                        We deliver final documentation, test notes, and admin handoff.
                                    </Typography>
                                </Stack>

                                <Stack direction="row" spacing={1.5} alignItems="center">
                                    <Place color="primary" />
                                    <Typography color="text.secondary">
                                        Remote-first project delivery.
                                    </Typography>
                                </Stack>
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
                                    Project Request
                                </Typography>

                                <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                    Request a flat-rate CloudCord Voice quote.
                                </Typography>

                                <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.7 }}>
                                    This form is front-end only for now. Later you can connect it to
                                    Formspree, EmailJS, a backend API, Freshservice, Microsoft Forms,
                                    or a CRM.
                                </Typography>
                            </Box>

                            <Box
                                component="form"
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    alert('Project request submitted. Connect this form to a backend or form provider next.');
                                }}
                            >
                                <Stack spacing={2}>
                                    <TextField label="Name" placeholder="Your name" />

                                    <TextField label="Business Email" placeholder="you@company.com" />

                                    <TextField label="Company" placeholder="Business name" />

                                    <TextField
                                        label="Project Type"
                                        placeholder="VoIP setup, Freshservice workflow, network diagnostic, webhook automation, Node/Python script, etc."
                                    />

                                    <TextField
                                        label="Current Tools"
                                        placeholder="Freshservice, Microsoft 365, Slack, Google Calendar, Outlook Calendar, Teams Phone, Zoom Phone, Google Voice, etc."
                                    />

                                    <TextField
                                        label="Main Problem"
                                        placeholder="Missed calls, no ticket ownership, bad call quality, DNS/firewall issue, calendar handoff problem, manual workflow, etc."
                                    />

                                    <TextField
                                        label="Project Details"
                                        placeholder="Describe what needs to be built, connected, diagnosed, automated, or handed off."
                                        multiline
                                        minRows={5}
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        endIcon={<ArrowForward />}
                                    >
                                        Request Flat-Rate Quote
                                    </Button>
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