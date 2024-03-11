import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";
import { AiFillDatabase } from "react-icons/ai";
import { BsDatabaseLock } from "react-icons/bs";
import { GiGears } from "react-icons/gi";
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS


const AboutFinal = () => {

    return (
      <div>
        <div className="container-fluid py-4">
        <div className="w3-content w3-container w3-padding-32">
        <div className="row">
  <h1 className="fw-light">ABOUT ME</h1>
  <br />
  <h6 className="fw-light">"I'm Carol Wargo, and welcome to my corner of 
  the internet! Join me as I share insights into who I am professionally 
  and the years of experience that shape what I do."</h6>
  <hr />
  <br />
  <br />
  <br />
  <br />
  <p className="fw-light"><em>"My passion lies in utilizing creative design to drive 
    innovative solutions through technology. With a distinctive blend of 
    skills and experience, I am a seasoned full-stack 
    software developer and UX designer deeply committed to collaboration, 
    bringing together diverse perspectives to tackle challenges effectively. With over 20 years of 
    experience in business management & strategic development, I bring a wealth of knowledge and expertise to every 
    project I undertake."</em></p>
    </div>
    </div>
    
  
<div className="w3-content w3-container">

    <h3><b><i className=''></i>THINGS TO HIGHLIGHT:</b></h3>
<p className="py-2"><b>LEADERSHIP: </b>I excel in leadership roles and 
    collaborative environments, leveraging my strong interpersonal skills 
    to drive teams towards success. I firmly believe in the power of active 
    listening and value input from all team members, regardless of pay grade 
    or status.</p>
    <p className="py-2"><b>APPROACH:</b> My approach to problem-solving is 
    grounded in thorough research and 
    analysis, coupled with a keen eye for detail. I tackle
    challenges head-on and pride myself on finding solutions 
    that push the boundaries of possiblities.</p>
<p className="py-2"><b>BACKGROUND:</b> In addition to my technical skills, I have a strong background in 
    project management, ensuring that deadlines are met and objectives 
    are achieved efficiently and effectively.</p>
    <p className="py-2"><b>CULTURE:</b> I understand the importance 
    of clear communication and strive to foster a culture of inclusion, transparency 
    & accountability.</p>
    </div>
  </div>
 
 


{/**start technical proficiencies */}
<div className="container-fluid py-4 bg-white text-black w3-margin-top ">
<div className="w3-content w3-container w3-margin-top w3-margin-bottom">
<br />
<div className="row w3-margin-bottom">
  <br />
<h2><strong>SKILLS & PROFICIENCIES</strong></h2>
<hr />
    <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-large">
    <h5><strong>Technical Proficiencies</strong></h5>

<p className="w3-wide text-black" style={{fontSize:'1rem'}}><GiGears className="justify-content-center"/> Core Technologies</p>
  <div className="w3-light-grey shadow ">
    <div className="w3-container w3-padding-small w3-black w3-center shadow" style= {{width:"85%"}}>85%</div>
  </div>
  <br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><FaLaptopCode className="justify-content-center"/> Front-End Design</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"95%"}}>95%</div>
  </div>
  <br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><BsDatabaseLock  className="justify-content-center"/> Server-Side Development</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"80%"}}>80%</div>
  </div>
<br />
<p className="w3-wide text-black" style={{fontSize:'1rem'}}><HiOutlinePuzzlePiece className="justify-content-center"/> Full-Stack Integration</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
<br />
  <p className="w3-wide text-black" style={{fontSize:'1rem'}}><AiFillDatabase className="justify-content-center"/> Database Implementation</p>
  <div className="w3-light-grey shadow">
    <div className="w3-container w3-padding-small w3-black w3-center" style= {{width:"75%"}}>75%</div>
  </div>
 
    </div>    

    
    <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-large">
        <h5>Agile Practices</h5>
        <p>PROMOTE FLEXIBILITY, COLLABORATION, AND ABILITY TO RESPOND TO CHANGING REQUIREMENTS. </p>
    <h5><strong>Interpersonal Skills</strong></h5>
    <ul>
        <li>Effectively communicates, fostering customer and stakeholder engagement throughout the development process.</li>
        <li>Articulates ideas, recommendations, and findings clearly, concisely, and inclusively.</li>
        <li>Promotes and welcomes feedback from all stakeholders equally.</li>
        <li>Embraces a culture of continuous improvement through post-implementation evaluations and knowledge sharing.</li>
        <li>Adapts positively to change and embraces new challenges.</li>
        <li>Delivers functional software (Minimum Viable Product) with a focus on meeting user needs and hope of exceeding expectations.</li>
    </ul>
