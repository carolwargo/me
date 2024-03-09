import React from "react";
//import Volunteer from "../components/About/Volunteer.jsx";
import AboutFinal from "../../components/About/AboutFinal.jsx";
import LocationView from '../../assets/images/About/LocationView.png';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css'

export default function AboutPage() {
  return (
    <div>
      <main>
      <div
        className=" bg-light text-black p-5 "
        style={{
          paddingBottom: "4rem",
          paddingTop: "4rem",
        }}
      >
        <h1
          style={{
            fontFamily: "bellota text",
            fontSize: "4rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.75)",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          ABOUT ME{" "}
        </h1>

        <h5
          style={{
            fontFamily: "bellota text",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          Get to know a little, or a lot. You choose... <br></br>{" "}
          <strong>
            {" "}
            <a href="#philisophy-values">My FAMILY, PHILISOPHY & VALUES</a>
          </strong>
          ,{" "}
          <strong>
            {" "}
            <a href="#blessing-curse">MY BLESSING & MY CURSE</a>
          </strong>
          , and{" "}
          <strong>
            <a href="#community">GIVING BACK & GAINING MORE</a>{" "}
          </strong>{" "}
          -{" "}
        </h5>
        <p
          className="text-secondary  "
          style={{
            fontFamily: "bellota text",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          {" "}
          "<strong>Click the links above</strong> to jump to the section you
          want to view...
          <br></br>{" "}
          <strong>
            {" "}
            Follow the <span style={{ color: "red" }}>"Back"</span> &{" "}
            <span style={{ color: "blue" }}> "Next"</span> links
          </strong>{" "}
          at the bottom of each page to ensure nothing is missed! "
        </p>
      </div>
     
      <AboutFinal />
      <div className='row p-2 d-flex align-items-center'>
      <div className='col-md-4 flex-column justify-content-end align-items-center'>
      <div className="d-flex align-items-center justify-content-center">
    <h2 className=' justify-content-center align-items-center'>WHERE I'M LOCATED</h2>
    </div>
    <div className="d-flex align-items-center justify-content-center">
    <p className=' justify-content-center align-items-center'> 
    <em>Huntingtown, Maryland!</em></p>
   </div>
</div>
        <div className='col-md-6 justify-content-center align-items-center'>
        <img src={LocationView} alt="htown" className="w3-image w3-round" style={{width:"100%"}} ></img>
        </div>
        </div>
        </main>
        <footer className="w3-container w3-padding-48 text-center ">
        <NavLink to={"/about"}>
          <button className="w3-button w3-black w3-disabled w3-padding-medium">
          « Home
          </button>
        </NavLink>

        <NavLink to={"/portfolio"}>
          <button className="w3-button w3-black w3-padding-medium">
            Resume »
          </button>
        </NavLink>
      </footer>
    </div>
  );
}


