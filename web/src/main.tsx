import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import './index.css';
import Notify from './components/Notify/Notify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <Notify />
    </VisibilityProvider>
  </React.StrictMode>,
);
