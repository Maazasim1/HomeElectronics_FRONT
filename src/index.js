import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Sales from './Components/Sales'
import Dashboard from './Components/Dashboard'
import App from './App';
import SideNav from './Components/SideNav';
ReactDOM.render(
  <React.StrictMode>
    <div  >
    <App /></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
