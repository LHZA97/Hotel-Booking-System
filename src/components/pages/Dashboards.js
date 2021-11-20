import React, { useState } from 'react';
import './Login.css';
import LoginSignup from './LoginSignup';
import LoginSuccess from './LoginSuccess';

const Dashboards = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        <img src="img/img-2.svg" alt="spaceship"
          className="form-img"/>       
           </div>
        {!isSubmitted ? (
          <LoginSignup submitForm={submitForm} />
        ) : (
          <LoginSuccess />
        )}
      </div>
    </>
  );
};
export default Dashboards;
