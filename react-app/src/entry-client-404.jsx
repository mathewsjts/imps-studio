import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import './index.css';

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  </React.StrictMode>
);
