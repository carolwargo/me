import React from "react";
import { NavLink } from "react-router-dom";
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
import Resume from "../../assets/Resume.pdf";
import Star1 from "../../components/OnClickEvents/Star1";
import Star2 from "../../components/OnClickEvents/Star2";
import Star3 from "../../components/OnClickEvents/Star3";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

export default function ResumePage() {
  return (
    <div className="resume" id="resume">
      
      <nav>
<div className="w3-center w3-bar w3-padding-16 shadow">
  <div className="w3-margin-left">
    <a href="/" className="w3-bar-item w3-buttblack w3-hover-black" >Home</a>
    <a href="/about" className="w3-bar-item w3-buttblack w3-hover-black">About</a>
    <a href="/resume" className="w3-bar-item w3-buttblack w3-hover-black">Resume</a>
    <a href="/portfolio" className="w3-bar-item w3-buttblack w3-hover-black">Portfolio</a>
   <a href="/contact" className="w3-bar-item w3-buttblack w3-hover-black">Contact</a>
  </div>
  </div>
</nav>
      {/** end nav*/}
      <div className=" bg-light text-black p-5">
        <h1
          style={{
            fontSize: "4rem",
            textShadow: "0px 0px 14px #00ffff",
          }}
        >
          RESUME{" "}
        </h1>

        <p className="header" id="header" style={{ fontFamily: "Raleway" }}>
          Digital Resume contains{" "}
          <strong>
            {" "}
            <a href="#professional-achievements"> PROFESSIONAL ACHIEVEMENTS</a>
          </strong>
          ,<br></br>{" "}
          <strong>
            {" "}
            <a href="#technical-skills">TECHNICAL SKILLS</a>
          </strong>
          ,
          <strong>
            {" "}
            <a href="#experience">EXPERIENCE & EDUCATION</a>{" "}
          </strong>{" "}
          , and{" "}
          <strong>
            {" "}
            <a href="#resume-download">RESUME DOWNLOAD</a>
          </strong>{" "}
          -{" "}
        </p>
        <br />
        <hr />
      </div>


      <div className="container w3-margin-bottom">
        <div className="row d-flex justify-content-center align-items-center  w3-padding-large w3-margin-bottom">
          <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-large">
            <img
              src={ResumeWorkspace}
              alt="ResumeWorkspace"
              className="img-fluid shadow"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>

          <div
            className="col-sm-12 col-md-6 col-lg-6"
            style={{ color: "black" }}
          >
            <div className=" w3-padding-large" id="professional-achievements">
              <div className="text-center">
                <h3>
                  <u
                  style={{   textShadow: "0px 0px 14px #00ffff",}}
                  >PROFESSIONAL ACHIEVEMENTS</u>
                </h3>
                <h5>
                  Discover some of my key accomplishments. Click on the
                  respective buttons for more details.
                </h5>
              </div>
            </div>
            <div className="w3-content w3-container">
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
        </div>
        <br />
      </div>




      <div className="technical-skills-div d-flex flex-column bg-dark text-white pt-2">
        <h1
          className="technical-skills text-light mt-2 p-4 text-center"
          id="technical-skills"
          style={{   textShadow: "0px 0px 14px black", fontFamily: "Raleway" }}
        >
          TECHNICAL SKILLS
        </h1>
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
              <TimelineOppositeContent color="text.light">
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

            <a
              className="button bg-light text-black"
              id="resume-download"
              download
              href={Resume}
            >
              Download
            </a>
          </div>
        </div>
        <br></br>
      </div>

      <footer className="w3-container w3-padding-48 text-center ">
        <NavLink to={"/about"}>
          <button className="w3-button w3-black w3-disabled w3-padding-medium">
          « About Me
          </button>
        </NavLink>

        <NavLink to={"/portfolio"}>
          <button className="w3-button w3-black w3-padding-medium">
            Portfolio »
          </button>
        </NavLink>
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
      </footer>
    </div>
  );
}
