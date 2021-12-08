import React from 'react';
import { Navigate,BrowserRouter,Routes,Route,Link,Outlet } from 'react-router-dom';
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
import StockTransfer from './Components/StockTransfer';
import sales_master from './Components/sales_master';
import test1 from './Components/test'



function App() {
  return (
    <>
    <SideNav />
    <WareHouse />
    <StockTransfer />
      <nav style={{borderBottom: "solid 1px",paddingBottom: "1rem", color:"white"}}>
        <Link to="/Salesparent" style={{color:"white"}}>Salesparent</Link>
        <Link to="/WareHouse" style={{color:"white"}}>WareHouse</Link>
        
      </nav>
      <Outlet />
</>

  );
}

export default App;
