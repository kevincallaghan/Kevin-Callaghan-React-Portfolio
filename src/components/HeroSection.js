import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    const scrollToSection = (destination) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    let scrollSection;

    if (destination === '#AboutSection') {
      scrollSection = document.getElementById('AboutSection');
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
    <div className='hero-container' id="topOfPage">
      <video src={process.env.PUBLIC_URL + '/videos/greenVideo.mp4'} autoPlay loop muted />
        <h1>KEVIN CALLAGHAN</h1>
        <p>WebDev in Training</p>
        <div className="hero-btns">
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => scrollToSection('#AboutSection')}
            destination='#AboutSection'
          >
            About Me
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => scrollToSection('#ProjectSection')}
            destination='#ProjectSection'
          >
            Projects
          </Button>
        </div>
      
    </div>
    </>
  )
}

export default HeroSection;