import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    AppBar,
    Avatar,
    AvatarGroup,
    Badge,
    Box,
    Breadcrumbs,
    Button,
    ButtonGroup,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    Chip,
    CircularProgress,
    Collapse,
    Container,
    Divider,
    Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    LinearProgress,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Modal,
    Paper,
    Radio,
    RadioGroup,
    Select,
    Skeleton,
    Snackbar,
    Stack,
    Step,
    StepLabel,
    Stepper,
    Switch,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Tabs,
    TextField,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';

import {
    Add,
    ArrowForward,
    CheckCircle,
    Close,
    CloudUpload,
    Dashboard,
    Delete,
    Edit,
    ErrorOutline,
    ExpandMore,
    FilterList,
    Home,
    Info,
    Launch,
    Menu as MenuIcon,
    MoreVert,
    Refresh,
    Save,
    Search,
    Settings,
    Star,
    Warning,
} from '@mui/icons-material';

export function PageShell({
                              children,
                              maxWidth = 'xl',
                              disablePadding = false,
                              sx = {},
                          }) {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: 'background.default',
                color: 'text.primary',
                ...sx,
            }}
        >
            <Container
                maxWidth={maxWidth}
                sx={{
                    py: disablePadding ? 0 : { xs: 2, md: 4 },
                    px: disablePadding ? 0 : { xs: 2, md: 3 },
                }}
            >
                {children}
            </Container>
        </Box>
    );
}

export function PageHeader({
                               title,
                               subtitle,
                               eyebrow,
                               icon,
                               actions,
                               breadcrumbs = [],
                               sx = {},
                           }) {
    return (
        <Box sx={{ mb: 3, ...sx }}>
            {breadcrumbs.length > 0 && (
                <Breadcrumbs sx={{ mb: 2 }}>
                    {breadcrumbs.map((item, index) => {
                        const last = index === breadcrumbs.length - 1;

                        return last ? (
                            <Typography key={item.label} color="text.primary">
                                {item.label}
                            </Typography>
                        ) : (
                            <Link
                                key={item.label}
                                component={NavLink}
                                to={item.href || '#'}
                                underline="hover"
                                color="inherit"
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
            )}

            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                alignItems={{ xs: 'flex-start', md: 'center' }}
                justifyContent="space-between"
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    {icon && (
                        <Avatar
                            sx={{
                                width: 52,
                                height: 52,
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                            }}
                        >
                            {icon}
                        </Avatar>
                    )}

                    <Box>
                        {eyebrow && (
                            <Typography
                                variant="overline"
                                color="primary"
                                sx={{ fontWeight: 800, letterSpacing: 1 }}
                            >
                                {eyebrow}
                            </Typography>
                        )}

                        <Typography variant="h4" component="h1" sx={{ fontWeight: 800 }}>
                            {title}
                        </Typography>

                        {subtitle && (
                            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
                                {subtitle}
                            </Typography>
                        )}
                    </Box>
                </Stack>

                {actions && (
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                        {actions}
                    </Stack>
                )}
            </Stack>
        </Box>
    );
}

export function SectionPanel({
                                 title,
                                 subtitle,
                                 icon,
                                 actions,
                                 children,
                                 dense = false,
                                 sx = {},
                             }) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: dense ? 2 : 3,
                mb: 3,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'background.paper',
                borderRadius: 3,
                ...sx,
            }}
        >
            {(title || subtitle || actions || icon) && (
                <>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="space-between"
                        alignItems={{ xs: 'flex-start', sm: 'center' }}
                        sx={{ mb: 2 }}
                    >
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            {icon && (
                                <Avatar
                                    sx={{
                                        bgcolor: 'primary.main',
                                        color: 'primary.contrastText',
                                        width: 38,
                                        height: 38,
                                    }}
                                >
                                    {icon}
                                </Avatar>
                            )}

                            <Box>
                                {title && (
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                                        {title}
                                    </Typography>
                                )}

                                {subtitle && (
                                    <Typography variant="body2" color="text.secondary">
                                        {subtitle}
                                    </Typography>
                                )}
                            </Box>
                        </Stack>

                        {actions && <Stack direction="row" spacing={1}>{actions}</Stack>}
                    </Stack>

                    <Divider sx={{ mb: 2 }} />
                </>
            )}

            {children}
        </Paper>
    );
}