</div>
</div>
</div>
</div>
{/**End technical proficiencies */}

<div className="container-fluid py-4 w3-black">
{/**start experience count */}
<div className="w3-row w3-center w3-black w3-padding-16 w3-margin-bottom">
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">20<span style={{fontSize:'10px'}}>yrs</span> +</span><br />
    BUSINESS EXPERIENCE
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">100+</span><br />
    DESIGN PROJECTS
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">10+</span><br />
    LEADERSHIP ROLES
  </div>
  <div className="w3-quarter w3-section">
    <span className="w3-xlarge">100+</span><br />
    MEETINGS
  </div>
</div>
{/**end experience count */}
<br />
<hr />
<br />
      {/*start testimonials*/}
  
      <h2 className="w3-padding-24 text-center ">
          My Reputation.<br />
          <span className="text-center" style={{ fontSize: "16px" }}>
            {" "}
            What clients and collegues have to say.
          </span>
        </h2>
  <div className="row justify-content-center">
    <div className="col-lg-4 col-sm-12 p-4">
      <div class="card text-center shadow">
        <div class="card-header w3-margin-top"><h3><b>TESTIMONIAL.</b></h3></div>
        <div class="card-body ">
          <h5 class="card-title fw-lighter">Kind words from a colleague.</h5>
          <p className="card-text fw-lighter py-2" style={{fontSize:'14px'}}>
            <i>"Carol has a remarkable eye for all things creative. Her
            design sensibility is both distinctive and deeply personal. She pays
            attention to details that often go unnoticed by others, and she
            demonstrates the foresight to anticipate future needs and
            opportunities for growth..."</i> 
          </p>
        </div>
        <hr />
        <div class="fw-lighter py-3">February, 2023</div>
      </div>
    </div>

    <div className="col-lg-4 col-sm-12 p-4">
      <div class="card text-center shadow">
      <div class="card-header w3-margin-top"><h3><b>TESTIMONIAL.</b></h3></div>
        <div class="card-body">
          <h5 class="card-title fw-lighter">Recurring client testimonial.</h5>
          <p className="card-text fw-lighter py-2" style={{fontSize:'14px'}}>
            <br />
            <i>"Carol inspires you to consider the possibilities and embrace change
            with ease. She consistently goes above and beyond, delivering work
            that exceeds expectations and promises..."</i> 
          </p>
        </div>
        <hr />
        <div class="fw-lighter py-3">July, 2023</div>
      </div>
    </div>

    <div className="col-lg-4 col-sm-12 p-4">
      <div class="card text-center shadow">
      <div class="card-header w3-margin-top"><h3><b>TESTIMONIAL.</b></h3></div>
        <div class="card-body">
          <h5 class="card-title fw-lighter">New client testimonial.</h5>
          <p className="card-text fw-lighter py-2" style={{fontSize:'14px'}}>
            <i>"Carol has been an invaluable asset to transforming my brand's
            online presence. Taking my brand and propelling it to new heights, amassing an
            impressive reach and an unimaginable conversion rate..."</i> 
          </p>
        </div>
        <hr />
        <div class="fw-lighter py-3">December, 2023</div>
      </div>
    </div>
  </div>
        
  <br />
  <p className="text-center"><em>"Letters of reference in their entirety available apon request."</em></p>
 
</div>
 {/*end testimonials*/}
</div>     
    );
};

export default AboutFinal
