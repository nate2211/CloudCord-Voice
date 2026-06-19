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
    ArrowForward,
    AutoAwesome,
    CheckCircle,
    Code,
    DashboardCustomize,
    GitHub,
    Hub,
    Lan,
    Memory,
    MusicNote,
    NetworkCheck,
    OpenInNew,
    Psychology,
    RocketLaunch,
    Security,
    SettingsInputComponent,
    Speed,
    Terminal,
    VerifiedUser,
} from '@mui/icons-material';

const githubProfileUrl = 'https://github.com/nate2211';

const featuredProjects = [
    {
        name: 'ChatProject',
        productName: 'PromptChat',
        category: 'AI Pipeline / Data Ingestion / Automation UI',
        repoUrl: 'https://github.com/nate2211/ChatProject',
        image: '/promptchat_gui.webp',
        imageAlt: 'PromptChat project user interface',
        icon: <Psychology />,
        description:
            'PromptChat is a modular, pipeline-based data ingestion and AI processing project. It is built around chainable processing blocks, web scraping, local code analysis, packet/data ingestion concepts, RAG-style workflows, memory storage, and GUI-driven pipeline control.',
        technicalProof:
            'Shows advanced Python GUI work, modular architecture, scraping utilities, local analysis, search/retrieval thinking, and custom workflow tooling.',
        businessValue:
            'This is strong proof for CloudCord Voice automation work: support dashboards, workflow tools, internal utilities, data collection helpers, and custom Node/Python-style project handoffs.',
        highlights: [
            'Pipeline-based AI workflow',
            'Block-based processing',
            'Web scraping utilities',
            'Local code analysis',
            'RAG-style retrieval',
            'GUI-driven operations',
        ],
        stack: ['Python', 'PyQt', 'Pipelines', 'Scraping', 'RAG', 'Automation'],
    },
    {
        name: 'moneroProject / Router Suite',
        productName: 'Router & Network Management GUI',
        category: 'Networking / Routing / Diagnostics UI',
        repoUrl: 'https://github.com/nate2211/moneroProject',
        image: '/router_gui.webp',
        imageAlt: 'Router and network management user interface',
        icon: <NetworkCheck />,
        description:
            'The router GUI represents systems-level network work from the Monero/network management suite. The repo describes a Python router built around Scapy and WinDivert with managers for ARP, DHCP, DNS, NAT, RIP, IGMP, packet capture, traffic analysis, and network control.',
        technicalProof:
            'Shows packet-flow thinking, routing logic, Windows network tooling, packet capture style monitoring, NAT/firewall behavior, and GUI-based technical operations.',
        businessValue:
            'This directly supports CloudCord Voice network troubleshooting services: DNS review, firewall/NAT behavior, Wireshark-style analysis, ping/traceroute support, and structured technical handoff notes.',
        highlights: [
            'Python router concepts',
            'Scapy / WinDivert work',
            'DNS and NAT thinking',
            'Packet capture UI',
            'Traffic diagnostics',
            'Systems troubleshooting',
        ],
        stack: ['Python', 'Networking', 'Scapy', 'WinDivert', 'NAT', 'DNS'],
    },
];

