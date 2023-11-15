import React from 'react';
import { Link } from 'react-router-dom';
import LoginSignUpButtons from './LoginSignUpButtons';
import BrandLogo from '../images/Brand Logo.png';

const LPNavBar = () => {
    return (
        <nav className="flex px-24 py-5 items-center justify-between bg-[#090A35] relative" style={{ height: '80px', boxShadow: '0px 4px 4px rgba(30, 161, 242, 0.3)' }}>
            {/* Logo Section */}
            <div className="flex items-center space-x-6 relative -mt-2 " style={{ marginLeft: '-20px', marginRight: '-18px' }}>
                <Link to="/"> {/* This Link component wraps the logo and points to the root path */}
                    <img
                        src={BrandLogo}
                        alt="Card Locker Logo"
                        style={{ width: '220px', height: '120px' }}
                    />
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex-grow flex justify-start items-center ml-24">
                <ul className="flex items-center text-white text-sm space-x-16">
                    <li><Link to="/home" className="hover:text-[#1EA1F2]">Claim Sales</Link></li>
                    <li><a href="#" className="hover:text-[#1EA1F2]">Raffles</a></li>
                    <li><a href="#" className="hover:text-[#1EA1F2]">Buy Backs</a></li>
                    <li><a href="#" className="hover:text-[#1EA1F2]">Live Streams</a></li>
                    <li><a href="#" className="hover:text-[#1EA1F2]">Social Feeds</a></li>
                    <li><a href="#" className="hover:text-[#1EA1F2]">Contact Us</a></li>
                </ul>
            </div>

            {/* Login and Sign Up */}
            <LoginSignUpButtons /> 
        </nav>
    );
}

export default LPNavBar;
