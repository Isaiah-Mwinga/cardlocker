import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import { BiRightArrowAlt } from "react-icons/bi";

const GetStartedButton = ({ text }) => {
  const customShadow = {
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.7)"
  };

  const gradientStyle = {
    background: "linear-gradient(to left, #5f217f, #0b1462)"
  };

  return (
    <a
      href=""
      style={customShadow}
      className="bg-[#080B3A] pl-8 text-white font-bold flex items-center justify-between border border-[#1F98EC] rounded-full w-56 h-14"
    >
      <span className="font-integralcf-extrabold text-sm transition-transform transform">{text}</span>
      <Link to="/login" style={gradientStyle} className="w-14 h-14 border border-[#1F98EC] rounded-full flex items-center justify-center hover:scale-110 transition-transform transform">
        <BiRightArrowAlt color="white" size="2em" />
      </Link>
    </a>
  );
};

export default GetStartedButton;
