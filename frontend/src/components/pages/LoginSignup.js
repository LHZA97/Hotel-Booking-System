import React from 'react';
import validate from './validateLoginInfo';
import useForm from './useForm';
import '../styles/LoginForm.css';
import {Link} from 'react-router-dom';

const LoginSignup = () => {
  const { handleLoginChange, Login, loginValues, loginErrors, message } = useForm(
    validate
  );

  return (
    <>
    <video src='/videos/video-3.mp4' autoPlay loop muted />
      <div className='form-container'>
      <form onSubmit={Login} className='form' noValidate>
      <p>{message.toUpperCase()}</p>
        <h1>
           Login your account 
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={loginValues.email}
            onChange={handleLoginChange}
          />
          {loginErrors.email && <p>{loginErrors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={loginValues.password}
            onChange={handleLoginChange}
          />
          {loginErrors.password && <p>{loginErrors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          Not have an account? Register <Link to={"/signup"}>here</Link>
        </span>
      </form>
    </div>
    </>
  );
};

export default LoginSignup;