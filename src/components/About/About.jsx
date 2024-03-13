import React from "react";
import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS


import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

export default function About() {
  
  return (
    <div>
<div>
        <div className="w3-content w3-justify w3-text-black w3-padding-32">
          <div>
          <h1 className="w3-text-black" > 
           <b>ABOUT ME.</b> 
          </h1>
          </div>
          <hr className="w3-opacity" />
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
        <div className="w3-container w3-content bg-white text-black">
         
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
      
          </div>
        </div>
   
</div>
    

  );
}

// export default About;