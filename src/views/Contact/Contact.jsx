import React from "react";
//import Header from "../components/Header/Header";
import MeWhite from "../../assets/images/Me/MeWhite.png";
//import LocationView from "../../assets/images/About/LocationView.png";

import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setName("");
    setEmail("");
    setMessage("");
  }


  return (
    <div className="contact" id="contact">
    <nav  className="w3-center shadow">
        <div className="w3-center w3-padding-16">
          <a href="/" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}} >Home</a>
          <a href="/about" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>About</a>
            <a href="/resume" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Resume</a>
            <a href="/portfolio" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Portfolio</a>
            <a href="/contact" className="w3-bar-item w3-button w3-text-grey w3-hover-black" style={{fontSize:'14px'}}>Contact</a>
          </div>
        </nav>
           
    <div    className="w3-container w3-content w3-padding-32 w3-text-grey" id="contact">
{/*end Contact section */}
      <header>
        <div className="container">
          <div className="row justify-content-center align-items-center">
          <h2 className="w3-jumbo">Contact</h2>
            <div className="w3-large w3-margin-bottom">
              <p>Thank you for visiting! </p>
              <p className="">
                {" "}
                <em>
                  {" "}
                  If you have any questions, inquiries, or just want to say
                  hello, I'd love to hear from you!{" "}
                </em>
              </p>
            </div>
            <div className="col-md-5">
              <img
                src={MeWhite}
                alt="htown"
                className="w3-image w3-round"
                style={{ width: "100%" }}
              ></img>
            </div>

            <div className="col-md-7 px-3">
              <div className="row w3-padding-24">
                <div className="col-5">
                  <div className="w3-large w3-margin-bottom ">
                    <span>
                      <i className="fa fa-user-circle fa-fw w3-hover-text-black w3-large w3-margin-right"></i>{" "}
                      Carol Wargo
                      <br />
                    </span>
                    <span>
                      <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-large w3-margin-right"></i>{" "}
                      Huntingown, MD
                      <br />
                    </span>
                  </div>
                </div>

                <div className="col-7">
                  <div className="w3-large w3-margin-bottom ">
                    <i className="fa fa-phone fa-fw w3-hover-text-black w3-large w3-margin-right"></i>{" "}
                    <a href="tel:443-771-1726"> Phone: 443-771-1726</a> <br />
                    <i className="fa fa-envelope fa-fw w3-hover-text-black w3-large w3-margin-right"></i>{" "}
                    <a href="mailto:carolwargo.dev@gmail.com">
                      {" "}
                      carolwargo.dev@gmail.com
                    </a>
                    <br />
                  </div>
                </div>
              </div>
              <div className="w3-large w3-margin-bottom">
                <p>
                  Feel free to send me a message below , or connect with me
                  through{" "}
                  <a href="https://wa.me/+14437711726" alt="whatsapp">
                    whatsapp
                  </a>
                  .
                </p>
              </div>

              <form action="/send-email" method="POST" target="_blank">
  <div className="w3-row-padding" style={{ margin: "0 -16px 8px -16px" }}>
    <div className="w3-half">
      <span>
        <input
          id="name"
          value={name}
          className="w3-input w3-border my-1"
          type="text"
          placeholder="Name"
          required
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name"></label>
      </span>
      <span>
        <input
          id="email"
          value={email}
          className="w3-input w3-border my-2"
          type="email"
          placeholder="Email"
          required
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email"></label>
      </span>
    </div>
    <div className="p-2 my-1 w3-half">
      <textarea
        id="message"
        value={message}
        className="w3-input w3-border"
        placeholder="Message"
        required
        name="message"
        rows="3"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <label htmlFor="message"></label>
      <button
        id="submit"
        className="w3-button w3-black w3-right w3-section"
        type="submit"
        onClick={handleSubmit}
      >
        <i className="fa fa-paper-plane"></i> SEND MESSAGE
      </button>
    </div>
  </div>
</form>

            </div>
          </div>
        </div>
      </header>
</div>

<footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-large" style={{ margin: "-24px" }}>

  <a href="/" className="w3-hover-opacity mx-1">Home </a>
  <a href="/about" className="w3-hover-opacity mx-1">About </a>
  <a href="/resume" className="w3-hover-opacity mx-1">Resume</a>
  <a href="/portfolio" className="w3-hover-opacity mx-1">Portfolio</a>
  <a href="/contact" className="w3-hover-opacity mx-1">Contact </a>
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
