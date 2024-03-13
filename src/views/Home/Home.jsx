import React from "react";
import MeWhite from "../../assets/images/Me/MeWhite.png";
import ResumeDownload from "../../assets/ResumeDownload.pdf";
import LocationView from "../../assets/images/About/LocationView.png";
import Contact from "../../components/Contact/Contact";
import About from "../../components/About/About";
import Resume from "../../components/Resume/Resume";
import Portfolio from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  const openNav = () => {
    document.getElementById("mySidebar").style.display = "block";
  }

  const closeNav = () => {
    document.getElementById("mySidebar").style.display = "none";
  }

  return (
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
      <nav
        className="w3-sidebar w3-hide-medium w3-hide-small "
        style={{ width: "40%" }}
      >
        <div className="bgimg w3-padding-32"></div>
      </nav>
      <nav
        className="w3-sidebar w3-black w3-animate-right w3-xxlarge"
        style={{
          display: "none",
          paddingTop: "150px",
          right: "0",
          zIndex: "2",
        }}
        id="mySidebar"
      >
        <a
          href="/"
          onClick={closeNav}
          className="w3-button w3-black w3-xxxlarge w3-display-topright"
          style={{ padding: "0 12px" }}
        >
          <i className="fa fa-remove"></i>
        </a>
        <div className="w3-bar-block w3-center">
          <a
            href="/"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            Home
          </a>
          <a
            href="#about"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            About
          </a>
          <a
            href="#resume"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            Resume
          </a>
          <a
            href="#portfolio"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Page Content */}
      <div className="w3-main w3-padding-large" style={{ marginLeft: "40%" }}>
        {/* Menu icon to open sidebar */}
        <span
          className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black"
          style={{ width: "auto;right:16px" }}
          onClick={openNav}
        >
          <i className="fa fa-bars"></i>
        </span>

        {/* Start Header section */}
        <header
          className="w3-container w3-center justify-content-center align-items-center"
          style={{ padding: "128px 16px" }}
        >
          <h1 className="w3-jumbo">
            <b>Carol Wargo</b>
          </h1>
          <p>Full Stack Developer | UX Designer.</p>
          <img
            src={MeWhite}
            className="w3-image w3-hide-large w3-hide-small w3-round"
            style={{ display: "block", width: "60%", margin: "auto" }}
            alt="Profile"
          />
          <img
            src={MeWhite}
            className="w3-image w3-hide-large w3-hide-medium w3-round"
            width="1000"
            height="1333"
            alt="Profile"
          />

          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
            <a
              className="button text-black"
              id="resume-download"
              download
              href={ResumeDownload}
            >
              <i className="fa fa-download"></i> Download Resume
            </a>
          </button>
        </header>

          {/*start Aboutsection */}
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
            <h1 style={{fontSize:'4rem'}}>Welcome. </h1>
            <hr />
            <p>
              {" "}
              "I'm Carol Wargo, and welcome to my digital domain! Join me as I
              share insights into who I am professionally and the years of
              experience that shape what I do."
            </p>
            {/**Image of Location Map */}
            <h4>Where I am Located. </h4>
        <p>
          <i className="fa fa-map-marker fa-fw w3-xlarge w3-margin-right "></i>
          Huntingtown, MD.
        </p>
        <img
          src={LocationView}
          alt="map"
          style={{ width: "100%", margin: "16px 0" }}
          className="w3-image w3-greyscale"
        />
  {/*start About */}
  <div className='about' id='about'>
       <About/>
       </div>
          {/*end About */}
        <br />
        
      </div>

      {/*end Contact section */}
         
      
          {/*end experience*/}
          
          <br />
          {/*end Contact section */}

       {/*start Resume */}
       <Resume/>
          {/*end Resume */}

       {/*start Portfolio */}
       <Portfolio/>
          {/*end Portfolio */}

                 {/*start Contact */}
        <Contact/>
          {/*end Contact */}


          {/*start Footer */}
        <Footer/>
          {/*end Footer */}
        </div>
 {/*page content end */}


      </div>

  );
};

export default Home;