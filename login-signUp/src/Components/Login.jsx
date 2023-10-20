import React, { useState } from 'react';
import '../Components/Login.css';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsFillFilePersonFill } from 'react-icons/bs';

const Login = () => {
  const [action, setAction] = useState('Sign Up');

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <BsFillFilePersonFill className='icon' />
          <input type='text' placeholder='Name' />
        </div>
        <div className='input'>
          <MdEmail className='icon' />
          <input type='email' placeholder='Email' />
        </div>
        <div className='input'>
          <RiLockPasswordFill className='icon' />
          <input type='password' placeholder='Password' />
        </div>
      </div>
      <div className='forgot-password'>
        Forgot Password? <span>Click Here!</span>
      </div>
      <div className='submit-container'>
        <div className={action === 'Login' ? 'submit gray' : 'submit'}>
          Sign Up
        </div>
        <div style={{ margin: '13px' }}></div>
        <div className={action === 'Sign Up' ? 'submit gray' : 'submit'}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
