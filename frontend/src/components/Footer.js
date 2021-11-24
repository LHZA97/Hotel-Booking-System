import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          </div>
          <div class='footer-link-items'>
            
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            </div>
          <div class='footer-link-items'>

          </div>
        </div>
      </div>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Tropical Resort
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Copyright © 2021</small>
          </div>
  );
}

export default Footer;
