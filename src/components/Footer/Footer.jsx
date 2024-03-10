import React from "react";  


function Footer() {

    return (
        <div>
          
        {/*start Footer */}
        <footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-large" style={{ margin: "-24px" }}>
  <a href="/">Home <i className="w3-hover-opacity mx-1">Icon</i></a>
  <a href="/about">About <i className="w3-hover-opacity mx-1">Icon</i></a>
  <a href="/resume">Resume <i className="w3-hover-opacity mx-1">Icon</i></a>
  <a href="/portfolio">Portfolio <i className="w3-hover-opacity mx-1">Icon</i></a>
  <a href="/contact">Contact <i className="w3-hover-opacity mx-1">Icon</i></a>
  <p className="w3-medium">
    Copyright: 
    <a href="/" target="_blank" className="w3-hover-text-green">
      &copy; 2024 Carol Wargo
    </a>
  </p>
</footer>
{/*end Footer */}
</div>



    );
}

export default Footer

