import React from "react";
import MeWhite from "../../../assets/images/Me/MeWhite.png";
import Resume from "../../../assets/Resume.pdf";
//import LocationView from "../../../assets/images/About/LocationView.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Graphics = () => {

  return (
  <div>
    <div className="">

      <div className="w3-display-container w3-content w3-wide" id="home"> 
      
     {/*start Header section*/}
     <header className="w3-container w3-center " style={{ padding: "80px 16px" }} id="home">
          <div className="w3-container w3-center w3-opacity w3-large">
            <nav> <a href="https://carolwargo.github.io/react-portfolio/" className="w3-button ">
            <i className="fab fa-github" w3-hover-opacity></i></a>
          <span><a href="https://www.linkedin.com/in/carol-wargo-35021baa/" className="w3-button">
            <i className="fab fa-linkedin" w3-hover-opacity></i></a></span> 
          <span><a href="mailto:carolwargo.dev@gmail.com" className="w3-button">
            <i className="fa fa-envelope fa-fw" w3-hover-opacity></i> </a></span> 
          <span><a href="tel:443-771-1726"className="w3-button"> 
          <i className="fa fa-phone fa-fw" w3-hover-opacity></i></a></span>
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
 <div className="w3-padding-32 w3-content" id="portfolio">
 <h2 className="w3-text-grey">My Portfolio</h2>
    <hr className="w3-opacity"/>
{/**start Portfolio photo grid */}
<div className="w3-row-padding" style={{margin:"0 -16px"}}>
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
      </div>
</div>
{/**end Portfolio photo grid */}
 </div>
  {/**end Portfolio section */}
  

 {/*start Aboutsection */}
 <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
<h2>About</h2>
<hr className="w3-opacity"/>
    <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    {/*start proficiencies*/}
    <h3 className="w3-padding-16">Technical Proficiencies</h3>
    <p className="w3-wide">Photography</p>
    <div className="w3-light-grey">
      <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"95%"}}>95%</div>
 </div>
 <p className="w3-wide">Photography</p>
    <div className="w3-light-grey">
      <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"95%"}}>95%</div>
 </div>
 <p className="w3-wide">Photography</p>
    <div className="w3-light-grey">
      <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"95%"}}>95%</div>
 </div>
 <p className="w3-wide">Photography</p>
    <div className="w3-light-grey">
      <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"95%"}}>95%</div>
 </div>
 <p className="w3-wide">Photography</p>
    <div className="w3-light-grey">
      <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:"95%"}}>95%</div>
 </div>
{/*end proficiencies*/}
    {/*start experience*/}
    <div className="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
      <div className="w3-quarter w3-section">
        <span className="w3-xlarge">14+</span><br/>
        Partners
      </div>
      <div className="w3-quarter w3-section">
        <span className="w3-xlarge">55+</span><br/>
        Projects Done
      </div>
      <div className="w3-quarter w3-section">
        <span className="w3-xlarge">89+</span><br/>
        Happy Clients
      </div>
      <div className="w3-quarter w3-section">
        <span className="w3-xlarge">150+</span><br/>
        Meetings
      </div>
    </div>
     {/*end experience*/}
      {/*start testimonials*/}
      <h3 className="w3-padding-24">My Reputation</h3>
      <img src={MeWhite} alt="me" 
      className='w3-left w3-circle w3-margin-right'
      style={{width:'80px'
      }}
      />
       <p><span className="w3-large w3-text-black w3-margin-right">Chandler Bing.</span> Web Designer.</p>
    <p>Jane Doe is just awesome. I am so happy to have met her!</p><br></br>
    <img src={MeWhite} alt="me" 
      className='w3-left w3-circle w3-margin-right'
      style={{width:'80px'
      }}
      />
       <p><span className="w3-large w3-text-black w3-margin-right">Chandler Bing.</span> Web Designer.</p>
    <p>Jane Doe is just awesome. I am so happy to have met her!</p><br></br>  
       {/*end testimonials*/}
{/*start grid for pricing tables*/}
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
{/*end Aboutsection */}
</div>

</div>
</div>
</div>
  );
}

export default Graphics;