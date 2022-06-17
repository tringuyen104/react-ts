import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import './lib/Extension';
import AppRouter from './router';

const container = document.getElementById('root');
const root = createRoot(container!) //if you use TypeScript
root.render(
    <BrowserRouter>
        <App />
        <AppRouter />
    </BrowserRouter>
);