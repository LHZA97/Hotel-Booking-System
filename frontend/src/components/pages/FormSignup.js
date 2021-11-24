import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../styles/SignupForm.css';
import {Link} from 'react-router-dom';


const FormSignup = () => {
 
  const { handleRegisterChange, Register, values, errors, message } = useForm(
    validate
  );
 


  return (
    
      <form onSubmit={ Register} className='form' noValidate>
        <h1>
           Create your account by filling out the
          information below.
        </h1>
        <p>{message.toUpperCase()}</p>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your username'
            value={values.name}
            onChange={handleRegisterChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleRegisterChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleRegisterChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='confPassword'
            placeholder='Confirm your password'
            value={values.confPassword}
            onChange={handleRegisterChange}
          />
          {errors.confPassword && <p>{errors.confPassword}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Contact Number</label>
          <input
            className='form-input'
            type='number'
            name='contact'
            placeholder='Enter your contact number'
            value={values.contact}
            onChange={handleRegisterChange}
          />
        {errors.contact && <p>{errors.contact}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <Link to={"/login"}>here</Link>
        </span>
      </form>
    
  );
};

export default FormSignup;
