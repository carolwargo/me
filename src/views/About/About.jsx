import React from "react";
//import Volunteer from "../components/About/Volunteer.jsx";
import AboutFinal from "../../components/About/AboutFinal.jsx";
import LocationView from '../../assets/images/About/LocationView.png';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'

export default function About() {
  return (
    <div  className="about pb-2" id="about">
      <main className="pb-2" >
      <nav>
<div className="w3-center py-2">
    <a href="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}} >Home</a>
    <a href="/about" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>About</a>
    <a href="/resume" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Resume</a>
    <a href="/portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Portfolio</a>
    <a href="/contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Contact</a>
  </div>
</nav>
     
      <AboutFinal />
      <div className='row p-5 d-flex align-items-center'>
      <div className='col-md-4 flex-column justify-content-end align-items-center'>
      <div className="d-flex align-items-center justify-content-center">
    <h2 className=' justify-content-center align-items-center'>WHERE I'M LOCATED</h2>
    </div>
    <div className="d-flex align-items-center justify-content-center">
    <p className=' justify-content-center align-items-center'> 
    <em>Huntingtown, Maryland!</em></p>
   </div>
</div>
        <div className='col-md-8 justify-content-center align-items-center'>
        <img src={LocationView} alt="htown" className="w3-image w3-round" style={{width:"100%"}} ></img>
        </div>
        </div>
        </main>

<div className="w3-margin-top">
        <footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-large" style={{ margin: "-24px" }}>
<div>
<NavLink to={"/about"}>
    <button className="w3-button w3-black w3-disabled w3-padding-small">
      «  Home
    </button>
  </NavLink>

  <NavLink to={"/resume"}>
    <button className="w3-button w3-black w3-padding-small">
      Resume »
    </button>
  </NavLink>
  </div>
  <br />
  <a href="/" className="w3-hover-opacity mx-1">Home </a>
  <a href="/about" className="w3-hover-opacity mx-1">About </a>
  <a href="/resume" className="w3-hover-opacity mx-1">Resume</a>
  <a href="/portfolio" className="w3-hover-opacity mx-1">Portfolio</a>
  <a href="/contact" className="w3-hover-opacity mx-1">Contact </a>
  <p className="w3-medium">
    Copyright: 
    <a href="/" target="_blank" className="w3-hover-text-green">
      &copy; 2024 Carol Wargo
    </a>
  </p>
</footer>
{/*end Footer */}
    </div>
    </div>
  );
}

// export default About;


