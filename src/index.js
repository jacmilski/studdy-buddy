// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from 'views/Root';
import { worker } from 'mocks/browser';
import { AppProviders } from 'Providers/AppProviders';
import 'index.css';

worker.start().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <AppProviders>
        <Root />
      </AppProviders>
    </React.StrictMode>
  );
});
