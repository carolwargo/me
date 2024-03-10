import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import MeWhite from "../assets/images/Me/MeWhite.png";
import Resume from "../assets/Resume.pdf";
import HomeAbout from "../components/Home/HomeAbout";
import "@fortawesome/fontawesome-free/css/all.css";

const Home = () => {

 
  return (
    <div className="w3-margin-top">
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
           marginTop: "0";
           position: "fixed";
          }
        `}
      </style>

      {/* Sidebar with image */}
      <nav
        className="w3-sidebar w3-hide-medium w3-hide-small w3-margin-top"
        style={{ width: "40%"}}
      >
        <div className="bgimg"></div>
      </nav>

    
      {/* Page Content */}
      <div className="w3-main w3-padding-large pt-0" style={{ marginLeft: "40%" }}>
        {/* Menu icon to open sidebar */}
    
        {/* Header */}
        <header className="w3-container w3-center " style={{ padding: "80px 16px" }} id="home">
          <div> <a href="https://carolwargo.github.io/react-portfolio/" className="w3-button ">
            <i className="fab fa-github"></i></a>
          <span><a href="https://www.linkedin.com/in/carol-wargo-35021baa/" className="w3-button">
            <i className="fab fa-linkedin"></i></a></span> 
          <span><a href="mailto:carolwargo.dev@gmail.com" className="w3-button">
            <i className="fa fa-envelope fa-fw"></i> </a></span> 
          <span><a href="tel:443-771-1726"className="w3-button"> 
          <i className="fa fa-phone fa-fw"></i></a></span>
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
     

       <div className="w3-container w3-content px-lg-5 justify-content-center">
    
        <HomeAbout  />
        </div>

     
      </div>
 
    </div>
  );
};

export default Home;
