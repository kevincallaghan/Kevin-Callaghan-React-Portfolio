import React from 'react'
import './Resume.css';
import { Button } from './Button';
import resumePDF from '../assets/KevinCallaghanResume.pdf'

function Resume() {

  const scrollToSection = (destination) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    let scrollSection;

    if (destination === '#topOfPage') {
      scrollSection = document.getElementById('topOfPage');
    }

    const scrollToPosition = scrollSection.offsetTop - navbarHeight;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  };


  return (
    <>
      <div className="resume-container" id="ResumeSection">
        <div className="resume-wrapper">
          <div className="resume-header-container">
              <h1>Download My Resume</h1>
          </div>
          <div className="resume-content">
              <p>Thank you for taking a look at my portfolio website.  <a href={resumePDF} target="_blank" rel="noopener noreferrer">Click here to download a copy of my resume.</a></p>
          </div>
            <div className="button-wrapper">
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
      </div>
    </>
  )
}

export default Resume