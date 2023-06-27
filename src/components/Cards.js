import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import { Button } from './Button';

function Cards() {
    const scrollToSection = (destination) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    let scrollSection;

    if (destination === '#topOfPage') {
      scrollSection = document.getElementById('topOfPage');
    } else if (destination === '#ContactSection') {
      scrollSection = document.getElementById('ContactSection');
    }

    const scrollToPosition = scrollSection.offsetTop - navbarHeight;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className='cards' id="ProjectSection">
      <div className="cards-container">
      <h1>Check out some of my Bootcamp Projects!</h1>
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem 
            src={process.env.PUBLIC_URL + '/images/Taskmaster-large.png'}
            text="Project 3: Taskmaster - Gamified Task Management Application.  Accomplish real-world tasks to earn rewards and level up your character in a mini-game.  The more tasks you complete, the stronger your warrior can become!"
            label="Taskmaster"
            path="https://taskmaster-flex-be1c20d82d58.herokuapp.com/"
            />
            <CardItem 
            src={process.env.PUBLIC_URL + '/images/ONTRACK-Large.jpg'}
            text="Project 2: ONTRACK - Promoting a healthy lifestyle through data visualization.  Users can register to gain access and enter health and wellness data daily to view trends or progress towards a goal."
            label="ONTRACK"
            path="https://on-track.herokuapp.com/homepage"
            />
            <CardItem 
            src={process.env.PUBLIC_URL + '/images/SpaceProject.png'}
            text="Project 1: Spaceship Mission Tracker - Browse upcoming Space Launces by Launch Location, crew status, or Launch Service Provider.  Also find additional space related information via NASA and Moon Phase API's."
            label="Launch API"
            path="https://masterchef842.github.io/Spaceship-Mission-Tracker/"
            />
          </ul>
          <ul className="cards-items">
            <CardItem 
            src={process.env.PUBLIC_URL + '/images/placeholder-5.jpg'}
            text="Placeholder for future projects"
            label="Project 4"
            path="/projects"
            />
            <CardItem 
            src={process.env.PUBLIC_URL + '/images/placeholder-3-2.jpg'}
            text="Placeholder for future projects"
            label="Project 5"
            path="/sign-up"
            />            
          </ul>
        </div>
          <div className="back-to-top" style={{ margin: '0 auto' }}>
            <Button
              className='btns'
              buttonStyle='btn--outline--dark'
              buttonSize='btn--large--dark'
              onClick={() => scrollToSection('#ContactSection')}
              destination='#ContactSection'
            >
              Contact Me
            </Button>&nbsp;&nbsp;&nbsp;
            <Button
              className='btns'
              buttonStyle='btn--outline--dark'
              buttonSize='btn--large--dark'
              onClick={() => scrollToSection('#topOfPage')}
              destination='#topOfPage'
            >
              Back To Top
            </Button>       
            <br /><br />
          </div>       
      </div>
    </div>
  )
}

export default Cards