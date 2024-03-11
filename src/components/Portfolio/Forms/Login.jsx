import React, { useState } from 'react';
//import { MDBInput, MDBBtn, MDBNav, MDBNavItem, MDBNavLink } from 'mdb-react-ui-kit';

import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setRememberMe(event.target.checked);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here using email, password, and rememberMe state
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Remember Me:", rememberMe);
    };

    return (
        <div className="container w3-padding-16">
            <div className="w3-container w3-content bg-white shadow">
                <div className="w3-container w3-content w3-padding-16 px-4 border-dark">
                    <h4 className="fw-light w3-margin-top"><b>Login Form</b></h4>
                    <form className="w3-padding-24">
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input 
                                type="email"
                                id="form1Example1"
                                className="form-control shadow-sm border border-1"
                                onChange={handleEmailChange}
                                value={email}
                            />
                            <label className="form-label" htmlFor="form1Example1">Email address</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input 
                                type="password" 
                                id="form1Example2" 
                                className="form-control shadow-sm border border-1" 
                                onChange={handlePasswordChange}
                                value={password}
                            />
                            <label className="form-label" htmlFor="form1Example2">Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col d-flex">
                                <div className="form-check">
                                    <input 
                                        type="checkbox" 
                                        id="form1Example3" 
                                        className="form-check-input" 
                                        onChange={handleCheckboxChange}
                                        checked={rememberMe}
                                    />
                                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                </div>
                            </div>
                            <div className="col">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>
                        <button 
                            data-mdb-ripple-init 
                            type="submit" 
                            className="btn btn-primary btn-block px-5 shadow-lg"
                            onClick={handleFormSubmit}
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
