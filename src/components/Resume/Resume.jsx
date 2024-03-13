import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import ResumeDownload from "../../assets/ResumeDownload.pdf";
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
//import ResumeWorkspace from "../../assets/images/Resume/ResumeWorkspace.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const Home = () => {
  return (
    <div className="resume" id="resume">
      {/*start profile*/}
      <div className=" w3-content w3-justify w3-text-black bg-white text-black  w3-margin-bottom">
        <div className="w3-content w3-justify w3-text-black w3-margin-bottom ">
          <h1>
            <b>RESUME.</b>
          </h1>
         
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
          <h2 className="w3-text-black" id="tables">
            Technical Proficiencies.{" "}
          </h2>
          <hr className="w3-opacity" />
          <p className="w3-wide text-black" style={{ fontSize: "1rem" }}>
            <GiGears className="justify-content-center" /> Core Technologies
          </p>
          <div className="w3-light-grey shadow ">
            <div
              className="w3-container w3-padding-small w3-black w3-center shadow"
              style={{ width: "85%" }}
            >
              85%
            </div>
          </div>
          <br />
          <p className="w3-wide text-black" style={{ fontSize: "1rem" }}>
            <FaLaptopCode className="justify-content-center" /> Front-End Design
          </p>
          <div className="w3-light-grey shadow">
            <div
              className="w3-container w3-padding-small w3-black w3-center"
              style={{ width: "95%" }}
            >
              95%
            </div>
          </div>
          <br />
          <p className="w3-wide text-black" style={{ fontSize: "1rem" }}>
            <BsDatabaseLock className="justify-content-center" /> Server-Side
            Development
          </p>
          <div className="w3-light-grey shadow">
            <div
              className="w3-container w3-padding-small w3-black w3-center"
              style={{ width: "80%" }}
            >
              80%
            </div>
          </div>
          <br />
          <p className="w3-wide text-black" style={{ fontSize: "1rem" }}>
            <HiOutlinePuzzlePiece className="justify-content-center" />{" "}
            Full-Stack Integration
          </p>
          <div className="w3-light-grey shadow">
            <div
              className="w3-container w3-padding-small w3-black w3-center"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
          <br />
          <p className="w3-wide text-black" style={{ fontSize: "1rem" }}>
            <AiFillDatabase className="justify-content-center" /> Database
            Implementation
          </p>
          <div className="w3-light-grey shadow">
            <div
              className="w3-container w3-padding-small w3-black w3-center"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>
          </div>
          <br />
          <div className="w3-margin-top">
            {/**start experience count */}
            <h2>Expertise. </h2>
            <hr className="w3-opacity" />
          </div>

          <div className="container-fluid py-2 w3-black w3-padding-32">
            <div className="w3-row w3-center w3-black">
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">
                  20<span style={{ fontSize: "10px" }}>yrs</span> +
                </span>
                <br />
                BUSINESS EXPERIENCE
              </div>
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">100+</span>
                <br />
                DESIGN PROJECTS
              </div>
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">10+</span>
                <br />
                LEADERSHIP ROLES
              </div>
              <div className="w3-quarter w3-section">
                <span className="w3-xlarge">100+</span>
                <br />
                MEETINGS
              </div>
            </div>
          </div>
          <br />

          
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
          <h2>Agile Practices.</h2>
            <hr className="w3-opacity" />
            <h5>
              <strong>Interpersonal Skills</strong>
            </h5>
            <ul>
              <li>
                Effectively communicates, fostering customer and stakeholder
                engagement throughout the development process.
              </li>
              <li>
                Articulates ideas, recommendations, and findings clearly,
                concisely, and inclusively.
              </li>
              <li>
                Promotes and welcomes feedback from all stakeholders equally.
              </li>
              <li>
                Embraces a culture of continuous improvement through
                post-implementation evaluations and knowledge sharing.
              </li>
              <li>Adapts positively to change and embraces new challenges.</li>
              <li>
                Delivers functional software (Minimum Viable Product) with a
                focus on meeting user needs and hope of exceeding expectations.
              </li>
            </ul>
          </div>

          <p>
            I've had the privilege of contributing to several innovative
            projects and achieving significant milestones throughout my career.
            With a strong foundation in project management, user-centrics,
            coding languages and a passion for problem-solving, I've played a
            pivotal role in developing robust software solutions that meet the
            diverse needs of clients and users.
          </p>

          {/*start achievements*/}
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
            <h2>Professional Achievements. </h2>
            <hr />
            <p>
              My professional journey has been marked by numerous achievements.
              Discover some of my key accomplishments. Click on the respective
              buttons for more details.
            </p>
            {/*start stars*/}
            <div id="professional-achievements" style={{ color: "black" }}>
              <div className="w3-container w3-light-gray">
                <div style={{ paddingTop: "1rem" }}>
                  <div className="w3-padding">
                    <h4>Technological Transformation in Business.</h4>
                    <p className="text-secondary fw-light">
                      click <b>SHOW ACHIEVEMENT</b> to reveal achievement
                      statement.
                    </p>
                  </div>
                  <Star1 />
                </div>

                <div style={{ paddingTop: "1rem" }}>
                  <div className="w3-padding">
                    <h4>Develop & Launch Marketing Campaigns.</h4>
                    <p className="text-secondary fw-light">
                      click <b>SHOW ACHIEVEMENT</b> to reveal achievement
                      statement.
                    </p>
                  </div>
                  <Star2 />
                </div>

                <div style={{ paddingTop: "1rem" }}>
                  <div className="w3-margin-top">
                    {" "}
                    <h4>Leadership & Profit Surge Against the Odds.</h4>
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
            <p>
              "Equipped with a diverse array of technical skills, I possess a
              versatile toolkit honed through hands-on experience and continuous
              learning. From proficiency in programming languages and frameworks
              to expertise in software development methodologies and tools, my
              technical acumen empowers me to tackle complex challenges and
              deliver innovative solutions effectively."
            </p>
            <div className="technical-skills-div d-flex flex-column bg-black text-white py-2">
              <h3 className="text-center w3-margin pt-4">
                Technical Proficiencies.{" "}
              </h3>
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
                      style={{ width: "130%" }}
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
                      style={{ width: "130%" }}
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
                      style={{ width: "130%" }}
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
                      style={{ width: "130%" }}
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
                        style={{ width: "130%" }}
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
                        style={{ width: "150%" }}
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
                        style={{ width: "130%" }}
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
                        style={{ width: "130%" }}
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
                        style={{ width: "130%" }}
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
                  <div className="d-flex flex-row justify-content-center">
                    <div className="d-flex flex-column">
                      <p className="text-white">DOWNLOAD A COPY OF MY RESUME</p>

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
                    </div>
                  </div>
                </Timeline>
              </Timeline>
            </div>
            <br></br>
          </div>
          {/*end technical skills*/}

          {/*end resume */}
        </div>
        {/*end profile*/}
      </div>
    </div>
  );
};

export default Home;
