import React from 'react';
import "../tailwind.css";

function SignUpPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-center bg-cover relative bg-login-image">
      <div className="w-full md:w-80 flex flex-col items-center md:-mt-10">
        <img src="/src/images/Brand Logo.png" alt="SignUp" className="mb-5 w-1/2 md:w-full" />
        <div className="mb-5 w-full">
          <label className="block text-white mb-2 text-lg md:text-xl">Join us!</label>
        </div>
        <div className="text-xs mb-4 w-full">
          <label className="block text-gray-700 mb-1">First Name</label>
          <input className="w-full p-2 rounded border-none bg-input-translucent text-white" type="text" placeholder="" />
        </div>
        <div className="text-xs mb-4 w-full">
          <label className="block text-gray-700 mb-1">Last Name</label>
          <input className="w-full p-2 rounded border-none bg-input-translucent text-white" type="text" placeholder="" />
        </div>
        <div className="text-xs mb-4 w-full">
          <label className="block text-gray-700 mb-1">Email</label>
          <input className="w-full p-2 rounded border-none bg-input-translucent text-white" type="email" placeholder="" />
        </div>
        <div className="text-xs mb-10 w-full">
          <label className="block text-gray-700 mb-1">Country</label>
          <select className="w-full p-2 rounded border-none bg-input-translucent text-white">
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <button className="font-integralcf-regular w-full p-2 rounded text-white bg-gradient-login-button hover:bg-gradient-login-button mb-5">Sign Up</button>
        <p className="text-xs text-white">
          Already have an account? <a href="/" className="text-blue-500 underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
