import React, {useState} from "react";

import LocationView from "../../assets/images/About/LocationView.png";

const Contact = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
}


    return (
        <div>
          <div className="w3-section">
      <p><i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right "></i>Huntingtown, MD.</p>
      <p><i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: +443-771-1726</p>
      <p><i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: <a href="mailto:carolwargo.dev@gmail.com" alt='me'> email</a></p>
    </div>

    {/**Image of Location Map */}
    <img src={LocationView} alt="map" style={{width:"100%", margin:"32px 0"}} className="w3-image w3-greyscale" />
    <p>Lets get in touch. Send me a message:</p>
    <form action="" target="_blank">
    <p>
        <input 
        id="name"
        className="w3-input w3-padding-16 w3-border" 
        type="text" 
        placeholder="Name" 
        required name="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <label 
        htmlFor="name"
        >
        </label>
        </p>
      <p>
        <input 
        id="email"
        className="w3-input w3-padding-16 w3-border" 
        type="text" placeholder="Email" 
        required name="Email"
        value={email}
        />
         <label 
        htmlFor="email"
        >
        </label>
        </p>
      <p>
        <input 
        id="subject"
        className="w3-input w3-padding-16 w3-border" 
        type="text" 
        placeholder="Subject" 
        required name="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        />
 <label 
        htmlFor="subject"
        >
        </label>
        </p>
      <p>
        <input 
        id="message"
        className="w3-input w3-padding-16 w3-border" 
        type="text" 
        placeholder="Message" 
        required name="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
         <label 
        htmlFor="message"
        >
        </label>
        </p>
      <p>
        <button 
        id="submit"
        className="w3-button w3-light-grey w3-padding-large" 
        type="submit"
        
        onSubmit={() => alert('Thank you for your message!')}   
        onClick = {handleSubmit} 
        >
            <label 
            htmlFor="submit"
            >    
            </label>
          <i className="fa fa-paper-plane">
            </i> 
            SEND MESSAGE
        </button>
      </p>
    </form>

        </div>
    );
};

export default Contact;

