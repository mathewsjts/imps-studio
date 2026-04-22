import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import AppRouter from './AppRouter.jsx';
import NotFound from './NotFound.jsx';

export { default as PROJECTS } from './data/projects.js';
export { formatTitle } from './data/constants.js';

export function render(url = '/') {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppRouter />
      </StaticRouter>
    </React.StrictMode>
  );
}

export function render404() {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location="/404">
        <NotFound />
      </StaticRouter>
    </React.StrictMode>
  );
}
