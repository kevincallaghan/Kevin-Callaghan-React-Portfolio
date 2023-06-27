import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import { Button } from './Button';

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

    const scrollToSection = (destination) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    let scrollSection;

    if (destination === '#topOfPage') {
      scrollSection = document.getElementById('topOfPage');
    } else if (destination === '#ResumeSection') {
      scrollSection = document.getElementById('ResumeSection');
    }

    const scrollToPosition = scrollSection.offsetTop - navbarHeight;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="form-container">
      <div className="form-wrapper" id="ContactSection">
        <div className="form-content-wrapper">
        <h1>Contact Kevin:</h1>
        {showThanks ? (
          <div className="success-message"><h2>Thank you for your message!</h2></div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-field">
              <label className="form-label">Name</label>
              <input type="text" name="user_name" placeholder="Please Enter Your Name" className="form-input" />
            </div>
            <div className="form-field">
              <label className="form-label">Email</label>
              <input type="email" name="user_email" placeholder="Please Enter Your Email Address" className="form-input" />
            </div>
            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea name="message" placeholder="Please Enter Your Message" className="form-textarea" />
            </div>
            <div className="button-container">
              <div className="button-wrapper">
                <input type="submit" value="Send Email" className="form-submit btn-outline-dark btn-large-dark" />
                <Button
                  className='btns'
                  buttonStyle='btn--outline--dark'
                  buttonSize='btn--large--dark'
                  onClick={() => scrollToSection('#ResumeSection')}
                  destination='#ResumeSection'
                >
                  My Resume
                </Button> 
                <Button
                  className='btns'
                  buttonStyle='btn--outline--dark'
                  buttonSize='btn--large--dark'
                  onClick={() => scrollToSection('#topOfPage')}
                  destination='#topOfPage'
                >
                  Back To Top
                </Button> 
              </div>
            </div>
          </form>
        )}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
