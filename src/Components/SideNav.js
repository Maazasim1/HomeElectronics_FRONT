import './SideNav.css';
import React ,{useState} from 'react'
import {Outlet,useNavigate} from 'react-router-dom'
import Login from '../Login/Login';

const SideNav = () => {


    const navigate=useNavigate();

   function handleClick(path){
     navigate(path);
   }

    function refreshforlogout(){
        window.location.reload(false);
    }


    const [token,setToken]=useState();
    if(!token) {
        return <Login setToken={setToken} />
      }
   
   

 

   return (
     <div  >
   <div className="area"></div><nav className="main-menu">
            <ul>
                <li>
                    <a onClick={() => handleClick("Salesparent")}>
                        <i className="fa fa-cart-plus fa-2x"></i>
                        <span className="nav-text">
                            Point Of Sales
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a  onClick={() => handleClick("Warehouse")}>
                        <i className="fas fa-warehouse fa-2x"></i>
                        <span className="nav-text">
                            Warehouse
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a  onClick={() => handleClick("Dashboard")}>
                       <i className="fas fa-chart-line fa-2x"></i>
                        <span className="nav-text">
                            Dashboard
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a  onClick={() => handleClick("Salary")}>
                       <i className="fas fa-money-bill fa-2x"></i>
                        <span className="nav-text">
                            Salary
                        </span>
                    </a>
                   
                </li>
                <li className="has-subnav">
                    <a  onClick={() => handleClick("updatesales")}>
                       <i className="fas fa-money-bill fa-2x"></i>
                        <span className="nav-text">
                            Edit Sales
                        </span>
                    </a>
                   
                </li>

                <li className="has-subnav">
                    <a  onClick={() => handleClick("Expenses")}>
                       <i className="fas fa-money-bill fa-2x"></i>
                        <span className="nav-text">
                            Add Expenses
                        </span>
                    </a>
                   
                </li>
            </ul>

            <ul className="logout">
                <li>
                   <a onClick={refreshforlogout}>
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>
        <Outlet />
 </div>
       
   )
 }
 export default SideNav;