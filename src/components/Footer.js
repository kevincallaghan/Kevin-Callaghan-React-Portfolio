import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to='/' className='social-logo kevin'>
              KEVIN C.
            </Link>
          </div>
          <div className="social-icons">
            <Link className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='facebook'
            >
              <i className='fab fa-facebook-f'></i>
            </Link>
            <Link className='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='instagram'
            >
              <i className='fab fa-instagram'></i>
            </Link>
            <Link className='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='youtube'
            >
              <i className='fab fa-youtube'></i>
            </Link>
            <Link className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='twitter'
            >
              <i className='fab fa-twitter'></i>
            </Link>
            <Link className='social-icon-link linkedin'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin'></i>
            </Link>
            <Link className='social-icon-link github'
            to='/'
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