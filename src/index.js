import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);
