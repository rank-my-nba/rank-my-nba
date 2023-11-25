import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './globals.css';

const ele = document.getElementById('root');
const root = createRoot(ele);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
