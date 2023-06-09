import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

function ContactUs() {
  const form = useRef();

  //Set the state to show the form first
  const [showThanks, setShowThanks] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    //Update the state after the form submits to show the Thank You Message
    emailjs.sendForm('service_rox0zfc', 'template_gyeffz6', form.current, 'vrjo1axs3Rd5aIA1E')
      .then((result) => {
        console.log(result.text);
        setShowThanks(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="form-container">
      <div className="form-wrapper" id="ContactSection">
        <h1>Contact Kevin:</h1>
        {showThanks ? (
          <div className="success-message"><h2>Thank you for your message!</h2></div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-field">
              <label className="form-label">Name</label>
              <input type="text" name="user_name" className="form-input" />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input type="email" name="user_email" className="form-input" />
            </div>
            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea name="message" className="form-textarea" />
            </div>
            <input type="submit" value="Send" className="form-submit" />
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
