import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
<div >

    <header>

      <div className="bg-black">
       <hr />

        <div className="row d-flex h-100 px-5 text-center position-relative ">
       
          <div className="col-sm-12 col-md-12 col-lg-12 text-white p-3 position-relative z-index-1">
          <header className="w3-container w3-center w3-padding-32 p-2 text-white" style={{fontFamily:'Raleway'}}>
        
            <h1 className="mt-4 mb-4"
         style={{color:'#00FFFF', fontSize:'4rem'}}>BLOG  <span style={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 3.5)",
             color: "#FDC5E8",}}>TITLE</span></h1>
            <p className="" style={{fontFamily:'Raleway'}}>
              Welcome to the blog of {" "}
              <span className="w3-tag" style={{ color: "black", backgroundColor:'#FDC5E8', textShadow: "2px 2px 4px #00FFFF", fontFamily:'Raleway'}}> <b>BRAND HERE</b>
              </span>
            </p>
            <Link to="/web-development">
                <button
                  type="button"
                  className="btn btn-outline-info bg-black btn-large m-1 px-2"
                  data-mdb-ripple-init
                >
                  <b>Popular Posts</b>
                </button>
              </Link>
            
          </header>  {/* end Header */}
          
          
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
