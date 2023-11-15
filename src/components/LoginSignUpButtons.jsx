import React from 'react';
import { Link } from 'react-router-dom';

const LoginSignUpButtons = () => {
    return (
        <div className="flex items-center">
            <Link to="/login" className="text-white mr-10 font-integralcf-regular text-sm custom-button transform transition-transform hover:scale-110">
                Login
            </Link>
            <Link to="/signup" className="text-white mr- font-integralcf-regular border border-[#afafaf] rounded-full px-6 py-0.5 text-sm custom-button transform transition-transform hover:scale-110">
                Sign Up
            </Link>
        </div>
    );
}

export default LoginSignUpButtons;
