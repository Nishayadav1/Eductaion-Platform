import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaUserCog, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import user from '../assets/user.ico'
const RightNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const rightIcons = [
    { icon: <FaCalendarAlt />, badge: false },
    { icon: <FaClock />, badge: true },
  ];

  return (
    <div className="flex items-center gap-4 relative">
      {rightIcons.map((item, index) => (
        <div
          key={index}
          className="relative p-3 w-10 h-10 bg-gray-100 rounded-lg cursor-pointer hover:bg-pink-300 transition-all duration-300 transform hover:scale-110"
        >
          {item.icon}
          {item.badge && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
          )}
        </div>
      ))}

      {/* Profile Dropdown */}
      <div className="relative">
        <img
          src={user} // Replace with actual user image
          alt="User"
          className="w-13 h-13 rounded-full border-2 border-pink-500 cursor-pointer transition-all duration-300 transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg py-2 transition-opacity duration-300">
            <ul className="text-gray-700">
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-pink-500 cursor-pointer transition-all duration-300 hover:scale-105">
                <FaUserCog className="text-pink-500" /> Settings
              </li>
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-pink-500 cursor-pointer transition-all duration-300 hover:scale-105">
                <FaSignInAlt className="text-pink-500" /> Login
              </li>
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-pink-500 cursor-pointer transition-all duration-300 hover:scale-105">
                <FaSignOutAlt className="text-pink-500" /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightNav;
