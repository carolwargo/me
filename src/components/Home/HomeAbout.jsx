import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
//import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS

const HomeAbout = () => {
  return (
    <div>
      <div className="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
    <h2>About</h2>
        <h2>"I'm Carol Wargo, and welcome to my digital domain!"</h2>
        <p className=" fw-light pb-2">
          "Join me as I share insights into who I am professionally and the
          years of experience that shape what I do."
        </p>

        <hr className="w3-opacity"/>
        <br />
    
    <h2>Technical Skills</h2>
 

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
          <HiOutlinePuzzlePiece className="justify-content-center" /> Full-Stack
          Integration
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
            className="w3-container w3-padding-small w3-black w3-center w3-margin-bottom"
            style={{ width: "75%" }}
          >
            75%
          </div>
        </div>

        <hr />
        <h3 className="w3-padding-24">
          <b>My Reputation.</b> <br />
          <span className="fw-bold" style={{ fontSize: "16px" }}>
            {" "}
            What clients and collegues have to say.
          </span>
        </h3>
      <br />
        <p style={{ fontFamily: "sans-serif" }}>
          {" "}
          <i>
            " Carol has been an invaluable asset to transforming my brand's
            online presence. In just 13 months, she took my brand-new social
            media account and propelled it to new heights, amassing an
            impressive reach and an unimaginable conversion rate... "
          </i>
        </p>
        <br />

        <p style={{ fontFamily: "sans-serif" }}>
          {" "}
          <i>
            "Carol possesses a remarkable eye for all things creative. Her
            design sensibility is both distinctive and deeply personal. She pays
            attention to details that often go unnoticed by others, and she
            demonstrates the foresight to anticipate future needs and
            opportunities for growth..."
          </i>
        </p>
        <br />

        <p style={{ fontFamily: "sans-serif" }}>
          {" "}
          <i>
            "Carol inspires you to consider the possibilities and embrace change
            with ease. She consistently goes above and beyond, delivering work
            that exceeds expectations and promises..."
          </i>
        </p>
        <br />
        <p>Letters of reference in their entirety available apon request.</p>
        <br />
        <hr />

        
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
      </div>

{/*end Footer */}
    </div>
  );
};

export default HomeAbout;
