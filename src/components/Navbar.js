import React, {useState} from 'react';
import {Link} from'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollToSection = (destination) => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    let scrollSection;

    if (destination === '#AboutSection') {
      scrollSection = document.getElementById('AboutSection');
    } else if (destination === '#ProjectSection') {
      scrollSection = document.getElementById('ProjectSection');
    } else if (destination === '#ContactSection') {
      scrollSection = document.getElementById('ContactSection');
    } else if (destination === '#ResumeSection') {
      scrollSection = document.getElementById('ResumeSection');
    } else if (destination === '#TopOfPage') {
      scrollSection = document.getElementById('TopOfPage');
    }

    const scrollToPosition = scrollSection.offsetTop - navbarHeight;
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth',
    });

    closeMobileMenu();
  };
  



  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            KEVIN C.
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li> */}
            <li className='nav-item'>
              <button className='nav-links nav-button' onClick={() => scrollToSection('#AboutSection')}>
                About Me
              </button>
            </li>
            <li className='nav-item'>
              <button className='nav-links nav-button' onClick={() => scrollToSection('#ProjectSection')}>
                Projects
              </button>
            </li>
            <li className='nav-item'>
              <button className='nav-links nav-button' onClick={() => scrollToSection('#ContactSection')}>
                Contact Me
              </button>
            </li>
            <li className='nav-item'>
              <button className='nav-links nav-button' onClick={() => scrollToSection('#ResumeSection')}>
                Resume
              </button>
            </li>                   
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar