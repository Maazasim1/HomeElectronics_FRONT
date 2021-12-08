import React,{useState} from "react";
import {Link} from 'react-router-dom';
import './Login.css';
import PropTypes from 'prop-types'


export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    async function loginUser(credentials) {
        return fetch('http://0.0.0.0:5000/api/UserLogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
       }

       const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        console.log(token);
        if(token==="token123"){
            setToken(token);
        }
      }
    


    return (

        <div className="container px-4 py-5 mx-auto LOGIN">
            <div className="card card0">
                <div className="d-flex flex-lg-row flex-column-reverse">
                    <div className="card card1">
                        <div className="row justify-content-center my-auto">
                            <div className="col-md-8 col-10 my-5">
                            <div class="row justify-content-center px-3 mb-3"> <img id="logo" src="https://i.imgur.com/HTqt8Gi.png"/> </div>
                                <div className="row justify-content-center px-3 mb-3"> </div>
                                <h6 className="msg-info">Please login to your account</h6>
                                <form onSubmit={handleSubmit}>
                                <div className="form-group"> <label className="form-control-label text-muted">Username</label> <input type="text" id="email" name="email" placeholder="User Name" className="form-control field" onChange={e => setUserName(e.target.value)} /> </div>
                                <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input type="password" id="psw" name="psw" placeholder="Password" className="form-control field" onChange={e => setPassword(e.target.value)}/> </div>
                                <div className="row justify-content-center my-3 px-3">
                                    
                                        <button type="submit" className="btn-block btn-color" >Login
                                        </button>
                                    
                                </div>
                                        </form>
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }