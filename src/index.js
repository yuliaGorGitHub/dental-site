import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parse from 'parse';

Parse.serverURL = 'https://parseapi.back4app.com';
Parse.initialize(
  'Mbflpmm7DVC8u5WfdjJ2zU6Wa5KlR9F7hJv6qZyc', // This is your Application ID
  'qvEonIcPCSyoVZDxvhJtbyGkPVyvoD8EpHJFfnJK', // This is your Javascript keynpm start
  
);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
