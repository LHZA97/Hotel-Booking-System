import React from 'react';
import './styles/App.css';
import { Button } from './Button';
import './styles/HeroSection.css';

function HeroSection() {
  
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>WELCOME TO THE RESORTS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/signup'
        >
        SIGN UP
        </Button>
        <Button
          className='btns'   
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/login'
        >
        LOGIN
        <i className='far fa-play-circle' />
          </Button>
      </div>
    </div>
  );
}

export default HeroSection;
