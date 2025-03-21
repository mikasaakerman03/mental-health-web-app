import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/index';
import "../src/shared/helpers/i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
