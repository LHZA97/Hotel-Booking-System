import React, { useState } from 'react';
import '../styles/SignupForm.css';
import FormSignup from './FormSignup';

const Signup = () => {
  const [ setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
     <video src='/videos/video-3.mp4' autoPlay loop muted />
      <div className='form-registercontainer'>
       
          <FormSignup submitForm={submitForm} />
       
      </div>
    </>
  );
};
export default Signup;