export function SplitLayout({
                                left,
                                right,
                                leftSize = 8,
                                rightSize = 4,
                                spacing = 3,
                            }) {
    return (
        <Grid container spacing={spacing}>
            <Grid item xs={12} md={leftSize}>
                {left}
            </Grid>

            <Grid item xs={12} md={rightSize}>
                {right}
            </Grid>
        </Grid>
    );
}

// ---------------------------------------------------------
// Navigation Components
// ---------------------------------------------------------

export function AppNavbar({
                              title = 'My React Site',
                              links = [],
                              rightContent,
                              onMenuClick,
                              sticky = true,
                          }) {
    return (
        <AppBar
            position={sticky ? 'sticky' : 'static'}
            elevation={0}
            sx={{
                bgcolor: 'background.paper',
                borderBottom: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Toolbar>
                {onMenuClick && (
                    <IconButton edge="start" color="inherit" onClick={onMenuClick} sx={{ mr: 1 }}>
                        <MenuIcon />
                    </IconButton>
                )}

                <Typography variant="h6" sx={{ fontWeight: 900, flexGrow: 1 }}>
                    {title}
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        mr: rightContent ? 2 : 0,
                    }}
                >
                    {links.map((link) => (
                        <Button
                            key={link.label}
                            component={NavLink}
                            to={link.href}
                            color="inherit"
                            startIcon={link.icon}
                            sx={{
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

                {rightContent}
            </Toolbar>
        </AppBar>
    );
}

export function AppDrawer({
                              open,
                              onClose,
                              title = 'Navigation',
                              links = [],
                              footer,
                              width = 300,
                          }) {
    return (
        <Drawer open={open} onClose={onClose}>
            <Box sx={{ width }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ p: 2 }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>
                        {title}
                    </Typography>

                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Stack>

                <Divider />

                <List sx={{ p: 1 }}>
                    {links.map((link) => (
                        <ListItem key={link.label} disablePadding>
                            <ListItemButton
                                component={NavLink}
                                to={link.href}
                                onClick={onClose}
                                sx={{
                                    borderRadius: 2,
                                    '&.active': {
                                        bgcolor: 'primary.main',
                                        color: 'primary.contrastText',
                                        '& .MuiListItemIcon-root': {
                                            color: 'primary.contrastText',
                                        },
                                    },
                                }}
                            >
                                {link.icon && <ListItemIcon>{link.icon}</ListItemIcon>}

                                <ListItemText
                                    primary={link.label}
                                    secondary={link.description}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                {footer && (
                    <>
                        <Divider />
                        <Box sx={{ p: 2 }}>{footer}</Box>
                    </>
                )}
            </Box>
        </Drawer>
    );
}

export function BreadcrumbNav({ items = [] }) {
    return (
        <Breadcrumbs>
            <Link component={NavLink} to="/" underline="hover" color="inherit">
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <Home fontSize="small" />
                    <span>Home</span>
                </Stack>
            </Link>

            {items.map((item, index) => {
                const last = index === items.length - 1;

                return last ? (
                    <Typography key={item.label} color="text.primary">
                        {item.label}
                    </Typography>
                ) : (
                    <Link
                        key={item.label}
                        component={NavLink}
                        to={item.href}
                        underline="hover"
                        color="inherit"
                    >
                        {item.label}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}

// ---------------------------------------------------------
// Cards / Display Components
// ---------------------------------------------------------

export function UiCard({
                           title,
                           subtitle,
                           icon,
                           children,
                           actions,
                           menu,
                           selected = false,
                           hover = true,
                           sx = {},
                       }) {
    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                border: '1px solid',
                borderColor: selected ? 'primary.main' : 'divider',
                bgcolor: 'background.paper',
                borderRadius: 3,
                transition: 'all 160ms ease',
                ...(hover && {
                    '&:hover': {
                        borderColor: 'primary.main',
                        transform: 'translateY(-2px)',
                    },
                }),
                ...sx,
            }}
        >
            {(title || subtitle || icon || menu) && (
                <CardHeader
                    avatar={
                        icon ? (
                            <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                                {icon}
                            </Avatar>
                        ) : null
                    }
                    action={menu}
                    title={
                        title && (
                            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                                {title}
                            </Typography>
                        )
                    }
                    subheader={subtitle}
                />
            )}

            <CardContent>{children}</CardContent>

            {actions && (
                <>
                    <Divider />
                    <CardActions sx={{ p: 2 }}>{actions}</CardActions>
                </>
            )}
        </Card>
    );
}

export function StatCard({
                             label,
                             value,
                             helper,
                             icon,
                             trend,
                             color = 'primary.main',
                         }) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2.5,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                bgcolor: 'background.paper',
                height: '100%',
            }}
        >
            <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: color, color: 'white', width: 48, height: 48 }}>
                    {icon || <Dashboard />}
                </Avatar>

                <Box sx={{ minWidth: 0 }}>
                    <Typography variant="body2" color="text.secondary">
                        {label}
                    </Typography>

                    <Typography variant="h4" sx={{ fontWeight: 900, lineHeight: 1.2 }}>
                        {value}
                    </Typography>

                    {(helper || trend) && (
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.5 }}>
                            {trend && <StatusChip label={trend} color="success" size="small" />}
                            {helper && (
                                <Typography variant="caption" color="text.secondary">
                                    {helper}
                                </Typography>
                            )}
                        </Stack>
                    )}
                </Box>
            </Stack>
        </Paper>
    );
}

export function FeatureCard({
                                icon = <Star />,
                                title,
                                description,
                                buttonLabel = 'Open',
                                onClick,
                            }) {
    return (
        <UiCard
            icon={icon}
            title={title}
            subtitle={description}
            actions={
                <Button endIcon={<ArrowForward />} onClick={onClick}>
                    {buttonLabel}
                </Button>
            }
        >
            <Box />
        </UiCard>
    );
}

export function ProfileCard({
                                name,
                                title,
                                email,
                                avatar,
                                actions,
                                chips = [],
                            }) {
    return (
        <UiCard>
            <Stack spacing={2} alignItems="center" textAlign="center">
                <Avatar src={avatar} sx={{ width: 88, height: 88, bgcolor: 'primary.main' }}>
                    {name?.[0]}
                </Avatar>

                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 900 }}>
                        {name}
                    </Typography>

                    {title && (
                        <Typography color="text.secondary">
                            {title}
                        </Typography>
                    )}

                    {email && (
                        <Typography variant="body2" color="text.secondary">
                            {email}
                        </Typography>
                    )}
                </Box>

                {chips.length > 0 && (
                    <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                        {chips.map((chip) => (
                            <Chip key={chip} label={chip} size="small" />
                        ))}
                    </Stack>
                )}

                {actions && <Stack direction="row" spacing={1}>{actions}</Stack>}
            </Stack>
        </UiCard>
    );
}

