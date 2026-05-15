// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import Bootstrap and FontAwesome
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For interactive Bootstrap components

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)