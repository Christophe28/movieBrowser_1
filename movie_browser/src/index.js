import React from 'react';
import ReactDOM from 'react-dom';
import './style/Root.scss';
import App from './App';
import Logo from './components/Logo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Logo />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
