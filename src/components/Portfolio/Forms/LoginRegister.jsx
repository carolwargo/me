import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MDBInput } from 'mdb-react-ui-kit';

function LoginRegister() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerName, setRegisterName] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerRepeatPassword, setRegisterRepeatPassword] = useState('');
    const [registerCheck, setRegisterCheck] = useState(false);

    const handleLoginEmailChange = (event) => {
        setLoginEmail(event.target.value);
    };
    
    const handleLoginPasswordChange = (event) => {
        setLoginPassword(event.target.value);
    };

    const handleRegisterNameChange = (event) => {
        setRegisterName(event.target.value);
    };

    const handleRegisterUsernameChange = (event) => {
        setRegisterUsername(event.target.value);
    };

    const handleRegisterEmailChange = (event) => {
        setRegisterEmail(event.target.value);
    };

    const handleRegisterPasswordChange = (event) => {
        setRegisterPassword(event.target.value);
    };

    const handleRegisterRepeatPasswordChange = (event) => {
        setRegisterRepeatPassword(event.target.value);
    };

    const handleRegisterCheckChange = (event) => {
        setRegisterCheck(event.target.checked);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here using loginEmail and loginPassword state
        console.log("Login Email:", loginEmail);
        console.log("Login Password:", loginPassword);
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        // Perform registration logic here using register* state variables
        console.log("Register Name:", registerName);
        console.log("Register Username:", registerUsername);
        console.log("Register Email:", registerEmail);
        console.log("Register Password:", registerPassword);
        console.log("Repeat Password:", registerRepeatPassword);
        console.log("Register Check:", registerCheck);
    };

    return (
        <div className="container w3-padding-16">
            <div className="w3-container w3-content bg-white shadow">
                <div className="w3-container w3-content w3-padding-16 px-4 py-4 border-dark">
                    <h4 className="fw-light w3-margin-top w3-margin-bottom"><b>Signup and Login</b></h4>
                    <div>
                        <br />
                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link active"
                                    id="tab-login"
                                    data-mdb-pill-init
                                    href="#pills-login"
                                    role="tab"
                                    aria-controls="pills-login"
                                    aria-selected="true"
                                >Login</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a
                                    className="nav-link"
                                    id="tab-register"
                                    data-mdb-pill-init
                                    href="#pills-register"
                                    role="tab"
                                    aria-controls="pills-register"
                                    aria-selected="false"
                                >Register</a>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content">
                        <div
                            className="tab-pane fade show active"
                            id="pills-login"
                            role="tabpanel"
                            aria-labelledby="tab-login"
                        >
                            <form onSubmit={handleLoginSubmit}>
                                <div className="text-center mb-3">
                                    <p>Sign in with:</p>
                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>

                                <p className="text-center">or:</p>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <MDBInput 
                                        type="email" 
                                        id="loginName" 
                                        className="form-control" 
                                        onChange={handleLoginEmailChange}
                                    />
                                    <label className="form-label" htmlFor="loginName">Email or username</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <MDBInput 
                                        type="password" 
                                        id="loginPassword" 
                                        className="form-control" 
                                        onChange={handleLoginPasswordChange}
                                    />
                                    <label className="form-label" htmlFor="loginPassword">Password</label>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div className="form-check mb-3 mb-md-0">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="loginCheck"
                                                defaultChecked 
                                            />
                                            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex justify-content-center">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                                <div className="text-center">
                                    <p>Not a member? <a href="#!">Register</a></p>
                                </div>
                                <br />
                            </form>
                        </div>

                        <div
                            className="tab-pane fade"
                            id="pills-register"
                            role="tabpanel"
                            aria-labelledby="tab-register"
                        >
                            <form onSubmit={handleRegisterSubmit}>
                                <div className="text-center mb-3">
                                    <p>Sign up with:</p>
                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1 shadow">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>

                                <p className="text-center">or:</p>

                                <div data-mdb-input-init className="form-outline mb-4 ">
                                    <MDBInput 
                                        type="text" 
                                        id="registerName" 
                                        className="form-control "
                                        onChange={handleRegisterNameChange}
                                    />
                                    <label className="form-label" htmlFor="registerName">Name</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <MDBInput 
                                        type="text" 
                                        id="registerUsername" 
                                        className="form-control" 
                                        onChange={handleRegisterUsernameChange} 
                                    />
                                    <label className="form-label" htmlFor="registerUsername">Username</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <MDBInput 
                                        type="email" 
                                        id="registerEmail" 
                                        className="form-control" 
                                        onChange={handleRegisterEmailChange}
                                    />
                                    <label className="form-label" htmlFor="registerEmail">Email</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <MDBInput 
                                        type="password" 
                                        id="registerPassword" 
                                        className="form-control" 
                                        onChange={handleRegisterPasswordChange}
                                    />
                                    <label className="form-label" htmlFor="registerPassword">Password</label>
                                </div>

                                <div data-mdb-input-init className="form-outline mb-4">
                                    <MDBInput 
                                        type="password" 
                                        id="registerRepeatPassword" 
                                        className="form-control" 
                                        onChange={handleRegisterRepeatPasswordChange}
                                    />
                                    <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                                </div>

                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="registerCheck"
                                        defaultChecked 
                                        aria-describedby="registerCheckHelpText"
                                        onChange={handleRegisterCheckChange}
                                    />
                                    <label className="form-check-label" htmlFor="registerCheck">
                                        I have read and agree to the terms
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-3">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
