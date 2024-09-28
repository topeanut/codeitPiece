import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import axios from 'axios';
import './reset.css';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
