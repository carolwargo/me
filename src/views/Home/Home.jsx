import React from "react";
import MeWhite from "../../assets/images/Me/MeWhite.png";
import Resume from "../../assets/Resume.pdf";
import LocationView from "../../assets/images/About/LocationView.png";
//import Contact from "../../components/Contact/Contact";
//import LocationView from "../../assets/images/About/LocationView.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaLongArrowAltRight } from "react-icons/fa";
//import { FaLaptopCode } from "react-icons/fa";


const Home = () => {

  return (
  <div >
    <div className="home" id="home">
      <style>
        {`
          body, h1, h2, h3, h4, h5, h6 {
            font-family: "Montserrat", sans-serif;
          }
          .w3-row-padding img {
            margin-bottom: 10px;
          }
          .bgimg {
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url('${MeWhite}');
            min-height: 100%;
          }
        `}
      </style>

      {/* Sidebar with image */}
      <nav className="w3-sidebar w3-hide-medium w3-hide-small " style={{width:"40%"}}>
  <div className="bgimg"></div>
</nav>
{/**side bar start */}
<nav className="w3-black w3-animate-right w3-xxlarge" 
style={{ display: "none", paddingTop: "150px", right: "0", zIndex: "2" }} 
id="my-navbar">
 {/*onClick={closeNav}*/}

  <div className="w3-center">
    <a href="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black " >Home</a>
    <a href="/resume" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Resume</a>
    <a href="/portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Portfolio</a>
    <a href="/about" className="w3-bar-item w3-button w3-text-grey w3-hover-black">About</a>
    <a href="/contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Contact</a>
  </div>
</nav>




    <div className="w3-main w3-padding-large" style={{marginLeft:"40%"}}>

    <span className="w3-margin-top w3-white w3-large w3-text-grey w3-hover-text-black" 
    style={{width:"auto;right:0"}}>
      <nav>
<div className="w3-center">
    <a href="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}} >Home</a>
    <a href="/about" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>About</a>
    <a href="/resume" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Resume</a>
    <a href="/portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Portfolio</a>
    <a href="/contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Contact</a>
  </div>
</nav>
    </span>




     {/*start Header section*/}
     <header className="w3-container w3-center " style={{ padding: "80px 16px" }} >
          <div className="w3-container w3-center w3-large ">
            <nav> <a href="https://carolwargo.github.io/react-portfolio/" className="w3-button ">
            <i className="fab fa-github" ></i></a>
          <span><a href="https://www.linkedin.com/in/carol-wargo-35021baa/" className="w3-button">
            <i className="fab fa-linkedin" ></i></a></span> 
          <span><a href="mailto:carolwargo.dev@gmail.com" className="w3-button">
            <i className="fa fa-envelope fa-fw" ></i> </a></span> 
          <span><a href="tel:443-771-1726"className="w3-button"> 
          <i className="fa fa-phone fa-fw" ></i></a></span>
          </nav>
          </div>
          <h1 className="w3-jumbo"><b>Carol Wargo</b></h1>
          <p>Full Stack Developer | UX Designer.</p>
          <img src={MeWhite} className="w3-image w3-hide-large w3-hide-small w3-round" style={{ display: "block", width: "60%", margin: "auto" }} alt="Profile" />
          <img src={MeWhite} className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333" alt="Profile" />
          <div>
          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
          <a
              className="button text-black"
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


      {/**start Portfolio section */}
 {/*<div className="w3-padding-32 w3-content">
 <h2 className="w3-text-grey">My Portfolio</h2>
    <hr />*/}
{/**start Portfolio photo grid */}
{/*<div className="w3-row-padding" style={{margin:"0 -16px"}}>
<div className="w3-half">
        <img src={MeWhite} alt="me" style={{width:"100%"}}/>
        <img src={MeWhite} alt="me" style={{width:"100%"}}/>
        <img src={MeWhite} alt="me" style={{width:"100%"}}/>
      </div>


      <div className="w3-half">
      <img src={MeWhite} alt="me" style={{width:"100%"}}/>
        <img src={MeWhite} alt="me" style={{width:"100%"}}/>
        <img src={MeWhite} alt="me" style={{width:"100%"}}/>
        <img src={MeWhite} alt="me" style={{width:"100%"}}/>
      </div>*/}
{/*</div>*/}
{/**end Portfolio photo grid */}
 {/*</div>*/}
  {/**end Portfolio section */}
  

 {/*start Aboutsection */}
 <div className="w3-content w3-justify w3-text-black w3-padding-32">
<h2>About. </h2>
<hr />
    <p>  "I'm Carol Wargo, and welcome to my digital domain! Join me as I share insights into who I am professionally and the
          years of experience that shape what I do."
         </p>
         <p >"My passion lies in utilizing creative design to drive 
    innovative solutions through technology. With a distinctive blend of 
    skills and experience, I am a seasoned full-stack 
    software developer and UX designer deeply committed to collaboration, 
    bringing together diverse perspectives to tackle challenges effectively. With over 20 years of 
    experience in business management & strategic development, I bring a wealth of knowledge and expertise to every 
    project I undertake."</p>
<br />
  
{/*end proficiencies*/}
  
         {/*start experience*/}
         <h2>Experience. </h2>
         <hr />
        <div className="w3-row w3-center w3-black w3-padding-16 w3-section">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">
              20+<span style={{ fontSize: "10px" }}>yrs</span>{" "}
            </span>
            <br />
            EXPERIENCE
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">100+</span>
            <br />
            PROJECTS DONE
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">10+</span>
            <br />
            LEADER ROLES
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">100+</span>
            <br />
            MEETINGS
          </div>

{/*end Aboutsection */}
</div>
<br />
{/*start Contact section */}
<br />
  <h2>Contact Me. </h2>
  <hr />
    <div className="w3-section">

      <p><i className="fa fa-phone fa-fw w3-xlarge w3-margin-right"></i> Phone:<a href="tel:+4437711726">+443-771-1726</a></p>
      <p><i className="fa fa-envelope fa-fw w3-xlarge w3-margin-right"> </i> Email: <a href="mailto:carolwargo.dev@gmail.com" alt='me'> email</a></p>
    </div>
    <br />
      {/**Image of Location Map */}
      <h2>Where I am Located. </h2>
      <p><i className="fa fa-map-marker fa-fw w3-xlarge w3-margin-right "></i>Huntingtown, MD.</p>
      <img src={LocationView} alt="map" style={{width:"100%", margin:"16px 0"}} className="w3-image w3-greyscale" />
    </div>
       {/*end experience*/}
       <div className="w3-content w3-justify w3-text-black w3-padding-16 w3-center w3-margin-bottom">
  <a href="/about">
<p className="w3-margin-bottom">To Learn more about me. <FaLongArrowAltRight className="w3-margin-left "/></p></a>
</  div>
<br />
{/*end Contact section */}


{/*start Footer */}
<footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-large" style={{ margin: "-24px" }}>
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
</div>
  );
}

export default Home;