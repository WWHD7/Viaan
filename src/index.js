import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Import both versions
import App from './App';
import AppV2 from './AppV2';

// Force V2 version for testing
// Temporarily forcing V2 to troubleshoot deployment issues
const useV2 = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {useV2 ? <AppV2 /> : <App />}
  </React.StrictMode>
); 