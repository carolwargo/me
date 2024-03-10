import React, { useState } from "react";

export default function Star2() {
  const [showList, setShowList] = useState(false);

  function handleClick() {
    setShowList(prevShowList => !prevShowList); // Toggle the value
  }

  return (
   
    <div className="w3-container w3-padding-large" style={{fontFamily:'Raleway'}}>
    <div className="w3-padding">
      <h4>Develop & Launch Marketing Campaigns.</h4>
    <p className="text-secondary fw-light">click <b>SHOW ACHIEVEMENT</b> to reveal achievement statement.
   </p>
    </div>
   <button 
 className="w3-button w3-margin-bottom shadow bg-black w3-hover-opacity "
 style={{
   width: "100%",
   border: "none",
   color: "white",
      borderRadius: "0px",
      padding: "20px",  
    }}
      onClick={handleClick}>
        {showList ? 'CLOSE ACHIEVEMENT' : 'SHOW ACHIEVEMENT'}
      </button>
      {showList && (
        
      
        <div className="w3-light-gray w3-container w3-padding-large" style={{fontFamily:'Raleway'}}>
        <div className="w3-padding"> 
        <h4>Develop & Launch Marketing Campaigns.</h4>
        <p className="text-secondary fw-light">click <b>SHOW ACHIEVEMENT</b> to reveal achievement statement.
      </p>
      </div>
<ul className="">
            <li className="mx-2"><strong>Situation:</strong> Faced with a competitive market, I was tasked with creating marketing campaigns to attract potential buyers.</li>
            <li className="mx-2"><strong>Task:</strong> To develop and execute a comprehensive digital marketing strategy that would effectively showcase the property's unique selling points.</li>
            <li className="mx-2"><strong>Action:</strong> Conduct market research to identify demographics and buyer personas, design multi-channel digital campaigns that included social media advertising, email marketing, and search engine optimization to produce content highlighting features & benefits.</li>
            <li className="mx-2 w3-padding-bottom"><strong>Result:</strong> Campaigns yielded, on average, a 40% increase in traffic, generating hundreds of leads. Notably, traffic-driven leads contributed to 96% of closed sales.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
