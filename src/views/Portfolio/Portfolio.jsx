import React from "react";
//import Graphics from "../../components/Portfolio/Graphics/Graphics.jsx";
import MeWhite from "../../assets/images/Me/MeWhite.png";
import TextEditor from "../../assets/images/Portfolio/TextEditor.png";
import Resume from "../../assets/Resume.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function BrandExample() {


  const handleEmailChange = (event) => {
  };
  
  const handlePasswordChange = (event) => {
  };
  const handleCheckboxChange = (event) => {
  };
  const  handleRegisterUsername = (event) => {
  };
  const  handleRegisterName = (event) => {
  };
  const  handleRegisterEmail = (event) => {
  };
  const   handleRegisterPassword = (event) => {
  };
  const   handleRegisterRepeatPassword = (event) => {
  };

  const   handleRegisterFirstName= (event) => {
  };
  const  handleRegisterLastName = (event) => {
  };


 
  return (
<div>
      <nav>
<div className="w3-center w3-bar w3-padding-16 shadow">
  <div className="w3-margin-left">
    <a href="/" className="w3-bar-item w3-buttblack w3-hover-black" >Home</a>
    <a href="/portfolio" className="w3-bar-item w3-buttblack w3-hover-black">Portfolio</a>
    <a href="/about" className="w3-bar-item w3-buttblack w3-hover-black">About</a>
    <a href="/contact" className="w3-bar-item w3-buttblack w3-hover-black">Contact</a>
  </div>
  </div>
</nav>
   
<header className="w3-container w3-center " style={{ padding: "80px 16px" }} id="home">
          <div className="w3-container w3-center w3-opacity w3-large">
            <nav> <a href="https://carolwargo.github.io/react-portfolio/" className="w3-button ">
            <i className="fab fa-github w3-hover-opacity"></i>
</a>
          <span><a href="https://www.linkedin.com/in/carol-wargo-35021baa/" className="w3-button">
            <i className="fab fa-linkedin w3-hover-opacity"></i></a></span> 
          <span><a href="mailto:carolwargo.dev@gmail.com" className="w3-button">
            <i className="fa fa-envelope fa-fw w3-hover-opacity"></i> </a></span> 
          <span><a href="tel:443-771-1726"className="w3-button"> 
          <i className="fa fa-phone fa-fw w3-hover-opacity"></i></a></span>
          </nav>
          </div>
          <h1 className="w3-jumbo"><b>Portfolio</b></h1>
          <p>
            My Portfolio contains the following sections:{" "}
            <strong>
              {" "}
              <a href="#completed-projects">COMPLETED PROJECTS</a>
            </strong>
            ,<br></br>
            <strong>
              {" "}
              <a href="#projects-in-progress">WORK IN-PROGRESS </a>{" "}
            </strong>{" "}
            , and{" "}
            <strong>
              {" "}
              <a href="#graphic-designs">GRAPHIC DESIGN WORK</a>
            </strong>{" "}
            -{" "}
          </p>
          <img src={MeWhite} className="w3-image w3-hide-large w3-hide-small w3-round" style={{ display: "block", width: "60%", margin: "auto" }} alt="Profile" />
          <img src={MeWhite} className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333" alt="Profile" />
          <div>
          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
          <a
              className="btn text-black"
              id="resume-download"
              download
              href={Resume}
            >
            <i className="fa fa-download"></i> Download Resume
            </a>
          </button>
          </div>
       <br />
       
        </header>
 {/**end Header section */}

<div className="w3-light-gray">
      {/**start Portfolio section */}
      <div className="w3-padding-16 w3-content " id="portfolio">
   

{/**start Forms grid */}
<h2 className="w3-text-black">Forms</h2>
    <hr className="w3-opacity"/>


{/*start login form */}
<div className="container w3-padding-16">
  <div className="w3-container w3-content bg-white shadow ">  
    <div className="w3-container w3-content w3-padding-16 px-4 border-dark">
    <h4 className="fw-light w3-margin-top"><b>Login Form</b></h4>
    <form className="w3-padding-24">

  <div data-mdb-input-init className="form-outline mb-4">
    <input 
    type="email"
    id="form1Example1"
    className="form-control shadow-sm"
    onChange={handleEmailChange} // Add onChange event handler
    />
    <label 
    className="form-label" 
    htmlFor="form1Example1">Email address</label>
  </div>


  <div data-mdb-input-init className="form-outline mb-4">
    <input 
    type="password" 
    id="form1Example2" 
    className="form-control shadow-sm" 
    onChange={handlePasswordChange} // Add onChange event handler
    
    />
    <label className="form-label" htmlFor="form1Example2">Password</label>
  </div>

 
  <div className="row mb-4">
    <div className="col d-flex">

      <div className="form-check">
        <input 
        type="checkbox" 
        id="form1Example3" checked 
        className="form-check-input" 
        onChange={handleCheckboxChange} // Add onChange event handler
        />
        <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
      </div>
    </div>

    <div className="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block px-5 shadow-lg">Sign in</button>
</form>
</div>
</div>
</div>
{/*end login form */}


{/*end sign up form */}
<div className="container w3-padding-16 ">
  <div className="w3-container w3-content bg-white shadow">  
 <div className="w3-container w3-content w3-padding-16 px-4 py-4 border-dark">
 <h4 className="fw-light w3-margin-top w3-margin-bottom"><b>Signup and Login</b></h4>
    <div >
      <br />
<ul className="nav nav-pills nav-justified mb-3 " id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a
      className="nav-link active"
      id="tab-login"
      data-mdb-pill-init
      href="#pills-login"
      role="tab"
      aria-controls="pills-login"
      aria-selected="true"
      >Login</a
    >
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
      >Register</a
    >
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
    <form>
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
        <input 
        type="email" 
        id="loginName" 
        className="form-control" 
        onChange={handleEmailChange} // Add onChange event handler
        />
        <label className="form-label" htmlFor="loginName">Email or username</label>
      </div>


      <div data-mdb-input-init className="form-outline mb-4">
        <input 
        type="password" 
        id="loginPassword" 
        className="form-control" 
        onChange={handlePasswordChange} // Add onChange event handler
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
    <form>
      <div className="text-center mb-3">
        <p>Sign up with:</p>
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
        <input 
        type="text" 
        id="registerName" 
        className="form-control"
        onChange={handleRegisterName} // Add onChange event handler
        />
        <label className="form-label" htmlFor="registerName">Name</label>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input 
        type="text" 
        id="registerUsername" 
        className="form-control" 
        onChange={handleRegisterUsername} 
        />
        <label className="form-label" htmlFor="registerUsername">Username</label>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input 
        type="email" 
        id="registerEmail" 
        className="form-control" 
        onChange={handleRegisterEmail}
        />
        <label className="form-label" htmlFor="registerEmail">Email</label>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input 
        type="password" 
        id="registerPassword" 
        className="form-control" 
        onChange={handleRegisterPassword}
        />
        <label className="form-label" htmlFor="registerPassword">Password</label>
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input type="password" 
        id="registerRepeatPassword" 
        className="form-control" 
        onChange={handleRegisterRepeatPassword}
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
        />
        <label className="form-check-label" htmlFor="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      <button data-mdb-ripple-init type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
    
    </form>
  </div>
</div>
</div>
</div>
</div>
{/*end login and register*/}


{/*start sign up form */}
<div className="container w3-padding-16">
  <div className="w3-container w3-content bg-white shadow ">  
    <div className="w3-container w3-content w3-padding-16 p-4 border-dark">
    <h4 className="fw-light w3-margin-top w3-margin-bottom"><b>Sign-Up Form</b></h4>
    <br />
    <form>

  <div className="row mb-4">
    <div className="col">
      <div data-mdb-input-init className="form-outline ">
        <input 
        type="text" 
        id="firstName" 
        className="form-control shadow-sm shadow-sm" 
        onChange={handleRegisterFirstName}
        />
        <label className="form-label" htmlFor="firstName">First name</label>
      </div>
    </div>
    <div className="col">
      <div data-mdb-input-init className="form-outline">
        <input 
        type="text" 
        id="lastName" 
        className="form-control shadow-sm" 
        onChange={handleRegisterLastName}
        />
        <label 
        className="form-label" 
        htmlFor="lastName"
        >Last name</label>
      </div>
    </div>
  </div>


  <div data-mdb-input-init className="form-outline mb-4">
    <input 
    type="email" 
    id="email" 
    className="form-control shadow-sm" 
    onChange={handleRegisterEmail}
    />
    <label className="form-label" htmlFor="email">Email address</label>
  </div>


  <div data-mdb-input-init className="form-outline mb-4">
    <input type="password" 
    id="password" 
    className="form-control shadow-sm" 
    onChange={handleRegisterPassword}
    />
    <label className="form-label" htmlFor="password">Password</label>
  </div>


  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" 
    type="checkbox" 
    id="newsletterCheck"  defaultChecked />
    <label className="form-check-label" htmlFor="newsletterCheck">
      Subscribe to our newsletter
    </label>
  </div>

  <button data-mdb-ripple-init type="button" className="btn btn-primary btn-block mb-4 px-5 shadow">Sign up</button>

  <div className="text-center w3-margin-bottom">
    <p>or sign up with:</p>
    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1 shadow">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1 shadow">
      <i className="fab fa-google"></i>
    </button>

    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1 shadow">
      <i className="fab fa-twitter"></i>
    </button>

    <button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1 shadow">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>

</div>
</div>
</div>
{/*end sign up form */}


{/**start Backend grid */}
<h2 className="w3-text-black">Server-side</h2>
    <hr className="w3-opacity"/>
<div className="container">
<div className="row">
<div className="col-sm-12 col-lg-4">
  <div className="w3-container w3-content shadow w3-padding-16 ">  
    <img src={TextEditor} alt="me" style={{width:"100%"}} className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"/>
 <hr />
  <div className="w3-light-gray p-2 w3-margin-bottom">
    <h4 className="fw-light">Text Editor In Chief</h4>
    </div>
    <p><i>Text_Editor-In-Chief is a browser-based text editor that allows Users to create and edit text documents seamlessly.</i></p>
    <hr />
    <div className="container">
    <p className="w3-opacity">click to view repository</p>
    <p><button href="https://github.com/carolwargo/Text_Editor-in-Chief"
    className="w3-button w3-light-grey w3-block"> Github</button></p>
    </div>
    </div>
  </div>



  <div className="col-sm-12 col-lg-4">
  <div className="w3-container w3-content shadow w3-padding-16 ">  
    <img src={TextEditor} alt="me" style={{width:"100%"}} className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"/>
 <hr />
  <div className="w3-light-gray p-2 w3-margin-bottom">
    <h4 className="fw-light">Text Editor In Chief</h4>
    </div>
    <p><i>Text_Editor-In-Chief is a browser-based text editor that allows Users to create and edit text documents seamlessly.</i></p>
    <hr />
    <div className="container">
    <p className="w3-opacity">click to view repository</p>
    <p><button href="https://github.com/carolwargo/Text_Editor-in-Chief"
    className="w3-button w3-light-grey w3-block"> Github</button></p>
    </div>
    </div>
  </div>



  <div className="col-sm-12 col-lg-4">
  <div className="w3-container w3-content shadow w3-padding-16 ">  
    <img src={TextEditor} alt="me" style={{width:"100%"}} className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"/>
 <hr />
  <div className="w3-light-gray p-2 w3-margin-bottom">
    <h4 className="fw-light">Text Editor In Chief</h4>
    </div>
    <p><i>Text_Editor-In-Chief is a browser-based text editor that allows Users to create and edit text documents seamlessly.</i></p>
    <hr />
    <div className="container">
    <p className="w3-opacity">click to view repository</p>
    <p><button href="https://github.com/carolwargo/Text_Editor-in-Chief"
    className="w3-button w3-light-grey w3-block"> Github</button></p>
    </div>
    </div>
  </div>
</div>

  <div className="row">
  <div className="col-sm-12 col-lg-4">
    <div className="w3-container w3-content shadow w3-padding-16 ">  
      <img src={TextEditor} alt="me" style={{width:"100%"}} className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"/>
   <hr />
    <div className="w3-light-gray p-2 w3-margin-bottom">
      <h4 className="fw-light">Text Editor In Chief</h4>
      </div>
      <p><i>Text_Editor-In-Chief is a browser-based text editor that allows Users to create and edit text documents seamlessly.</i></p>
      <hr />
      <div className="container">
      <p className="w3-opacity">click to view repository</p>
      <p><button href="https://github.com/carolwargo/Text_Editor-in-Chief"
      className="w3-button w3-light-grey w3-block"> Github</button></p>
      </div>
      </div>
    </div>



    <div className="col-sm-12 col-lg-4">
    <div className="w3-container w3-content shadow w3-padding-16 ">  
      <img src={TextEditor} alt="me" style={{width:"100%"}} className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"/>
   <hr />
    <div className="w3-light-gray p-2 w3-margin-bottom">
      <h4 className="fw-light">Text Editor In Chief</h4>
      </div>
      <p><i>Text_Editor-In-Chief is a browser-based text editor that allows Users to create and edit text documents seamlessly.</i></p>
      <hr />
      <div className="container">
      <p className="w3-opacity">click to view repository</p>
      <p><button href="https://github.com/carolwargo/Text_Editor-in-Chief"
      className="w3-button w3-light-grey w3-block"> Github</button></p>
      </div>
      </div>
    </div>



    <div className="col-sm-12 col-lg-4">
    <div className="w3-container w3-content shadow w3-padding-16 ">  
      <img src={TextEditor} alt="me" style={{width:"100%"}} className="w3-rounded w3-margin-top  w3-image w3-opacity w3-hover-opacity-off"/>
   <hr />
    <div className="w3-light-gray p-2 w3-margin-bottom">
      <h4 className="fw-light">Text Editor In Chief</h4>
      </div>
      <p><i>Text_Editor-In-Chief is a browser-based text editor that allows Users to create and edit text documents seamlessly.</i></p>
      <hr />
      <div className="container">
      <p className="w3-opacity">click to view repository</p>
      <p><button href="https://github.com/carolwargo/Text_Editor-in-Chief"
      className="w3-button w3-light-grey w3-block"> Github</button></p>
      </div>
      </div>
    </div>
  </div>
  </div>
{/**end Backend grid */}


{/**end Portfolio photo grid */}
 </div>
  {/**end Portfolio section */}
  





    <div className="w3-main w3-padding-large">
       <div className="w3-content w3-padding-64" >
<h2 className="w3-padding-16">Samples. </h2>

<div className="w3-row-padding" style={{margin:"0 -16px"}}>
    <div className="w3-half w3-margin-bottom">
        <ul className="w3-ul w3-center w3-card w3-hover-shadow">
          <li className="w3-black w3-xlarge w3-padding-32">Blog Site <br/> <span style={{fontSize:'14px', fontWeight:'lighter'}}>Blog site features: </span></li>
          <li className="w3-padding-16">Moment Js Integration</li>
          <li className="w3-padding-16">Featured Entries</li>
          <li className="w3-padding-16">Post Data Arrays</li>
          <li className="w3-padding-16">Share Buttons</li>
          <li className="w3-light-grey w3-padding-24">
           <a href="/blog"alt='blog'> <button className="w3-button w3-white w3-padding-large w3-hover-black">See Site</button></a>
          </li>
        </ul>
      </div>
      <div className="w3-half">
      <ul className="w3-ul w3-center w3-card w3-hover-shadow">
          <li className="w3-black w3-xlarge w3-padding-32">Blog Site <br/> 
          <span style={{fontSize:'14px', fontWeight:'lighter'}}>Blog site features: </span></li>
          <li className="w3-padding-16">Moment Js Integration</li>
          <li className="w3-padding-16">Featured Entries</li>
          <li className="w3-padding-16">Post Data Arrays</li>
          <li className="w3-padding-16">Share Buttons</li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-white w3-padding-large w3-hover-black">See Site</button>
          </li>
        </ul>
      </div>
    {/*endgrid for pricing tables*/}
</div>
 
    </div>
    {/*endgrid for pricing tables*/}
    </div>
    </div>
   </div>

  );
};

export default BrandExample;