export function KeyValueList({ items = [] }) {
    return (
        <List disablePadding>
            {items.map((item, index) => (
                <React.Fragment key={item.label}>
                    <ListItem disableGutters>
                        <ListItemText
                            primary={
                                <Typography color="text.secondary" variant="body2">
                                    {item.label}
                                </Typography>
                            }
                            secondary={
                                <Typography color="text.primary" sx={{ fontWeight: 700 }}>
                                    {item.value}
                                </Typography>
                            }
                        />
                    </ListItem>

                    {index < items.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </List>
    );
}

// ---------------------------------------------------------
// Buttons / Actions
// ---------------------------------------------------------

export function PrimaryButton({
                                  children,
                                  startIcon,
                                  endIcon,
                                  loading = false,
                                  ...props
                              }) {
    return (
        <Button
            variant="contained"
            startIcon={loading ? <CircularProgress size={18} color="inherit" /> : startIcon}
            endIcon={endIcon}
            disabled={loading || props.disabled}
            {...props}
        >
            {children}
        </Button>
    );
}

export function SecondaryButton({ children, ...props }) {
    return (
        <Button variant="outlined" {...props}>
            {children}
        </Button>
    );
}

export function DangerButton({ children, ...props }) {
    return (
        <Button variant="contained" color="error" startIcon={<Delete />} {...props}>
            {children}
        </Button>
    );
}

export function ActionMenu({ items = [], icon = <MoreVert /> }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <>
            <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
                {icon}
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                {items.map((item) => (
                    <MenuItem
                        key={item.label}
                        disabled={item.disabled}
                        onClick={() => {
                            setAnchorEl(null);
                            item.onClick?.();
                        }}
                    >
                        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                        <ListItemText>{item.label}</ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}

export function FloatingActionButton({
                                         label = 'Add',
                                         icon = <Add />,
                                         onClick,
                                     }) {
    return (
        <Tooltip title={label}>
            <Fab
                color="primary"
                onClick={onClick}
                sx={{
                    position: 'fixed',
                    right: 24,
                    bottom: 24,
                    zIndex: 1200,
                }}
            >
                {icon}
            </Fab>
        </Tooltip>
    );
}

export function PageActions({
                                onCreate,
                                onRefresh,
                                onSave,
                                onDelete,
                                createLabel = 'Create',
                            }) {
    return (
        <Stack direction="row" spacing={1} flexWrap="wrap">
            {onRefresh && (
                <Button variant="outlined" startIcon={<Refresh />} onClick={onRefresh}>
                    Refresh
                </Button>
            )}

            {onSave && (
                <Button variant="contained" startIcon={<Save />} onClick={onSave}>
                    Save
                </Button>
            )}

            {onCreate && (
                <Button variant="contained" startIcon={<Add />} onClick={onCreate}>
                    {createLabel}
                </Button>
            )}

            {onDelete && (
                <Button variant="contained" color="error" startIcon={<Delete />} onClick={onDelete}>
                    Delete
                </Button>
            )}
        </Stack>
    );
}

// ---------------------------------------------------------
// Form Components
// ---------------------------------------------------------

export function SearchInput({
                                value,
                                onChange,
                                placeholder = 'Search...',
                                onSubmit,
                                sx = {},
                            }) {
    return (
        <TextField
            value={value}
            placeholder={placeholder}
            onChange={(event) => onChange?.(event.target.value)}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    onSubmit?.(value);
                }
            }}
            sx={sx}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export function TextInput({
                              label,
                              value,
                              onChange,
                              helperText,
                              error,
                              startIcon,
                              endIcon,
                              ...props
                          }) {
    return (
        <TextField
            label={label}
            value={value}
            error={Boolean(error)}
            helperText={error || helperText}
            onChange={(event) => onChange?.(event.target.value)}
            InputProps={{
                startAdornment: startIcon ? (
                    <InputAdornment position="start">{startIcon}</InputAdornment>
                ) : undefined,
                endAdornment: endIcon ? (
                    <InputAdornment position="end">{endIcon}</InputAdornment>
                ) : undefined,
            }}
            {...props}
        />
    );
}

export function SelectInput({
                                label,
                                value,
                                onChange,
                                options = [],
                                helperText,
                                error,
                                fullWidth = true,
                            }) {
    return (
        <FormControl fullWidth={fullWidth} error={Boolean(error)}>
            <InputLabel>{label}</InputLabel>

            <Select
                label={label}
                value={value}
                onChange={(event) => onChange?.(event.target.value)}
            >
                {options.map((option) => (
                    <MenuItem key={option.value ?? option} value={option.value ?? option}>
                        {option.label ?? option}
                    </MenuItem>
                ))}
            </Select>

            {(error || helperText) && (
                <FormHelperText>{error || helperText}</FormHelperText>
            )}
        </FormControl>
    );
}

export function SwitchField({
                                label,
                                description,
                                checked,
                                onChange,
                                disabled = false,
                            }) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
            }}
        >
            <FormControlLabel
                control={
                    <Switch
                        checked={checked}
                        disabled={disabled}
                        onChange={(event) => onChange?.(event.target.checked)}
                    />
                }
                label={
                    <Box>
                        <Typography sx={{ fontWeight: 700 }}>{label}</Typography>
                        {description && (
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        )}
                    </Box>
                }
            />
        </Paper>
    );
}

export function CheckboxGroup({
                                  label,
                                  options = [],
                                  values = [],
                                  onChange,
                                  helperText,
                              }) {
    function toggleValue(value) {
        const exists = values.includes(value);
        const next = exists
            ? values.filter((item) => item !== value)
            : [...values, value];

        onChange?.(next);
    }

    return (
        <FormControl component="fieldset">
            {label && (
                <Typography sx={{ mb: 1, fontWeight: 800 }}>
                    {label}
                </Typography>
            )}

            <FormGroup>
                {options.map((option) => {
                    const value = option.value ?? option;

                    return (
                        <FormControlLabel
                            key={value}
                            control={
                                <Checkbox
                                    checked={values.includes(value)}
                                    onChange={() => toggleValue(value)}
                                />
                            }
                            label={option.label ?? option}
                        />
                    );
                })}
            </FormGroup>

            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
}

export function RadioField({
                               label,
                               value,
                               onChange,
                               options = [],
                               helperText,
                           }) {
    return (
        <FormControl>
            {label && (
                <Typography sx={{ mb: 1, fontWeight: 800 }}>
                    {label}
                </Typography>
            )}

            <RadioGroup
                value={value}
                onChange={(event) => onChange?.(event.target.value)}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value ?? option}
                        value={option.value ?? option}
                        control={<Radio />}
                        label={option.label ?? option}
                    />
                ))}
            </RadioGroup>

            {helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
}

export function FormGrid({ children, spacing = 2 }) {
    return (
        <Grid container spacing={spacing}>
            {React.Children.map(children, (child) => (
                <Grid item xs={12} md={6}>
                    {child}
                </Grid>
            ))}
        </Grid>
    );
}

export function UploadBox({
                              title = 'Upload file',
                              description = 'Drag and drop or choose a file.',
                              onClick,
                          }) {
    return (
        <Paper
            elevation={0}
            onClick={onClick}
            sx={{
                p: 4,
                textAlign: 'center',
                border: '1px dashed',
                borderColor: 'primary.main',
                borderRadius: 3,
                cursor: 'pointer',
                bgcolor: 'background.paper',
                '&:hover': {
                    bgcolor: 'action.hover',
                },
            }}
        >
            <CloudUpload sx={{ fontSize: 46, color: 'primary.main', mb: 1 }} />

            <Typography variant="h6" sx={{ fontWeight: 800 }}>
                {title}
            </Typography>

            <Typography color="text.secondary">
                {description}
            </Typography>
        </Paper>
    );
}

// ---------------------------------------------------------
// Status / Feedback Components
// ---------------------------------------------------------

export function StatusChip({
                               label,
                               color = 'default',
                               variant = 'filled',
                               size = 'small',
                               icon,
                           }) {
    return (
        <Chip
            label={label}
            color={color}
            variant={variant}
            size={size}
            icon={icon}
            sx={{ fontWeight: 700 }}
        />
    );
}

export function InfoAlert({
                              title,
                              children,
                              severity = 'info',
                              action,
                              sx = {},
                          }) {
    return (
        <Alert
            severity={severity}
            action={action}
            sx={{
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider',
                ...sx,
            }}
        >
            {title && (
                <Typography sx={{ fontWeight: 800, mb: children ? 0.5 : 0 }}>
                    {title}
                </Typography>
            )}

            {children}
        </Alert>
    );
}

export function Toast({
                          open,
                          onClose,
                          message,
                          severity = 'success',
                          autoHideDuration = 3500,
                      }) {
    return (
        <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={onClose}>
            <Alert onClose={onClose} severity={severity} variant="filled">
                {message}
            </Alert>
        </Snackbar>
    );
}

export function LoadingState({
                                 label = 'Loading...',
                                 fullPage = false,
                             }) {
    return (
        <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: fullPage ? '70vh' : 220,
            }}
        >
            <CircularProgress />
            <Typography color="text.secondary">{label}</Typography>
        </Stack>
    );
}

