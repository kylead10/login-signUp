import React from 'react';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillFilePersonFill } from 'react-icons/bs';

const Login = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Sign Up</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <BsFillFilePersonFill className='icon' />
        <input type='text' placeholder='Your Name' />
      </div>
      <div className='inputs'>
        <MdEmail className='icon' />
        <input type='email' placeholder='Your Email' />
      </div>
      <div className='inputs'>
        <RiLockPasswordFill className='icon' />
        <input type='password' placeholder='Your Password' />
      </div>
      <div className='forgot-password'>
        Forgot Password? <span>Click Here!</span>
      </div>
      <div className='submit-container'>
        <div className='submit'>Sign Up</div>
        <div className='submit'>Login</div>
      </div>
    </div>
  );
};

export default Login;
