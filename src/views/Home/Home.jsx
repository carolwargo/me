import React, { useState } from "react";
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

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="home" id="home">
      {/* Sidebar with image */}
      <nav className={`w3-sidebar w3-hide-medium w3-hide-small ${sidebarOpen ? 'show' : ''}`}>
        <div className="bgimg w3-padding-32"></div>
      </nav>
      <nav
        className={`w3-sidebar w3-black w3-animate-right w3-xxlarge ${sidebarOpen ? 'show' : ''}`}
        id="mySidebar"
      >
        <a href="/" className="w3-button w3-black w3-xxxlarge w3-display-topright" onClick={toggleSidebar}>
          <i className="fa fa-remove"></i>
        </a>
        <div className="w3-bar-block w3-center">
          <a href="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={toggleSidebar}>
            Home
          </a>
          <a href="#about" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={toggleSidebar}>
            About
          </a>
          <a href="#resume" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={toggleSidebar}>
            Resume
          </a>
          <a href="#portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={toggleSidebar}>
            Portfolio
          </a>
          <a href="#contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black" onClick={toggleSidebar}>
            Contact
          </a>
        </div>
      </nav>

      {/* Page Content */}
      <div className="w3-main w3-padding-large" style={{ marginLeft: "40%" }}>
        {/* Menu icon to open sidebar */}
        <span className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black" style={{ width: "auto;right:16px" }} onClick={toggleSidebar}>
          <i className={`fa fa-bars ${sidebarOpen ? 'hidden' : ''}`}></i>
        </span>

        {/* Start Header section */}
        <header className="w3-container w3-center justify-content-center align-items-center" style={{ padding: "128px 16px" }}>
          <h1 className="w3-jumbo">
            <b>Carol Wargo</b>
          </h1>
          <p>Full Stack Developer | UX Designer.</p>
          <img src={MeWhite} className="w3-image w3-hide-large w3-hide-small w3-round" style={{ display: "block", width: "60%", margin: "auto" }} alt="Profile" />
          <img src={MeWhite} className="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333" alt="Profile" />
          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
            <a className="button text-black" id="resume-download" download href={ResumeDownload}>
              <i className="fa fa-download"></i> Download Resume
            </a>
          </button>
        </header>

        {/* Start About section */}
        <div className="w3-content w3-justify w3-text-black w3-padding-32">
          <h1 style={{ fontSize: '4rem' }}>Welcome.</h1>
          <hr />
          <p>"I'm Carol Wargo, and welcome to my digital domain! Join me as I share insights into who I am professionally and the years of experience that shape what I do."</p>
          {/* Image of Location Map */}
          <h4>Where I am Located.</h4>
          <p>
            <i className="fa fa-map-marker fa-fw w3-xlarge w3-margin-right "></i>
            Huntingtown, MD.
          </p>
          <img src={LocationView} alt="map" style={{ width: "100%", margin: "16px 0" }} className="w3-image w3-greyscale" />
          {/* About */}
          <div className='about' id='about'>
            <About />
          </div>
          {/* Resume */}
          <Resume />
          {/* Portfolio */}
          <Portfolio />
          {/* Contact */}
          <Contact />
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;