export function ErrorState({
                               title = 'Something went wrong',
                               message = 'Please try again.',
                               onRetry,
                           }) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'error.main',
                borderRadius: 3,
            }}
        >
            <ErrorOutline color="error" sx={{ fontSize: 52, mb: 1 }} />

            <Typography variant="h5" sx={{ fontWeight: 900 }}>
                {title}
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                {message}
            </Typography>

            {onRetry && (
                <Button variant="contained" startIcon={<Refresh />} onClick={onRetry}>
                    Retry
                </Button>
            )}
        </Paper>
    );
}

export function EmptyState({
                               title = 'Nothing here yet',
                               message = 'Create something to get started.',
                               icon = <Info />,
                               action,
                           }) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 5,
                textAlign: 'center',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
            }}
        >
            <Avatar
                sx={{
                    mx: 'auto',
                    mb: 2,
                    width: 64,
                    height: 64,
                    bgcolor: 'primary.main',
                }}
            >
                {icon}
            </Avatar>

            <Typography variant="h5" sx={{ fontWeight: 900 }}>
                {title}
            </Typography>

            <Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                {message}
            </Typography>

            {action}
        </Paper>
    );
}

export function SkeletonCards({ count = 3 }) {
    return (
        <Grid container spacing={2}>
            {Array.from({ length: count }).map((_, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <Paper sx={{ p: 2, borderRadius: 3 }}>
                        <Skeleton variant="circular" width={48} height={48} />
                        <Skeleton variant="text" sx={{ mt: 2 }} />
                        <Skeleton variant="text" width="70%" />
                        <Skeleton variant="rounded" height={80} sx={{ mt: 2 }} />
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}

// ---------------------------------------------------------
// Modal / Dialog Components
// ---------------------------------------------------------

export function CenterModal({
                                open,
                                onClose,
                                title,
                                subtitle,
                                children,
                                actions,
                                maxWidth = 520,
                            }) {
    return (
        <Modal open={open} onClose={onClose}>
            <Paper
                elevation={0}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 'calc(100% - 32px)',
                    maxWidth,
                    transform: 'translate(-50%, -50%)',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    overflow: 'hidden',
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    sx={{ p: 2.5 }}
                >
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 900 }}>
                            {title}
                        </Typography>

                        {subtitle && (
                            <Typography color="text.secondary" variant="body2">
                                {subtitle}
                            </Typography>
                        )}
                    </Box>

                    <IconButton onClick={onClose}>
                        <Close />
                    </IconButton>
                </Stack>

                <Divider />

                <Box sx={{ p: 2.5 }}>{children}</Box>

                {actions && (
                    <>
                        <Divider />
                        <Stack direction="row" justifyContent="flex-end" spacing={1} sx={{ p: 2 }}>
                            {actions}
                        </Stack>
                    </>
                )}
            </Paper>
        </Modal>
    );
}

export function ConfirmModal({
                                 open,
                                 onClose,
                                 onConfirm,
                                 title = 'Confirm action',
                                 message = 'Are you sure you want to continue?',
                                 confirmLabel = 'Confirm',
                                 cancelLabel = 'Cancel',
                                 danger = false,
                             }) {
    return (
        <CenterModal
            open={open}
            onClose={onClose}
            title={title}
            actions={
                <>
                    <Button onClick={onClose}>{cancelLabel}</Button>

                    <Button
                        variant="contained"
                        color={danger ? 'error' : 'primary'}
                        onClick={() => {
                            onConfirm?.();
                            onClose?.();
                        }}
                    >
                        {confirmLabel}
                    </Button>
                </>
            }
        >
            <Typography color="text.secondary">{message}</Typography>
        </CenterModal>
    );
}

// ---------------------------------------------------------
// Tabs / Accordion / Stepper
// ---------------------------------------------------------

export function TabPanel({ value, index, children, sx = {} }) {
    if (value !== index) return null;

    return <Box sx={{ pt: 2, ...sx }}>{children}</Box>;
}

export function BasicTabs({
                              tabs = [],
                              defaultValue = 0,
                          }) {
    const [value, setValue] = useState(defaultValue);

    return (
        <Box>
            <Tabs
                value={value}
                onChange={(_, nextValue) => setValue(nextValue)}
                variant="scrollable"
                scrollButtons="auto"
            >
                {tabs.map((tab, index) => (
                    <Tab
                        key={tab.label}
                        label={tab.label}
                        icon={tab.icon}
                        iconPosition="start"
                        value={index}
                    />
                ))}
            </Tabs>

            <Divider />

            {tabs.map((tab, index) => (
                <TabPanel key={tab.label} value={value} index={index}>
                    {tab.content}
                </TabPanel>
            ))}
        </Box>
    );
}

export function AdvancedAccordion({ items = [], defaultExpanded = false }) {
    return (
        <Stack spacing={1}>
            {items.map((item, index) => (
                <Accordion
                    key={item.title}
                    defaultExpanded={defaultExpanded && index === 0}
                    elevation={0}
                    sx={{
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: '12px !important',
                        '&:before': {
                            display: 'none',
                        },
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                            {item.icon}
                            <Box>
                                <Typography sx={{ fontWeight: 800 }}>{item.title}</Typography>
                                {item.subtitle && (
                                    <Typography variant="body2" color="text.secondary">
                                        {item.subtitle}
                                    </Typography>
                                )}
                            </Box>
                        </Stack>
                    </AccordionSummary>

                    <AccordionDetails>{item.content}</AccordionDetails>
                </Accordion>
            ))}
        </Stack>
    );
}

export function ProgressStepper({
                                    steps = [],
                                    activeStep = 0,
                                }) {
    return (
        <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step) => (
                <Step key={step.label}>
                    <StepLabel optional={step.description}>{step.label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
}

// ---------------------------------------------------------
// Tables / Lists
// ---------------------------------------------------------

export function DataTable({
                              columns = [],
                              rows = [],
                              getRowId = (row, index) => row.id ?? index,
                              pageSize = 8,
                              emptyMessage = 'No rows found.',
                              actions,
                          }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pageSize);

    const visibleRows = useMemo(() => {
        const start = page * rowsPerPage;
        return rows.slice(start, start + rowsPerPage);
    }, [page, rows, rowsPerPage]);

    return (
        <Paper
            elevation={0}
            sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                overflow: 'hidden',
            }}
        >
            {actions && (
                <>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ fontWeight: 900 }}>
                            Data
                        </Typography>

                        {actions}
                    </Toolbar>

                    <Divider />
                </>
            )}

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.field} align={column.align || 'left'}>
                                    <Typography variant="body2" sx={{ fontWeight: 900 }}>
                                        {column.headerName || column.label || column.field}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {visibleRows.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={columns.length}>
                                    <Typography textAlign="center" color="text.secondary" sx={{ py: 4 }}>
                                        {emptyMessage}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            visibleRows.map((row, rowIndex) => (
                                <TableRow hover key={getRowId(row, rowIndex)}>
                                    {columns.map((column) => {
                                        const rawValue = row[column.field];
                                        const renderedValue = column.render
                                            ? column.render(row, rawValue)
                                            : rawValue;

                                        return (
                                            <TableCell key={column.field} align={column.align || 'left'}>
                                                {renderedValue}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Divider />

            <TablePagination
                component="div"
                count={rows.length}
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 8, 10, 25, 50]}
                onPageChange={(_, nextPage) => setPage(nextPage)}
                onRowsPerPageChange={(event) => {
                    setRowsPerPage(Number(event.target.value));
                    setPage(0);
                }}
            />
        </Paper>
    );
}

export function ActionList({
                               items = [],
                               dense = false,
                           }) {
    return (
        <List disablePadding dense={dense}>
            {items.map((item, index) => (
                <React.Fragment key={item.title}>
                    <ListItem
                        secondaryAction={
                            item.action || (
                                item.href && (
                                    <IconButton component={NavLink} to={item.href}>
                                        <ArrowForward />
                                    </IconButton>
                                )
                            )
                        }
                    >
                        {item.avatar && (
                            <ListItemAvatar>
                                <Avatar src={item.avatar}>{item.title?.[0]}</Avatar>
                            </ListItemAvatar>
                        )}

                        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}

                        <ListItemText
                            primary={item.title}
                            secondary={item.description}
                        />
                    </ListItem>

                    {index < items.length - 1 && <Divider />}
                </React.Fragment>
            ))}
        </List>
    );
}

// ---------------------------------------------------------
// Toolbars / Filters
// ---------------------------------------------------------

export function FilterToolbar({
                                  search,
                                  onSearchChange,
                                  onRefresh,
                                  onFilter,
                                  actions,
                                  placeholder = 'Search...',
                              }) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 2,
                mb: 2,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
            }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={1.5}
                alignItems={{ xs: 'stretch', md: 'center' }}
            >
                <SearchInput
                    value={search}
                    onChange={onSearchChange}
                    placeholder={placeholder}
                    sx={{ flex: 1 }}
                />

                <ButtonGroup variant="outlined">
                    {onFilter && (
                        <Button startIcon={<FilterList />} onClick={onFilter}>
                            Filter
                        </Button>
                    )}

                    {onRefresh && (
                        <Button startIcon={<Refresh />} onClick={onRefresh}>
                            Refresh
                        </Button>
                    )}
                </ButtonGroup>

                {actions}
            </Stack>
        </Paper>
    );
}

export function QuickStatsGrid({ stats = [] }) {
    return (
        <Grid container spacing={2}>
            {stats.map((stat) => (
                <Grid item xs={12} sm={6} md={3} key={stat.label}>
                    <StatCard {...stat} />
                </Grid>
            ))}
        </Grid>
    );
}

// ---------------------------------------------------------
// Specialized Small Components
// ---------------------------------------------------------

export function UserAvatar({
                               name,
                               src,
                               status,
                               size = 40,
                           }) {
    const avatar = (
        <Avatar
            src={src}
            sx={{
                width: size,
                height: size,
                bgcolor: 'primary.main',
                fontWeight: 900,
            }}
        >
            {name?.[0]}
        </Avatar>
    );

    if (!status) return avatar;

    return (
        <Badge
            color={status === 'online' ? 'success' : 'default'}
            variant="dot"
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            {avatar}
        </Badge>
    );
}

export function TeamAvatars({ users = [], max = 4 }) {
    return (
        <AvatarGroup max={max}>
            {users.map((user) => (
                <Avatar key={user.name} src={user.avatar}>
                    {user.name?.[0]}
                </Avatar>
            ))}
        </AvatarGroup>
    );
}

export function ProgressBar({
                                value,
                                label,
                                helper,
                                color = 'primary',
                            }) {
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.75 }}>
                <Typography variant="body2" sx={{ fontWeight: 800 }}>
                    {label}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {value}%
                </Typography>
            </Stack>

            <LinearProgress
                variant="determinate"
                value={value}
                color={color}
                sx={{
                    height: 8,
                    borderRadius: 99,
                }}
            />

            {helper && (
                <Typography variant="caption" color="text.secondary">
                    {helper}
                </Typography>
            )}
        </Box>
    );
}

