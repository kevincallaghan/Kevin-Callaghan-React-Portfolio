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
              <Link to='#AboutSection' className='nav-links' onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='#ProjectSection' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Contact Me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>                   
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar