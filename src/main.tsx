import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Importando o CSS global com as configurações do Tailwind v4
import './assets/styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);