export function InfoRow({
                            icon,
                            label,
                            value,
                            action,
                        }) {
    return (
        <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{ py: 1 }}
        >
            {icon && (
                <Avatar sx={{ width: 34, height: 34, bgcolor: 'action.selected' }}>
                    {icon}
                </Avatar>
            )}

            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography variant="body2" color="text.secondary">
                    {label}
                </Typography>

                <Typography sx={{ fontWeight: 800 }}>
                    {value}
                </Typography>
            </Box>

            {action}
        </Stack>
    );
}

export function LinkButton({
                               to,
                               href,
                               children,
                               external = false,
                               ...props
                           }) {
    if (external) {
        return (
            <Button
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<Launch />}
                {...props}
            >
                {children}
            </Button>
        );
    }

    return (
        <Button component={NavLink} to={to} {...props}>
            {children}
        </Button>
    );
}

export function CollapsiblePanel({
                                     title,
                                     children,
                                     defaultOpen = false,
                                     icon,
                                 }) {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <Paper
            elevation={0}
            sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                overflow: 'hidden',
            }}
        >
            <ListItemButton onClick={() => setOpen((current) => !current)}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}

                <ListItemText
                    primary={
                        <Typography sx={{ fontWeight: 900 }}>
                            {title}
                        </Typography>
                    }
                />

                <ExpandMore
                    sx={{
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 160ms ease',
                    }}
                />
            </ListItemButton>

            <Collapse in={open}>
                <Divider />
                <Box sx={{ p: 2 }}>{children}</Box>
            </Collapse>
        </Paper>
    );
}

