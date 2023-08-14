import React from "react";
import { Link } from "react-router-dom";
import { fectUserRegister } from "../hooks/user/fectUserRegister";

export default function Register() {
  const { handleInputChange, handleSubmit } = fectUserRegister();

  return (
    <div className='flex flex-col md:gap-32 md:flex-row items-center justify-center h-screen font-poppins'>
      <div className='login md:mr-12'>
        <div className='mb-4 md:mb-6'>
          <img className='w-40 md:w-80' src='/asset/icons/bird.png' alt='Logo' />
        </div>
        <div className='mb-4 md:mb-6'>
          <img className='w-40 md:w-80' src='/asset/icons/tokped.png' alt='Tokopedia' />
        </div>
      </div>
      <div className='register mt-4 md:mt-0'>
        <div className='flex items-center mb-4'>
          <img className='w-8 mr-3' src='/asset/icons/bird.png' alt='Logo' />
          <h1 className='text-xl md:text-2xl text-gray-700'>Hi There !</h1>
        </div>
        <div className='mb-4'>
          <h2 className='text-gray-400'>Register first, you can explore more about us !</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='w-full md:w-400 mb-4'>
            <label htmlFor='username' className='block text-gray-600 font-semibold mb-2'>
              Username
            </label>
            <input placeholder='Input username...' onChange={handleInputChange} type='text' id='username' name='username' className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-400' />
          </div>
          <div className='w-full md:w-400 mb-4'>
            <label htmlFor='email' className='block text-gray-600 font-semibold mb-2'>
              Email
            </label>
            <input placeholder='Input your email...' onChange={handleInputChange} type='email' id='email' name='email' className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-400' />
          </div>
          <div className='w-full md:w-400 mb-4'>
            <label htmlFor='password' className='block text-gray-600 font-semibold mb-2'>
              Password
            </label>
            <input placeholder='Input password...' onChange={handleInputChange} type='password' id='password' name='password' className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-400' />
          </div>
          <div className='w-full md:w-400 mb-4'>
            <label htmlFor='urlPicture' className='block text-gray-600 font-semibold mb-2'>
              Url Profile
            </label>
            <input placeholder='Input your link profile...' onChange={handleInputChange} type='text' id='urlPicture' name='urlPicture' className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-400' />
          </div>
          <div className='register mb-4'>
            <button type='submit' className='w-full bg-green-500 font-semibold text-white rounded px-4 py-3 hover:bg-green-600'>
              Register
            </button>
          </div>
        </form>
        <div className='Register flex justify-center text-gray-700'>
          <div>
            <h1>Have an account?</h1>
          </div>
          <Link to='/'>
            <div>
              <button className='ml-2 font-semibold text-base text-green-500 hover:text-green-600'>Log in</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