const engineeringProjects = [
    {
        name: 'GPUMiner',
        label: 'GPU Monero Miner / OpenCL Systems Tool',
        repoUrl: 'https://github.com/nate2211/GPUMiner',
        image: '/gpuminer_gui.webp',
        imageAlt: 'GPUMiner user interface',
        icon: <Speed />,
        description:
            'GPUMiner is a GPU-focused cryptocurrency mining project built around OpenCL. It focuses on GPU hashing, configurable work sizes, candidate generation, filtering, Monero RPC integration, P2Pool/Stratum-style compatibility, share processing, and real-time performance logging.',
        technicalProof:
            'Shows OpenCL experimentation, GPU workload tuning, queue-aware processing, runtime logs, hashrate tracking, candidate selection, and performance debugging.',
        businessValue:
            'This is shown as experimental systems-engineering proof only. It helps demonstrate technical depth with hardware, performance monitoring, logs, and complex runtime controls. It is not presented as a CloudCord Voice customer service.',
        highlights: [
            'OpenCL GPU miner',
            'Monero-focused tooling',
            'P2Pool / Stratum concepts',
            'Hashrate monitoring',
            'Candidate filtering',
            'Performance logs',
        ],
        stack: ['Python', 'OpenCL', 'GPU', 'Monero', 'P2Pool', 'Performance'],
        caution:
            'Portfolio note: shown as technical proof, not as financial advice, mining advice, or a business service offering.',
    },
    {
        name: 'CommunityProject',
        label: 'LAN-First P2P Community App',
        repoUrl: 'https://github.com/nate2211/CommunityProject',
        image: '/communityapp_gui.webp',
        imageAlt: 'CommunityProject user interface',
        icon: <Lan />,
        description:
            'CommunityProject is a LAN-first community app built around block-based features and a PyQt5 GUI. It includes local discovery, public rooms, private DMs, file offers, local wallet/ledger concepts, transaction pushes, and an optional Lighthouse relay layer for harder NAT/router situations.',
        technicalProof:
            'Shows peer discovery, room chat, direct messaging, file transfer handling, local ledger design, relay fallback thinking, and safety limits around file/message handling.',
        businessValue:
            'This supports CloudCord Voice credibility around collaboration workflows, internal communication tools, support tooling, and practical app interfaces that can be documented and handed off.',
        highlights: [
            'LAN peer discovery',
            'Public rooms and DMs',
            'File sharing workflow',
            'Local wallet / ledger',
            'Lighthouse relay layer',
            'PyQt5 GUI app',
        ],
        stack: ['Python', 'PyQt5', 'P2P', 'LAN', 'Files', 'Ledger'],
    },
    {
        name: 'MelodyProject',
        label: 'Modular DAW / Audio Engine',
        repoUrl: 'https://github.com/nate2211/MelodyProject',
        image: '/melodyproject_gui.webp',
        imageAlt: 'MelodyProject user interface',
        icon: <MusicNote />,
        description:
            'MelodyProject is a lightweight modular digital audio workstation and audio engine built with Python, NumPy, and PyQt6. It includes an FL-Studio-style piano roll, polyphonic sequencing, ghost notes, real-time playhead movement, instruments, effects, and WAV export.',
        technicalProof:
            'Shows advanced GUI design, custom graphics views, audio DSP, NumPy processing, piano-roll interaction, modular instruments/effects, and export workflows.',
        businessValue:
            'This proves CloudCord Voice can build polished, user-facing tools with complex controls, not just simple forms. It supports credibility for dashboards, admin panels, and internal workflow tools.',
        highlights: [
            'Piano roll UI',
            'Polyphonic sequencing',
            'NumPy DSP engine',
            'Instrument blocks',
            'Effects chain',
            'WAV export',
        ],
        stack: ['Python', 'PyQt6', 'NumPy', 'DSP', 'Audio', 'GUI'],
    },
];

