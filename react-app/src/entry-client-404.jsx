import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import NotFound from './NotFound.jsx';
import './index.css';

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <NotFound />
  </React.StrictMode>
);
