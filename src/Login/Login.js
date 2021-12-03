import React,{useState} from "react";
import {Link} from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom'
import LoginAuth from './LoginAuth'



function Login(props) {




    const navigate = useNavigate();
    const  {login}  = LoginAuth();

    const handleLogin = () => {
        login().then(() => {
            navigate("/Sales");
        });
    };
    return (

        <div className="container px-4 py-5 mx-auto">
            <div className="card card0">
                <div className="d-flex flex-lg-row flex-column-reverse">
                    <div className="card card1">
                        <div className="row justify-content-center my-auto">
                            <div className="col-md-8 col-10 my-5">
                                <div className="row justify-content-center px-3 mb-3"> </div>
                                <h6 className="msg-info">Please login to your account</h6>
                                <div className="form-group"> <label className="form-control-label text-muted">Username</label> <input type="text" id="email" name="email" placeholder="User Name" className="form-control field" /> </div>
                                <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input type="password" id="psw" name="psw" placeholder="Password" className="form-control field" /> </div>
                                <div className="row justify-content-center my-3 px-3">
                                    <Link to='/Sales'>
                                        <button className="btn-block btn-color" onClick={handleLogin}>Login
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="bottom text-center mb-5">

                        </div>
                    </div>
                    <div className="card card2">
                        <div className="my-auto mx-md-5 px-md-5 right">
                            <h3 className="text-white">Home Electronis</h3> <small className="text-white">Serving Customers</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Login;