const systemsProof = [
    {
        name: 'BlockNet',
        label: 'Blob Relay / Block Pipeline Communication',
        repoUrl: 'https://github.com/nate2211/BlockNet',
        icon: <Hub />,
        description:
            'BlockNet is a lightweight blob relay for storing and retrieving binary objects over HTTP. It includes a C++ core server/client, PyQt5 management GUI, token support, server stats, heartbeat monitoring, PUT/GET workflows, and Python blocks for pipeline integration.',
        businessValue:
            'This is useful proof for backend-style thinking: small services, object relay workflows, API-style access, monitoring, tokens, process control, and integration between tools.',
        stack: ['C++', 'Python', 'PyQt5', 'HTTP', 'Relay', 'Blocks'],
    },
    {
        name: 'PromptChat Intelligence Blocks',
        label: 'Search / Scraping / Retrieval Thinking',
        repoUrl: 'https://github.com/nate2211/ChatProject',
        icon: <Memory />,
        description:
            'PromptChat includes web/media discovery ideas, sniffing modules, local code indexing, SQLite FTS-style search, memory storage, and model flexibility with local or remote AI workflows.',
        businessValue:
            'This helps support CloudCord Voice’s automation pitch: custom scripts, technical research tools, support workflows, and structured handoff systems.',
        stack: ['Scraping', 'Search', 'Code Indexing', 'Memory', 'AI Tools'],
    },
    {
        name: 'Network Management Suite',
        label: 'Router / Monitoring / Packet Visibility',
        repoUrl: 'https://github.com/nate2211/moneroProject',
        icon: <AccountTree />,
        description:
            'The network portion of the suite describes modular routing and security work using ARP, DHCP, DNS, NAT, RIP, IGMP, WinTun/WinDivert, packet capture, traffic analysis, and GeoIP-style visibility.',
        businessValue:
            'This supports real business troubleshooting language: DNS issues, routing behavior, firewall rules, NAT problems, packet capture basics, and documentation.',
        stack: ['Routing', 'DNS', 'NAT', 'Packets', 'Monitoring'],
    },
];

const businessServices = [
    'VoIP setup support',
    'AWS support projects',
    'Freshservice workflows',
    'Node/Python automation',
    'Network troubleshooting',
    'DNS / firewall / NAT review',
    'Technical documentation',
    'Project handoff notes',
];

const credibilityPoints = [
    {
        title: 'Real engineering background',
        text:
            'The portfolio shows code, GUI tools, systems work, automation pipelines, and project-style applications built by CloudCord Voice’s owner.',
        icon: <Code />,
    },
    {
        title: 'Customer-facing UI ability',
        text:
            'The screenshots show working interfaces, not just command-line scripts. This helps prove dashboard and internal tool capability.',
        icon: <DashboardCustomize />,
    },
    {
        title: 'Automation and workflow thinking',
        text:
            'Several projects use blocks, pipelines, relays, processing chains, and modular features that map well to business automation work.',
        icon: <SettingsInputComponent />,
    },
    {
        title: 'Troubleshooting mindset',
        text:
            'Network, mining, routing, relay, logging, and monitoring projects show comfort with debugging complex technical systems.',
        icon: <Terminal />,
    },
];

function ProjectScreenshot({ src, alt, priority = false }) {
    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: '#050816',
                aspectRatio: { xs: '16 / 10', md: '16 / 9' },
            }}
        >
            <Box
                component="img"
                src={src}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                sx={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
            />
        </Box>
    );
}

