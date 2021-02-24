import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Auth0Provider from './Auth0/auth0-provider-with-history';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH_0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH_0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
