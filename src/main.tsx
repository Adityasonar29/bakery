import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Initialize Sentry in production or if explicitly enabled
if (import.meta.env.PROD || import.meta.env.VITE_ENABLE_SENTRY === 'true') {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN || "",
    environment: "production",
    tracesSampleRate: 0.2,
    enabled: true,
  });
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);