import React from "react";
import useLogin from "../hooks/login";
import { Link } from "react-router-dom";

export default function Login() {
  const { email, password, error, handleLogin, setEmail, setPassword } = useLogin();

  return (
    <div className='flex flex-col md:flex-row md:gap-32 items-center justify-center h-screen font-poppins'>
      <div className='login md:mr-12'>
        <div className='mb-4 md:mb-6'>
          <img className='w-40 md:w-80' src='/asset/icons/bird.png' alt='Logo' />
        </div>
        <div className='mb-4 md:mb-6'>
          <img className='w-40 md:w-80' src='/asset/icons/tokped.png' alt='Tokopedia' />
        </div>
      </div>
      <div className='login mt-4 md:mt-0'>
        <div className='flex items-center mb-4'>
          <img className='w-8 mr-3' src='/asset/icons/bird.png' alt='Logo' />
          <h1 className='text-xl md:text-2xl text-gray-700'>Hi There !</h1>
        </div>
        <div className='mb-4'>
          <h2 className='text-gray-400'>Log in first you can explore more about us !</h2>
        </div>
        <div className='w-full md:w-400 mb-4'>
          <label htmlFor='email' className='block text-gray-600 font-semibold mb-2'>
            Email
          </label>
          <input
            placeholder='Input your email'
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-400'
          />
        </div>
        <div className='w-full md:w-400 mb-4'>
          <label htmlFor='password' className='block text-gray-600 font-semibold mb-2'>
            Password
          </label>
          <input
            placeholder='Input your password...'
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-400'
          />
        </div>
        <div className='login mb-4'>
          <button type='submit' onClick={handleLogin} className='w-full bg-green-500 font-semibold text-white rounded px-4 py-3 hover:bg-green-600'>
            Log In
          </button>
        </div>
        <div className='Register flex justify-center text-gray-700'>
          <div>
            <h1>Don’t have an account?</h1>
          </div>
          <Link to='/register'>
            <div>
              <button className='ml-2 font-semibold text-base text-green-500 hover:text-green-600'>Register</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
