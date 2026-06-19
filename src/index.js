import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7c4dff',
        },
        secondary: {
            main: '#00e5ff',
        },
        background: {
            default: '#0f1117',
            paper: '#171923',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b8bcc8',
        },
    },

    shape: {
        borderRadius: 14,
    },

    typography: {
        fontFamily: 'Inter, Arial, Helvetica, sans-serif',

        h1: {
            fontWeight: 800,
        },
        h2: {
            fontWeight: 800,
        },
        h3: {
            fontWeight: 700,
        },
        h4: {
            fontWeight: 700,
        },
        h5: {
            fontWeight: 700,
        },
        h6: {
            fontWeight: 700,
        },
        button: {
            textTransform: 'none',
            fontWeight: 700,
        },
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 12,
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    border: '1px solid rgba(255,255,255,0.08)',
                },
            },
        },

        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
                fullWidth: true,
            },
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();