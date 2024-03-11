import React from "react";
import Resume from "../../assets/Resume.pdf";
import Footer from "../../components/Footer/Footer";
import Design from "../../assets/images/Resume/Design.png";
import VCIDE from "../../assets/images/Resume/VCIDE.png";
import Front from "../../assets/images/Resume/Front.png";
import Back from "../../assets/images/Resume/Back.png";
import DB from "../../assets/images/Resume/DB.png";
import Core from "../../assets/images/Resume/Core.png";
import Package from "../../assets/images/Resume/Package.png";
import BuildTest from "../../assets/images/Resume/BuildTest.png";
import APIQ from "../../assets/images/Resume/APIQ.png";
import Star1 from "../../components/OnClickEvents/Star1";
import Star2 from "../../components/OnClickEvents/Star2";
import Star3 from "../../components/OnClickEvents/Star3";
import ResumeWorkspace from "../../assets/images/Resume/ResumeWorkspace.png";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  const openNav = () => {
    document.getElementById("mySidebar").style.display = "block";
  }

  const closeNav = () => {
    document.getElementById("mySidebar").style.display = "none";
  }

  return (
    <div className="resume" id="resume">
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
            href="/about"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            About
          </a>
          <a
            href="/resume"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            Resume
          </a>
          <a
            href="/portfolio"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={closeNav}
          >
            Portfolio
          </a>
          <a
            href="/contact"
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
          style={{ width: "auto;right:0" }}
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
            src={ResumeWorkspace}
            className="w3-image w3-hide-large w3-hide-small w3-round"
            style={{ display: "block", width: "60%", margin: "auto" }}
            alt="Profile"
          />
          <img
            src={ResumeWorkspace}
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
              href={Resume}
            >
              <i className="fa fa-download"></i> Download Resume
            </a>
          </button>
        </header>

 {/**end Header section */}
 

 {/*start profile*/}
 <div className="w3-content w3-justify w3-text-black w3-padding-32">
<h2>Professional Profile. </h2>
<hr />
<p>I've had the privilege of contributing to several innovative projects and achieving significant milestones throughout my career. With a strong foundation in project management, user-centrics, coding languages and a passion for problem-solving, I've played a pivotal role in developing robust software solutions that meet the diverse needs of clients and users.</p>      
</div>
 {/*end profile*/}

 {/*start achievements*/}
 <div className="w3-content w3-justify w3-text-black w3-padding-32">
<h2>Professional Achievements. </h2>
<hr />
<p>My professional journey has been marked by numerous achievements. Discover some of my key accomplishments. Click on the
respective buttons for more details.</p>
 {/*start stars*/}
          <div id="professional-achievements"
            style={{ color: "black" }}
          >
            <div className="w3-container w3-light-gray">
              <div style={{ paddingTop: "1rem" }}>
              <div className="w3-padding">
        <h4>Technological Transformation in Business.</h4>
       <p className="text-secondary fw-light">click <b>SHOW ACHIEVEMENT</b> to reveal achievement statement.
      </p>
       </div>
                <Star1 />
              </div>
            
              <div style={{ paddingTop: "1rem" }}>
              <div className="w3-padding">
      <h4>Develop & Launch Marketing Campaigns.</h4>
    <p className="text-secondary fw-light">click <b>SHOW ACHIEVEMENT</b> to reveal achievement statement.
   </p>
    </div>
                <Star2 />
              </div>
              
              <div style={{ paddingTop: "1rem" }}>
              <div className="w3-margin-top"> <h4>Leadership & Profit Surge Against the Odds.</h4>
</div>
                <Star3 />
              </div>
            </div>
            </div>
            </div>
            {/*end achievements */}

            {/*start proficiencies*/}
            <div className="w3-content w3-justify w3-text-black w3-padding-32">
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
        </div>
        <br></br>
      </div>
       {/*end technical skills*/}

         {/*start Interpersonal Proficiencies*/}
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
   {/*end Interpersonal Proficiencies*/}
{/*end resume */}
<div className="w3-content w3-justify w3-text-black w3-padding-16 w3-center w3-margin-bottom">
          <a href="/portfolio">
            <p className="w3-margin-bottom">
              Click to view my digital portfolio.
              <FaLongArrowAltRight className="w3-margin-left " />
            </p>
          </a>
        </div>
{/*start Footer import */}
<Footer/>
{/*end Footer import */}
</div>
</div>
  );
}

export default Home;