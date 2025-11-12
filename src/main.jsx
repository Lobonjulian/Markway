import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import AppRouter from './router/AppRouter.jsx';

import '@styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
