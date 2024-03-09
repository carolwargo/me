import React from "react";
import MeWhite from "../../assets/images/Me/MeWhite.png";
import Resume from "../../assets/Resume.pdf";
import LocationView from "../../assets/images/About/LocationView.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";

const Home = () => {

  return (
  <div>
    <div className="">
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
    <a href="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black" >Home</a>
    <a href="/portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Portfolio</a>
    <a href="/about" className="w3-bar-item w3-button w3-text-grey w3-hover-black">About</a>
    <a href="/contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black">Contact</a>
  </div>
</nav>
    </span>




     {/*start Header section*/}
     <header className="w3-container w3-center " style={{ padding: "80px 16px" }} id="home">
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


      {/**start Portfolio section */}
 {/*<div className="w3-padding-32 w3-content" id="portfolio">
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
 <div className="w3-content w3-justify w3-text-black w3-padding-32" id="about">
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
    {/*start proficiencies*/}
    <h2>Technical Proficiencies. </h2>
    <p className="w3-wide text-black" style={{ fontSize: "1rem" }}>
          <GiGears className="justify-content-center" /> Core Technologies
        </p>
    <div className="w3-light-grey">
      <div className="w3-container w3-center w3-padding-small w3-black" style={{width:"85%"}}>85%</div>
 </div>
 <p className="w3-wide text-black" style={{ fontSize: "1rem" }}>
          <FaLaptopCode className="justify-content-center" /> Front-End Design
        </p>
    <div className="w3-light-grey">
      <div className="w3-container w3-center w3-padding-small w3-black" style={{width:"95%"}}>95%</div>
 </div>
 <p className="w3-wide text-black" style={{ fontSize: "1rem" }}>
          <BsDatabaseLock className="justify-content-center" /> Server-Side
          Development
        </p>
    <div className="w3-light-grey">
      <div className="w3-container w3-center w3-padding-small w3-black" style={{width:"80%"}}>80%</div>
 </div>
 <p className="w3-wide text-black" style={{ fontSize: "1rem" }}>
          <HiOutlinePuzzlePiece className="justify-content-center" /> Full-Stack
          Integration
        </p>
    <div className="w3-light-grey">
      <div className="w3-container w3-center w3-padding-small w3-black" style={{width:"75%"}}>75%</div>
 </div>
 <p className="w3-wide text-black" style={{ fontSize: "1rem" }}>
          <AiFillDatabase className="justify-content-center" /> Database
          Implementation
        </p>
    <div className="w3-light-grey">
      <div className="w3-container w3-center w3-padding-small w3-black" style={{width:"75%"}}>75%</div>
 </div>
{/*end proficiencies*/}
   <br />
      {/*start testimonials*/}
      <h2 className="w3-padding-24">
          My Reputation.<br />
          <span className="" style={{ fontSize: "16px" }}>
            {" "}
            What clients and collegues have to say.
          </span>
        </h2>

        <p style={{ fontFamily: "sans-serif" }}>
          {" "}
        
            " Carol has been an invaluable asset to transforming my brand's
            online presence. In just 13 months, she took my brand-new social
            media account and propelled it to new heights, amassing an
            impressive reach and an unimaginable conversion rate... "
      
        </p>
       
        <hr />
        <p style={{ fontFamily: "sans-serif" }}>
          {" "}
        
            "Carol possesses a remarkable eye for all things creative. Her
            design sensibility is both distinctive and deeply personal. She pays
            attention to details that often go unnoticed by others, and she
            demonstrates the foresight to anticipate future needs and
            opportunities for growth..."
       
        </p>
       
        <hr />
        <p style={{ fontFamily: "sans-serif" }}>
          {" "}
       
            "Carol inspires you to consider the possibilities and embrace change
            with ease. She consistently goes above and beyond, delivering work
            that exceeds expectations and promises..."
         
        </p>
        <hr />
  <br />
        <p className="text-center"><em>"Letters of reference in their entirety available apon request."</em></p>
  <br />
 {/*end testimonials*/}
         {/*start experience*/}
         <h2>Experience. </h2>
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


        </div>
       {/*end experience*/}

 <div className="w3-content w3-justify w3-text-black w3-padding-32 w3-center" id="about">
  <a href="/about">
<p>To Learn more about me. <FaLongArrowAltRight className="w3-margin-left"/></p></a>
</  div>



{/*end Aboutsection */}
</div>
{/*start Contact section */}
<div className="w3-padding-32 w3-content w3-text-black" id="contact" style={{marginBottom:"64px"}}>
    <h2>Contact Me. </h2>
    <hr />

    <div className="w3-section">
      <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right "></i> Chicago, US</p>
      <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +00 151515</p>
      <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
    </div>

    {/**Image of Location Map */}
    <img src={LocationView} alt="map" style={{width:"100%", margin:"32px 0"}} className="w3-image w3-greyscale" />
    <p>Lets get in touch. Send me a message:</p>
    <form action="" target="_blank">
    <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"/></p>
      <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email"/></p>
      <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Subject" required name="Subject"/></p>
      <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message"/></p>
      <p>
        <button className="w3-button w3-light-grey w3-padding-large" type="submit">
          <i className="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
</div>
{/*end Contact section */}
{/*start Footer */}
<footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge" style={{ margin: "-24px" }}>
  <i className="fab fa-facebook-f w3-hover-opacity mx-1"></i>
  <i className="fab fa-instagram w3-hover-opacity mx-1"></i>
  <i className="fab fa-snapchat-ghost w3-hover-opacity mx-1"></i>
  <i className="fab fa-pinterest-p w3-hover-opacity mx-1"></i>
  <i className="fab fa-twitter w3-hover-opacity mx-1"></i>
  <i className="fab fa-linkedin-in w3-hover-opacity mx-1"></i>
  <p className="w3-medium">Established by: <a href="/" target="_blank" className="w3-hover-text-green">Carol Wargo</a></p>
</footer>

{/*end Footer */}
</div>
</div>
</div>
  );
}

export default Home;