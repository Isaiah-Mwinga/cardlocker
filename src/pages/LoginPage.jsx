import React from 'react';
import "../tailwind.css";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-center bg-cover relative bg-login-image">
      <div className="w-full md:w-80 flex flex-col items-center md:-mt-10">
        <img src="/src/images/Brand Logo.png" alt="Login" className="mb-5 w-1/2 md:w-full" />
        <div className="mb-5 w-full">
          <label className="block text-white mb-2 text-lg md:text-xl">Welcome back!</label>
        </div>
        <div className="mb-5 w-full">
          <label className="block text-gray-700 mb-1">Email</label>
          <input className="w-full p-2 rounded border-none bg-input-translucent" type="email" placeholder="" />
        </div>
        <div className="mb-20 w-full">
          <label className="block text-gray-700 mb-1">Password</label>
          <input className="w-full p-2 rounded border-none bg-input-translucent" type="password" placeholder="" />
        </div>
        <button className="font-integralcf-regular w-full p-2 rounded text-white bg-gradient-login-button hover:bg-gradient-login-button mb-5">Login</button>
        <p className="text-xs text-white">
          Forgot your password? <a href="/" className="text-blue-500 underline">Reset</a>
        </p>
      </div>
      <div className="absolute top-10 right-20 flex items-center space-x-2 cursor-pointer group">
          <span className="text-gray-500 group-hover:text-white">Sign Up</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500 group-hover:stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
      </div>
    </div>
  );
}

export default App;