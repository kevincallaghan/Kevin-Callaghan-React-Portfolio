import React from 'react';
import './About.css'
import { Button } from './Button';

function About() {
    const scrollToSection = (destination) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    let scrollSection;

    if (destination === '#topOfPage') {
      scrollSection = document.getElementById('topOfPage');
    } else if (destination === '#ProjectSection') {
      scrollSection = document.getElementById('ProjectSection');
    }

    const scrollToPosition = scrollSection.offsetTop - navbarHeight;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  };


  return (
  <>
    <div id="AboutSection"></div>
      <div className="about-container">
        <div className="about-wrapper">
        <div className="about-header-container">
          <img src='/images/Kevin.jpg' className='kevinPic'></img>
          <h1 className='aboutMe'>GET TO KNOW ME</h1>
        </div>
      <div className='about-text-wrapper'>
        <p className='about-text'>
      After earning a Bachelor's in Marketing and heading into the world of sales, I was given an opportunity to shift into the web development industry with a position where I provided client services and technical support to high profile law enforcement and government agencies. 
      <br /><br />
      During my time in this position I gained nearly a decade of experience in training clients to use custom web applications and I served as the middle-man between clients and the programming team to customize and create applications that met the client needs.
      <br /><br />
      In 2023 I made the decision to advance my career and fully dive into the web development industry by enrolling in the University of Texas Coding Bootcamp.  This portfolio serves as a sample of the projects completed during this course.
        </p>
        </div>
      <div className="back-to-top" style={{ margin: '0 auto' }}>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => scrollToSection('#ProjectSection')}
          destination='#ProjectSection'
        >
          View Projects
        </Button>&nbsp;&nbsp;&nbsp;
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => scrollToSection('#topOfPage')}
          destination='#topOfPage'
        >
          Back To Top
        </Button>       
        <br /><br />
      </div>
      </div>
    </div>
  </> 
  );
}

export default About;
