import React, { useState } from 'react';
import logo from '../images/Brand Logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#080a37] p-4 flex justify-between items-center relative" style={{ boxShadow: '0 4px 6px -1px rgba(30, 161, 242, 0.5), 0 2px 4px -1px rgba(30, 161, 242, 0.06)' }}>
      <button className="ml- font-integralcf-regular text-sm custom-button menu-button" onClick={() => setMenuOpen(!menuOpen)}>⋮</button>
      
      {/* Slide-out menu */}
      <div className={menuOpen ? "mainMenuSlideout active" : "mainMenuSlideout"}>
      <div className="menu-top-section">
        <div className="menu-item-left">Menu Items 1</div>
        <div className="menu-item-right">
            <span className="cursor-pointer close-icon-mm" onClick={() => setMenuOpen(false)}>X</span>
        </div>
    </div>
        <div>Menu Item 2</div>
        <div>Menu Item 3</div>
      </div>

      <div className="logo-container">
          <img src={logo} alt="Brand Logo"/>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center">
        <button className="text-white mr-10 font-integralcf-regular text-sm custom-button">Login</button>
        <button className="text-white mr- font-integralcf-regular border border-[#afafaf] rounded-full px-6 py-0.5 text-sm custom-button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
