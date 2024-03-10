import React from "react";
import MeWhite from "../../assets/images/Me/MeWhite.png";
import Resume from "../../assets/Resume.pdf";
import { NavLink } from "react-router-dom";
//import LocationView from "../../assets/images/About/LocationView.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
//import { FaLongArrowAltRight } from "react-icons/fa";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

import Design from "../../assets/images/Resume/Design.png";
import VCIDE from "../../assets/images/Resume/VCIDE.png";
import Front from "../../assets/images/Resume/Front.png";
import Back from "../../assets/images/Resume/Back.png";
import DB from "../../assets/images/Resume/DB.png";
import Core from "../../assets/images/Resume/Core.png";
import Package from "../../assets/images/Resume/Package.png";
import BuildTest from "../../assets/images/Resume/BuildTest.png";
import APIQ from "../../assets/images/Resume/APIQ.png";
import ResumeWorkspace from "../../assets/images/Resume/ResumeWorkspace.png";
import Star1 from "../../components/OnClickEvents/Star1";
import Star2 from "../../components/OnClickEvents/Star2";
import Star3 from "../../components/OnClickEvents/Star3";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

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
            background-image: url('${ResumeWorkspace}');
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
  <a href="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}} >Home</a>
  <a href="/about" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>About</a>
    <a href="/resume" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Resume</a>
    <a href="/portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Portfolio</a>
    <a href="/contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Contact</a>
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
          <h1 className="w3-jumbo" id="resume" ><b>RESUME.</b></h1>
          <p style={{ fontFamily: "Raleway" }}>
          Digital Resume contains{" "}
          <strong>
            {" "}
            <a href="#professional-achievements"> PROFESSIONAL ACHIEVEMENTS</a>
          </strong>
          ,{" "}
          <strong>
            {" "}
            <a href="#technical-skills">TECHNICAL SKILLS</a>
          </strong>
          ,
          <strong>
            {" "}
            <a href="#experience">EDUCATION</a>{" "}
          </strong>{" "}
          , and{" "}
          <strong>
            {" "}
         <a href="#resume-download">RESUME DOWNLOAD</a>
          </strong> for work history.{" "}
          -{" "}
        </p>
          <img src={ResumeWorkspace} className="w3-image w3-hide-large w3-hide-small w3-round" style={{ display: "block", width: "60%", margin: "auto" }} alt="Profile" />
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
        </header>
 {/**end Header section */}
 

 {/*start Achievements */}
 <div className="w3-content w3-justify w3-text-black w3-padding-32" id="about">
<h2>Professional Profile. </h2>
<hr />
<p>I've had the privilege of contributing to several innovative projects and achieving significant milestones throughout my career. With a strong foundation in project management, user-centrics, coding languages and a passion for problem-solving, I've played a pivotal role in developing robust software solutions that meet the diverse needs of clients and users.</p>

       <br />          
<br />
<h2>Professional Achievements. </h2>
<hr />
<p>My professional journey has been marked by numerous achievements. Discover some of my key accomplishments. Click on the
respective buttons for more details.</p>
 {/*start stars*/}
          <div id="professional-achievements"
            style={{ color: "black" }}
          >
            <div className="w3-container w3-light-gray ">
              <div style={{ paddingTop: "1rem" }}>
                <Star1 />
              </div>
            
              <div style={{ paddingTop: "1rem" }}>
                <Star2 />
              </div>
              
              <div style={{ paddingTop: "1rem" }}>
                {" "}
                <Star3 />
              </div>
            </div>
            </div>
<br />

