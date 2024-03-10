import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Donut from "../../assets/images/Breakfast/Donut.png";
import Pancake from "../../assets/images/Breakfast/Pancake.png";
import Bowl from "../../assets/images/Breakfast/Bowl.png";
import Pizza from "../../assets/images/Breakfast/Pizza.png";
import Popup from "../../assets/images/Popup.jpg";
import Sushi from '../../assets/images/Appetizers/Sushi.png';
import Cheese from '../../assets/images/Appetizers/Cheese.png';
import Mozza from '../../assets/images/Appetizers/Mozza.png';
import Flatbread from '../../assets/images/Appetizers/Flatbread.png';
import Hamburger from "../../assets/images/Food/Hamburger.png";
import Fish from "../../assets/images/Food/Fish.png";
import Tacos from "../../assets/images/Food/Tacos.png";
import Reuben from "../../assets/images/Food/Reuben.png";
import Sunset from "../../assets/images/Cocktails/Sunset.png";
import Bourbon from "../../assets/images/Cocktails/Bourbon.png";
import Margarita from "../../assets/images/Cocktails/Margarita.png";
import Raspberry from '../../assets/images/Cocktails/Raspberry.png';


const Restaurant = () => {
  // Function to open sidebar


  return (
    <div>
      <nav  className="w3-center shadow">
        <div className="w3-center w3-padding-16">
          <a href="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}} >Home</a>
          <a href="/about" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>About</a>
            <a href="/resume" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Resume</a>
            <a href="/portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Portfolio</a>
            <a href="/contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Contact</a>
          </div>
        </nav>
           
      

      {/**start CONTENT */}
      <div className="w3-center w3-padding-32">
     
          <img src={Popup} alt="popup"  className='w3-center mt-5' style={{maxWidth:'100%vw'}}/>
       

      <div

        className="w3-main w3-content w3-padding-64 w3-margin-bottom "
        style={{  maxWidth: "1200px;margin-top:100px" 
        }}
      >
     

<h6> New menu & location everytime. </h6>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est cupiditate adipisci similique nesciunt molestias ducimus architecto voluptas eveniet voluptates iure! Deserunt molestias quo libero earum tempora atque quia beatae vero?</p>
<h6>  NEXT APPEARANCE</h6>
<i className="far fa-calendar-alt"></i> <span>September 14, 2021</span>
<br />
<br />
<hr/>




        <h1 className="text-center w3-margin-top w3-margin-bottom">BREAKFAST MENU</h1>
        <div className="w3-row-padding w3-padding-16 w3-center" id="food">
          <div className="w3-quarter">
            <img
              src={Pizza}
              alt="Pizza"
              style={{ width: "100%" }}
            />
            <h3>Pizza</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div className="w3-quarter">
            <img
              src={Bowl}
              alt="bowl"
              style={{ width: "100%" }}
            />
            <h3>Bowl</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div className="w3-quarter">
            <img
              src={Donut}
              alt="donut"
              style={{ width: "100%" }}
            />
            <h3>Donuts</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div className="w3-quarter">
            <img
              src={Pancake}
              alt="pancake"
              style={{ width: "100%" }}
            />
            <h3>Pancakes</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
        </div>
        {/**end first grid */}



  {/**start 2nd grid */}
  <div class="w3-row-padding w3-padding-16 w3-center">
          <div class="w3-quarter">
            <img
              src={Sunset}
              alt="sunset"
              style={{ width: "100%" }}
            />
            <h3>Lorem</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div class="w3-quarter">
            <img
              src={Bourbon}
              alt="bourbon"
              style={{ width: "100%" }}
            />
            <h3>Lorem</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div class="w3-quarter">
            <img
              src={Margarita}
              alt="margarita"
              style={{ width: "100%" }}
            />
             <h3>Lorem</h3>
             <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div class="w3-quarter">
            <img
              src={Raspberry}
              alt="raspberry"
              style={{ width: "100%" }}
            />
           <h3>Lorem</h3>
           <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
        </div>
        {/**end 2nd grid */}



            {/**start 2nd grid */}
            <div class="w3-row-padding w3-padding-16 w3-center">
          <div class="w3-quarter">
            <img
              src={Sushi}
              alt="sushi"
              style={{ width: "100%" }}
            />
            <h3>Lorem</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div class="w3-quarter">
            <img
              src={Cheese}
              alt="cheese"
              style={{ width: "100%" }}
            />
            <h3>Lorem</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div class="w3-quarter">
            <img
              src={Mozza}
              alt="mozza"
              style={{ width: "100%" }}
            />
             <h3>Lorem</h3>
             <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div class="w3-quarter">
            <img
              src={Flatbread}
              alt="flatbread"
              style={{ width: "100%" }}
            />
           <h3>Lorem</h3>
           <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
        </div>
        {/**end 2nd grid */}
    

        <div class="w3-row-padding w3-padding-16 w3-center" id="food">
          <div class="w3-quarter">
            <img
              src={Reuben}
              alt="Sandwich"
              style={{ width: "100%" }}
            />
            <h3>Lorem</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div class="w3-quarter">
            <img
              src={Hamburger}
              alt="burger"
              style={{ width: "100%" }}
            />
            <h3>Lorem</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div class="w3-quarter">
            <img
              src={Fish}
              alt="fish"
              style={{ width: "100%" }}
            />
            <h3>Lorem</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
          <div class="w3-quarter">
            <img
              src={Tacos}
              alt="tacos"
              style={{ width: "100%" }}
            />
            <h3>Once Again, Robust Wine and Vegetable Pasta</h3>
            <p>
              Just some random text, lorem ipsum text praesent some ipsum
              lipsum.
            </p>
          </div>
        </div>
        {/**end first grid */}
        </div>
        {/**start pagination*/}
        <div className="w3-center w3-padding-32">
          <div className="w3-bar">
            <a href="/Lunch" className="w3-bar-item w3-button w3-hover-black">
              «
            </a>
            <a href="/Apps" className="w3-bar-item w3-black w3-button">
              1
            </a>
            <a href="Cocktails" className="w3-bar-item w3-button w3-hover-black">
              2
            </a>
            <a href="/Lunch" className="w3-bar-item w3-button w3-hover-black">
              3
            </a>
            <a href="/Restaurant" className="w3-bar-item w3-button w3-hover-black">
              4
            </a>
            <a href="/Restaurant" className="w3-bar-item w3-button w3-hover-black">
              »
            </a>
          </div>
        </div>
        {/**end pagination*/}


        <hr/>



      </div>
      {/*start Footer */}
      <footer className="w3-container w3-padding-48 text-center">
  <NavLink to={"/portfolio"}>
    <button className="w3-button w3-black w3-disabled w3-padding-small">
      « Back to Portfolio
    </button>
  </NavLink>
  <br />
</footer>

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
};

export default Restaurant;