function FeaturedProjectCard({ project, reverse = false }) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: { xs: 2.5, md: 3.5 },
                borderRadius: 5,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
            }}
        >
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        lg: reverse ? '0.9fr 1.1fr' : '1.1fr 0.9fr',
                    },
                    gap: { xs: 3, md: 4 },
                    alignItems: 'center',
                }}
            >
                <Box sx={{ order: { xs: 1, lg: reverse ? 2 : 1 } }}>
                    <ProjectScreenshot
                        src={project.image}
                        alt={project.imageAlt}
                        priority={!reverse}
                    />
                </Box>

                <Stack spacing={2.25} sx={{ order: { xs: 2, lg: reverse ? 1 : 2 } }}>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        <Chip
                            icon={project.icon}
                            label={project.category}
                            color="primary"
                            sx={{ fontWeight: 900 }}
                        />
                        <Chip label={project.name} variant="outlined" sx={{ fontWeight: 900 }} />
                    </Stack>

                    <Box>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 950,
                                letterSpacing: -1,
                                lineHeight: 1,
                            }}
                        >
                            {project.productName}
                        </Typography>

                        <Typography color="text.secondary" sx={{ mt: 1.25, lineHeight: 1.75 }}>
                            {project.description}
                        </Typography>
                    </Box>

                    <Paper
                        elevation={0}
                        sx={{
                            p: 2,
                            borderRadius: 3,
                            border: '1px solid',
                            borderColor: 'divider',
                            bgcolor: 'background.default',
                        }}
                    >
                        <Typography color="primary" sx={{ fontWeight: 950, mb: 0.75 }}>
                            Technical proof
                        </Typography>

                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                            {project.technicalProof}
                        </Typography>
                    </Paper>

                    <Paper
                        elevation={0}
                        sx={{
                            p: 2,
                            borderRadius: 3,
                            border: '1px solid',
                            borderColor: 'divider',
                            bgcolor: 'background.default',
                        }}
                    >
                        <Typography color="primary" sx={{ fontWeight: 950, mb: 0.75 }}>
                            Business relevance
                        </Typography>

                        <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                            {project.businessValue}
                        </Typography>
                    </Paper>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: 'repeat(2, minmax(0, 1fr))',
                            },
                            gap: 1,
                        }}
                    >
                        {project.highlights.map((item) => (
                            <Stack
                                key={item}
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                sx={{
                                    p: 1.1,
                                    borderRadius: 2,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    bgcolor: 'background.default',
                                }}
                            >
                                <CheckCircle color="success" fontSize="small" />
                                <Typography sx={{ fontWeight: 800 }}>{item}</Typography>
                            </Stack>
                        ))}
                    </Box>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {project.stack.map((tag) => (
                            <Chip key={tag} label={tag} size="small" />
                        ))}
                    </Stack>

                    <Button
                        component={Link}
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        endIcon={<OpenInNew />}
                        sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                    >
                        View GitHub Repository
                    </Button>
                </Stack>
            </Box>
        </Paper>
    );
}

function EngineeringProjectCard({ project }) {
    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                borderRadius: 5,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                overflow: 'hidden',
            }}
        >
            <ProjectScreenshot src={project.image} alt={project.imageAlt} />

            <CardContent>
                <Stack spacing={1.75}>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                        <Box
                            sx={{
                                width: 46,
                                height: 46,
                                borderRadius: 2.5,
                                display: 'grid',
                                placeItems: 'center',
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                flexShrink: 0,
                            }}
                        >
                            {project.icon}
                        </Box>

                        <Box sx={{ minWidth: 0 }}>
                            <Typography variant="h6" sx={{ fontWeight: 950 }}>
                                {project.name}
                            </Typography>

                            <Typography variant="body2" color="primary" sx={{ fontWeight: 850 }}>
                                {project.label}
                            </Typography>
                        </Box>
                    </Stack>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {project.description}
                    </Typography>

                    <Divider />

                    <Typography color="primary" sx={{ fontWeight: 950 }}>
                        Technical proof
                    </Typography>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {project.technicalProof}
                    </Typography>

                    <Typography color="primary" sx={{ fontWeight: 950 }}>
                        Business relevance
                    </Typography>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {project.businessValue}
                    </Typography>

                    {project.caution && (
                        <Paper
                            elevation={0}
                            sx={{
                                p: 1.5,
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'rgba(255,193,7,0.35)',
                                bgcolor: 'rgba(255,193,7,0.08)',
                            }}
                        >
                            <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                {project.caution}
                            </Typography>
                        </Paper>
                    )}

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: 1,
                        }}
                    >
                        {project.highlights.map((item) => (
                            <Stack
                                key={item}
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                sx={{
                                    p: 1,
                                    borderRadius: 2,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    bgcolor: 'background.default',
                                }}
                            >
                                <CheckCircle color="success" fontSize="small" />
                                <Typography sx={{ fontWeight: 800 }}>{item}</Typography>
                            </Stack>
                        ))}
                    </Box>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {project.stack.map((tag) => (
                            <Chip key={tag} label={tag} size="small" />
                        ))}
                    </Stack>

                    <Button
                        component={Link}
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        endIcon={<OpenInNew />}
                        sx={{ width: '100%' }}
                    >
                        View Repository
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