<br />
<br />
    {/*start proficiencies*/}
    <h2 id="technical-skills">Technical Skills. </h2>
    <hr />
    <p>"Equipped with a diverse array of technical skills, I possess a versatile toolkit honed through hands-on experience and continuous learning. From proficiency in programming languages and frameworks to expertise in software development methodologies and tools, my technical acumen empowers me to tackle complex challenges and deliver innovative solutions effectively."</p>
    <div className="technical-skills-div d-flex flex-column bg-black text-white py-2">
   <h3 className="text-center w3-margin pt-4">Technical Proficiencies. </h3>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              DESIGN & COLLABORATION TOOLS
              <img
                src={Design}
                alt="Design"
                className="img-fluid"
                style={{ width: "80%", marginLeft: "2rem" }}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              VERSION CONTROL & IDE
              <img
                src={VCIDE}
                alt="VCIDE"
                className="img-fluid"
                style={{ width: "80%", marginLeft: "2rem" }}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              CORE TECHNOLOGIES
              <img
                src={Core}
                alt="Core"
                className="img-fluid"
                style={{ width: "80%", marginBottom: "2rem" }}
              />
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              FRONT END DEVELOPMENT
              <img
                src={Front}
                alt="Front"
                className="img-fluid"
                style={{ width: "80%", marginLeft: "2rem" }}
              />
            </TimelineContent>
          </TimelineItem>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                BACK END DEVELOPMENT
                <img
                  src={Back}
                  alt="Back"
                  className="img-fluid"
                  style={{ width: "80%", marginLeft: "2rem" }}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                DATABASES
                <br></br>
                <img
                  src={DB}
                  alt="DB"
                  className="img-fluid"
                  style={{ width: "80%", marginLeft: "2rem" }}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                PACKAGE MANAGERS
                <img
                  src={Package}
                  alt="Package"
                  className="img-fluid"
                  style={{ width: "80%", marginLeft: "2rem" }}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                BUILD & TEST TOOLS
                <img
                  src={BuildTest}
                  alt="BuildTest"
                  className="img-fluid"
                  style={{ width: "80%", marginLeft: "2rem" }}
                />
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.light"></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                API & QUERY LANGUAGE
                <img
                  src={APIQ}
                  alt="APIQ"
                  className="img-fluid"
                  style={{ width: "80%", marginLeft: "2rem" }}
                />
              </TimelineContent>
            </TimelineItem>
            <br />
            <br />
            <TimelineItem>
              <TimelineOppositeContent color="text.light" id="education">
                <h5 className="text-white">
                  Certificate of Full Stack Web Development
                </h5>
                <h6 className="text-white">
                  George Washington University (July 2023)
                </h6>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent>
                <h3>EDUCATION</h3>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Timeline>
        <div className="d-flex flex-row justify-content-center">
          <div className="d-flex flex-column">
            <p className="text-white">DOWNLOAD A COPY OF MY RESUME</p>
           
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
        </div>
        <br></br>
      </div>
      <br />
  <br />
  <br />
         {/*start experience*/}
         <h2>Interpersonal Proficiencies. </h2>
         <hr />
<p>       Key pillars that define both my personal and professional identity. From leadership prowess and adept problem-solving to unwavering efficiency and the cultivation of a thriving organizational culture, each facet speaks volumes about my commitment and approach to life and work."</p>
         <div className="w3-row w3-light-gray w3-padding-16 w3-section">
  <div className="w3-section px-4">
    <h4><b>LEADERSHIP:</b></h4>
    <p >I lead with excellence in collaborative environments, leveraging my strong interpersonal skills to drive teams towards success. I prioritize active listening and value input from all team members, regardless of pay grade or status.</p>
  </div>
  <div className="w3-section px-4">
    <h4><b>APPROACH:</b></h4>
    <p >My problem-solving approach is grounded in thorough research and analysis, coupled with a keen eye for detail. I tackle challenges head-on and pride myself on finding innovative solutions that push the boundaries of possibilities.</p>
  </div>
  <div className="w3-section px-4">
    <h4><b>EFFICIENCY:</b></h4>
    <p >I ensure deadlines are met and objectives are achieved efficiently and effectively through my strong background in project management. I thrive in dynamic environments and am adept at adapting to changing priorities.</p>
  </div>
  <div className="w3-section px-4">
    <h4><b>CULTURE:</b></h4>
    <p >I foster a culture of inclusion, transparency, and accountability by prioritizing clear communication and mutual respect. I believe in building strong relationships and empowering others to reach their full potential.</p>
  </div>
</div>

{/*end resume */}
</div>
{/*start Contact section */}

 {/*start Footer */}
 <footer className="w3-container w3-padding-48 text-center">
  <NavLink to={"/about"}>
    <button className="w3-button w3-black w3-disabled w3-padding-small">
      « About
    </button>
  </NavLink>

  <NavLink to={"/portfolio"}>
    <button className="w3-button w3-black w3-padding-small">
      Portfolio »
    </button>
  </NavLink>
</footer>

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



</div>
</div>
</div>
  );
}

export default Home;