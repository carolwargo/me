import React from "react";
//import Volunteer from "../components/About/Volunteer.jsx";
import AboutFinal from "../../components/About/AboutFinal.jsx";
import LocationView from '../../assets/images/About/LocationView.png';
import { FaLongArrowAltRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'

export default function About() {
  return (
    <div  className="about pb-2" id="about">
      <main className="pb-2" >
      <nav  className="w3-center shadow">
        <div className="w3-center w3-padding-16">
          <a href="/" className="w3-bar-item w3-text-grey w3-hover-black p-2" style={{fontSize:'14px'}} >Home</a>
          <a href="/about" className="w3-bar-item w3-text-grey w3-hover-black p-2" style={{fontSize:'14px'}}>About</a>
            <a href="/resume" className="w3-bar-item w3-text-grey w3-hover-black p-2" style={{fontSize:'14px'}}>Resume</a>
            <a href="/portfolio" className="w3-bar-item w3-text-grey w3-hover-black p-2" style={{fontSize:'14px'}}>Portfolio</a>
            <a href="/contact" className="w3-bar-item w3-text-grey w3-hover-black p-2" style={{fontSize:'14px'}}>Contact</a>
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
        <div className="w3-content w3-justify w3-text-black w3-padding-16 w3-center w3-margin-bottom">
  <a href="/about">
<p className="w3-margin-bottom">Click to view my digital resume.<FaLongArrowAltRight className="w3-margin-left "/></p></a>
</  div>
<br />
        </main>

<div className="w3-margin-top">
        <footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-large text-black" style={{ margin: "-24px" }}>
  <br />
  <a href="/" className="w3-hover-opacity p-2 text-black">Home </a>
  <a href="/about" className="w3-hover-opacity p-2 text-black">About </a>
  <a href="/resume" className="w3-hover-opacity p-2 text-black">Resume</a>
  <a href="/portfolio" className="w3-hover-opacity p-2 text-black">Portfolio</a>
  <a href="/contact" className="w3-hover-opacity p-2 text-black">Contact </a>
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


