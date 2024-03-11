import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login() {
    return (
        <div className="container w3-padding-16">
            <div className="w3-container w3-content bg-white shadow">
                <div className="w3-container w3-content w3-padding-16 px-4 border-dark">
                    <h4 className="fw-light w3-margin-top"><b>Login Form</b></h4>
                    <div className="w3-padding-24">
                        <div data-mdb-input-init className="form-outline mb-4">
                            <input 
                                type="text"
                                id="form1Example1"
                                className="form-control shadow-sm border border-1"
                            />
                            <label className="form-label" htmlFor="form1Example1">Email address</label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                            <input 
                                type="text" 
                                id="form1Example2" 
                                className="form-control shadow-sm border border-1" 
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
                                    />
                                    <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                                </div>
                            </div>
                            <div className="col">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
