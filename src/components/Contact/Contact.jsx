import React from "react";
import LocationView from "../../assets/images/About/LocationView.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  return (

    <div >
      {/*start Aboutsection */}
      <div className="contact" id="contact">
      <div className="container-fluid py-2 bg-white text-black ">
      <div className="w3-content w3-justify w3-text-black w3-padding-32">
        <h1>CONTACT ME. </h1>
        <hr />
        <p>Thank you for visiting! </p>
        <p className="">
          {" "}
          <em>
            {" "}
            If you have any questions, inquiries, or just want to say hello, I'd
            love to hear from you!{" "}
          </em>
        </p>

        <div className="container">
          <h4>Contact Information.</h4>
          <div className="row">
            <div className="col-md-6">
              <p>
                <i className="fa fa-envelope fa-fw w3-xlarge w3-margin-right"></i>{" "}
                Email:{" "}
                <a href="mailto:carolwargo.dev@gmail.com" alt="me">
                  email
                </a>
              </p>
              <p>
                <i className="fa fa-phone fa-fw w3-xlarge w3-margin-right"></i>{" "}
                Phone: <a href="tel:+4437711726">+443-771-1726</a>
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <i className="fab fa-github fa-fw w3-xlarge w3-margin-right"></i>{" "}
                Phone: <a href="https://github.com/carolwargo">Github Page</a>
              </p>
              <p>
                <i className="fab fa-linkedin fa-fw w3-xlarge w3-margin-right"></i>{" "}
                Phone:{" "}
                <a href="https://www.linkedin.com/in/carol-wargo-35021baa/">
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
        </div>

        <br />
        {/**Image of Location Map */}
        <h4>Where I am Located. </h4>
        <p>
          <i className="fa fa-map-marker fa-fw w3-xlarge w3-margin-right "></i>
          Huntingtown, MD.
        </p>
        <img
          src={LocationView}
          alt="map"
          style={{ width: "100%", margin: "16px 0" }}
          className="w3-image w3-greyscale"
        />
      </div>
</div>
      {/*end Contact section */}
    </div>
    </div>
  );
};

export default Contact;

