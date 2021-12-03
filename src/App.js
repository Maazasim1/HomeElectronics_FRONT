import React from 'react';
import { Navigate,BrowserRouter,Routes,Route } from 'react-router-dom';
import {store} from "./actions/store";
import { Provider } from "react-redux";
import Salesparent from './Components/Salesparent';
import './App.css'
import Sales from './Components/Sales'
import SideNav from './Components/SideNav';
import Login  from './Login/Login';
import WareHouse from './Components/WareHouse'
import Salary from './Components/salary'
import Sales_master from './Components/sales_master';



function App() {
  return (
  
  <Provider store={store}>
   <WareHouse/>  
  </Provider>

  );
}

export default App;