function SystemsProofCard({ item }) {
    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                borderRadius: 4,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.default',
            }}
        >
            <CardContent>
                <Stack spacing={1.75}>
                    <Box
                        sx={{
                            width: 52,
                            height: 52,
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
                        <Typography variant="h6" sx={{ fontWeight: 950 }}>
                            {item.name}
                        </Typography>

                        <Typography color="primary" sx={{ fontWeight: 850 }}>
                            {item.label}
                        </Typography>
                    </Box>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {item.description}
                    </Typography>

                    <Divider />

                    <Typography color="primary" sx={{ fontWeight: 950 }}>
                        Why it matters
                    </Typography>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {item.businessValue}
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                        {item.stack.map((tag) => (
                            <Chip key={tag} label={tag} size="small" />
                        ))}
                    </Stack>

                    <Button
                        component={Link}
                        href={item.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="text"
                        endIcon={<OpenInNew />}
                        sx={{ width: 'fit-content', px: 0 }}
                    >
                        Open repo
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
}

function Projects() {
    return (
        <Box>
            <Box
                sx={{
                    overflow: 'hidden',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    bgcolor: '#050816',
                    background:
                        'linear-gradient(135deg, rgba(124,77,255,0.22), transparent 42%), radial-gradient(circle at 84% 18%, rgba(0,229,255,0.16), transparent 34%)',
                }}
            >
                <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
                    <Stack spacing={3} sx={{ maxWidth: 1100 }}>
                        <Chip
                            icon={<VerifiedUser />}
                            label="CloudCord Voice Engineering Portfolio"
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
                            Real public projects that show our technical range.
                        </Typography>

                        <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                            This page uses our own GitHub projects as transparent technical credentials.
                            These are not client deployments. They show hands-on experience with GUI tools,
                            automation pipelines, networking, peer-to-peer communication, mining experiments,
                            audio engines, and system monitoring.
                        </Typography>

                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                            <Button
                                component={Link}
                                href={githubProfileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                startIcon={<GitHub />}
                                endIcon={<OpenInNew />}
                                sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                            >
                                View GitHub Profile
                            </Button>

                            <Button
                                component={NavLink}
                                to="/contact"
                                variant="outlined"
                                endIcon={<ArrowForward />}
                                sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                            >
                                Contact CloudCord Voice
                            </Button>
                        </Stack>

                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: 'repeat(2, minmax(0, 1fr))',
                                    lg: 'repeat(4, minmax(0, 1fr))',
                                },
                                gap: 1.5,
                            }}
                        >
                            {credibilityPoints.map((item) => (
                                <Paper
                                    key={item.title}
                                    elevation={0}
                                    sx={{
                                        p: 2,
                                        borderRadius: 3,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        bgcolor: 'background.paper',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 42,
                                            height: 42,
                                            borderRadius: 2.25,
                                            display: 'grid',
                                            placeItems: 'center',
                                            bgcolor: 'primary.main',
                                            color: 'primary.contrastText',
                                            mb: 1.5,
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    <Typography sx={{ fontWeight: 950, mb: 0.75 }}>
                                        {item.title}
                                    </Typography>

                                    <Typography color="text.secondary" sx={{ lineHeight: 1.65 }}>
                                        {item.text}
                                    </Typography>
                                </Paper>
                            ))}
                        </Box>
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth="xl" sx={{ py: { xs: 7, md: 9 } }}>
                <Stack spacing={4}>
                    <Box sx={{ maxWidth: 960 }}>
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                            Featured Code Proof
                        </Typography>

                        <Typography variant="h3" sx={{ fontWeight: 950, letterSpacing: -1 }}>
                            Projects that connect directly to CloudCord Voice services.
                        </Typography>

                        <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.8 }}>
                            These projects are presented in a business-friendly way: what the project is,
                            what it proves technically, and how that translates into AWS support, VoIP setup,
                            Freshservice workflows, automation, diagnostics, and technical handoff work.
                        </Typography>
                    </Box>

                    {featuredProjects.map((project, index) => (
                        <FeaturedProjectCard
                            key={project.name}
                            project={project}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </Stack>
            </Container>

            <Container maxWidth="xl" sx={{ pb: { xs: 7, md: 9 } }}>
                <Stack spacing={3}>
                    <Box sx={{ maxWidth: 960 }}>
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                            Additional Project Interfaces
                        </Typography>

                        <Typography variant="h3" sx={{ fontWeight: 950, letterSpacing: -1 }}>
                            More public projects with real UIs and technical systems.
                        </Typography>

                        <Typography color="text.secondary" sx={{ mt: 1.5, lineHeight: 1.8 }}>
                            These examples show a wider technical range. GPUMiner is intentionally framed as
                            experimental systems-performance proof, while CommunityProject and MelodyProject
                            show communication, app, GUI, media, and workflow experience.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                lg: 'repeat(3, minmax(0, 1fr))',
                            },
                            gap: 2.5,
                        }}
                    >
                        {engineeringProjects.map((project) => (
                            <EngineeringProjectCard key={project.name} project={project} />
                        ))}
                    </Box>
                </Stack>
            </Container>

            <Container maxWidth="xl" sx={{ pb: { xs: 7, md: 9 } }}>
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
                        <Box sx={{ maxWidth: 980 }}>
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 950 }}>
                                Systems and Pipeline Work
                            </Typography>

                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                More repo-backed proof behind the business.
                            </Typography>

                            <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.8 }}>
                                Some important engineering projects do not need a huge screenshot on the page.
                                They still help prove architecture, backend thinking, monitoring, and workflow design.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    md: 'repeat(3, minmax(0, 1fr))',
                                },
                                gap: 2,
                            }}
                        >
                            {systemsProof.map((item) => (
                                <SystemsProofCard key={item.name} item={item} />
                            ))}
                        </Box>
                    </Stack>
                </Paper>
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
                        <Stack spacing={2} sx={{ flex: 0.9 }}>
                            <Chip
                                icon={<RocketLaunch />}
                                label="How this supports CloudCord Voice"
                                color="primary"
                                sx={{ width: 'fit-content', fontWeight: 900 }}
                            />

                            <Typography variant="h4" sx={{ fontWeight: 950 }}>
                                These projects are technical credentials, not fake client work.
                            </Typography>

                            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                The point of this page is trust. Customers can see that CloudCord Voice is
                                backed by practical software engineering: UI development, automation design,
                                network troubleshooting, systems monitoring, and handoff-ready project thinking.
                            </Typography>

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 2,
                                    borderRadius: 3,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    bgcolor: 'background.default',
                                }}
                            >
                                <Stack direction="row" spacing={1.25} alignItems="flex-start">
                                    <Security color="primary" />
                                    <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                        Portfolio note: these examples show personal/public engineering work.
                                        They do not claim vendor certification, customer deployment, or a
                                        managed mining/crypto service.
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Stack>

                        <Box
                            sx={{
                                flex: 1.1,
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '1fr',
                                    sm: 'repeat(2, minmax(0, 1fr))',
                                },
                                gap: 1.25,
                            }}
                        >
                            {businessServices.map((service) => (
                                <Stack
                                    key={service}
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                    sx={{
                                        p: 1.25,
                                        minHeight: 50,
                                        borderRadius: 2,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <CheckCircle color="success" fontSize="small" />
                                    <Typography sx={{ fontWeight: 850 }}>{service}</Typography>
                                </Stack>
                            ))}
                        </Box>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
}

export default Projects;