import React from "react";
import logo from '../assets/book3.jpg'
const LeftNav = () => {
  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Logo"
        className="w-15 h-15 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
      />
    </div>
  );
};

export default LeftNav;
