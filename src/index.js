import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Dashboard from './Components/Dashboard'
import SideNav from './Components/SideNav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import WareHouse from './Components/WareHouse';
import {store} from "./actions/store";
import { Provider } from "react-redux";
import Salesparent from './Components/Salesparent';
import Salary from './Components/salary';
import SalesUpdate from './Components/salesUpdate';
import Expenses from './Components/Expenses';


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<SideNav />}>
        <Route path="Salesparent" element={<Salesparent/>}/>
        <Route path="Warehouse" element={<WareHouse/>}/>
        <Route path="Dashboard" element={<Dashboard/>}/>
        <Route path="Salary" element={<Salary/>}/>
        <Route path="updatesales" element={<SalesUpdate />}/>
        <Route path="Expenses" element={<Expenses/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
