import React from "react";
import logo from '../assets/book3.jpg';

const LeftNav = () => {
  return (
    <div className="flex-shrink-0">
      <img
        src={logo}
        alt="Logo"
        className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
      />
    </div>
  );
};

export default LeftNav;