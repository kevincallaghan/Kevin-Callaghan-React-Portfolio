import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <Link className='social-icon-link linkedin'
            to='https://www.linkedin.com/in/kevincallaghan22/'
            target='_blank'
            aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin'></i>
            </Link>
            <Link className='social-icon-link github'
            to='https://github.com/kevincallaghan'
            target='_blank'
            aria-label='github'
            >
              <i className='fab fa-github'></i>
            </Link>                                                
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer