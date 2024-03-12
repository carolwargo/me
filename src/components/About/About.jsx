import React from "react";
import LocationView from "../../assets/images/About/LocationView.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS


import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

export default function About() {
  
  return (
    <div className="about pb-2" id="about">

        <div className="w3-content w3-justify w3-text-black w3-padding-32">
          <h1 className="w3-text-black" id="tables">
            About me.{" "}
          </h1>
          <hr className="w3-opacity" />
          <p className="fw-light">
            "I'm Carol Wargo, and welcome to my corner of the internet! Join me
            as I share insights into who I am professionally and the years of
            experience that shape what I do."
          </p>
          <br />
          <p className="fw-light">
            <em>
              "My passion lies in utilizing creative design to drive innovative
              solutions through technology. With a distinctive blend of skills
              and experience, I am a seasoned full-stack software developer and
              UX designer deeply committed to collaboration, bringing together
              diverse perspectives to tackle challenges effectively. With over
              20 years of experience in business management & strategic
              development, I bring a wealth of knowledge and expertise to every
              project I undertake."
            </em>
          </p>
        </div>

        {/* start Forms grid */}
        <div className="container-fluid py-4 bg-white text-black w3-margin-top ">
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
            <h4 className="w3-text-black" id="tables">
              Things to highlight.{" "}
            </h4>
            <hr className="w3-opacity" />
            <h5>
              My focus, approach and commitment to cultivating a thriving
              workplace culture.
            </h5>
            <br />
            <p className="py-2">
              <b>LEADERSHIP: </b>I excel in leadership roles and collaborative
              environments, leveraging my strong interpersonal skills to drive
              teams towards success. I believe in the power of active listening
              and value input from all team members, regardless of pay grade or
              status.
            </p>
            <p className="py-2">
              <b>APPROACH:</b> My approach to problem-solving is grounded in
              thorough research and analysis, coupled with a keen eye for
              detail. I tackle challenges head-on and pride myself on finding
              solutions that push the boundaries of possiblities.
            </p>
            <p className="py-2">
              <b>BACKGROUND:</b> In addition to my technical skills, I have a
              strong background in project management, ensuring that deadlines
              are met and objectives are achieved efficiently and effectively.
            </p>

            <p className="py-2">
              <b>CULTURE:</b> I understand the importance of clear communication
              and strive to foster a culture of inclusion, transparency &
              accountability.
            </p>
          </div>
        </div>

        <div className="container-fluid py-4 bg-white text-black ">
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
              <h4 className="w3-text-black" id="tables">
                Technical Proficiencies.{" "}
              </h4>
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
                <FaLaptopCode className="justify-content-center" /> Front-End
                Design
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
                <BsDatabaseLock className="justify-content-center" />{" "}
                Server-Side Development
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
              <br />
              </div>
<br />
         
              <div className="container-fluid py-4 bg-white text-black w3-margin-top w3-margin-bottom w3-padding-32">
          <div className="w3-content w3-justify w3-text-black w3-padding-32">
             <h4 className="w3-text-black" id="tables">
                Agile practices.{" "}
              </h4>
              <hr className="w3-opacity" />
              <p>
                PROMOTE FLEXIBILITY, COLLABORATION, AND ABILITY TO RESPOND TO
                CHANGING REQUIREMENTS.{" "}
              </p>
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
                <li>
                  Adapts positively to change and embraces new challenges.
                </li>
                <li>
                  Delivers functional software (Minimum Viable Product) with a
                  focus on meeting user needs and hope of exceeding
                  expectations.
                </li>
              </ul>
            </div>
          </div>
          </div>
<br />
        <div className="container-fluid py-4 w3-black">
          {/**start experience count */}
          <div className="w3-row w3-center w3-black w3-padding-16 w3-margin-bottom">
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


        <div className="container-fluid py-4 bg-white text-black ">
        <div className="row p-5 d-flex align-items-center  w3-margin-top">
          <div className="col-md-4 flex-column justify-content-end align-items-center w3-margin-top">
            <div className="d-flex align-items-center justify-content-center">
              
              <h2 className=" justify-content-center align-items-center">
                WHERE I'M LOCATED
              </h2>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <p className=" justify-content-center align-items-center">
                <em>Huntingtown, Maryland!</em>
              </p>
            </div>
          </div>
          <div className="col-md-8 justify-content-center align-items-center">
            <img
              src={LocationView}
              alt="htown"
              className="w3-image w3-round"
              style={{ width: "100%" }}
            ></img>
          </div>
        </div>
        <div className="w3-content w3-justify w3-text-black w3-padding-16 w3-center w3-margin-bottom">
          <a href="/resume">
            <p className="w3-margin-bottom">
              Click to view my digital resume.
              <FaLongArrowAltRight className="w3-margin-left " />
            </p>
          </a>
        </div>
        <br />
        </div>

      </div>

  );
}

// export default About;