import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS

const HomeAbout = () => {
  return (
    <div>
            <div className="w3-content ">
            <h2>"I'm Carol Wargo, and welcome to my digital domain!"</h2>
       <p className="w3-center fw-light pb-2">"Join me as I share insights into who I am professionally 
  and the years of experience that shape what I do."</p>
 
  < hr className="px-5"/>
             <br />
              <h5>
                <strong>Technical Proficiencies</strong>
              </h5>

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
                  className="w3-container w3-padding-small w3-black w3-center w3-margin-bottom"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
          
         
            <div className="w3-row w3-center w3-black w3-padding-16 w3-section">
      <div className="w3-quarter w3-section">
        <span className="w3-xlarge">20+<span style={{fontSize:'10px'}}>yrs</span> </span><br/>
        EXPERIENCE
      </div>
      <div className="w3-quarter w3-section">
        <span className="w3-xlarge">100+</span><br/>
       PROJECTS DONE
      </div>
      <div className="w3-quarter w3-section">
        <span className="w3-xlarge">10+</span><br/>
        LEADER ROLES
      </div>
      <div className="w3-quarter w3-section">
        <span className="w3-xlarge">100+</span><br/>
       MEETINGS
      </div>
    </div>
    
    <h3 class="w3-padding-24">My Reputation</h3>

<p><span class="w3-large w3-text-black w3-margin-right">Chandler Bing.</span> Web Designer.</p>
<p>Jane Doe is just awesome. I am so happy to have met her!</p><br/>


<p><span class="w3-large w3-text-black w3-margin-right">Chris Fox.</span> CEO at Mighty Schools.</p>
<p>Jane Doe saved us from a web disaster.</p><br/>


<p><span class="w3-large w3-text-black w3-margin-right">Rebecca Flex.</span> CEO at Company.</p>
<p>No one is better than Jane Doe.</p><br/>

    </div>
    </div>

   
  );
};

export default HomeAbout;
