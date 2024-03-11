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
  <div className="bgimg w3-padding-32"></div>
</nav>


    <div className="w3-main w3-padding-large  w3-justify" style={{marginLeft:"40%"}}>
     {/*start Header section*/}
     <header className="w3-container w3-center justify-content-center align-items-center" style={{ padding: "70px 16px" }} >
     
          <h1 className="w3-jumbo"><b>Carol Wargo</b></h1>
          <p>Full Stack Developer | UX Designer.</p>
          <img src={MeWhite} className="w3-image w3-hide-large w3-hide-small w3-round" style={{ display: "block", width: "50%", margin: "auto" }} alt="Profile" />
          <img src={MeWhite} className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333" alt="Profile" />
        
          <div className="w3-padding-16 w3-center">
          <button className="w3-button w3-light-grey">
          
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
        </header>

  
 
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
    <h4>Contact Information. </h4>
      <p><i className="fa fa-phone fa-fw w3-xlarge w3-margin-right"></i> Phone:<a href="tel:+4437711726">+443-771-1726</a></p>
      <p><i className="fa fa-envelope fa-fw w3-xlarge w3-margin-right"> </i> Email: <a href="mailto:carolwargo.dev@gmail.com" alt='me'> email</a></p>
    </div>
    <br />
      {/**Image of Location Map */}
      <h4>Where I am Located. </h4>
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
<footer className="w3-container w3-padding-64 w3-light-grey  w3-center w3-opacity w3-large" style={{ margin: "-24px" }}>
  <a href="/" className="w3-hover-opacity mx-1 text-black">Home </a>
  <a href="/about" className="w3-hover-opacity mx-1 text-black">About </a>
  <a href="/resume" className="w3-hover-opacity mx-1 text-black">Resume</a>
  <a href="/portfolio" className="w3-hover-opacity mx-1 text-black">Portfolio</a>
  <a href="/contact" className="w3-hover-opacity mx-1 text-black">Contact </a>
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