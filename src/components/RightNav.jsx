import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaUserCog, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import user from '../assets/user.ico';

const RightNav = ({ mobileView = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const rightIcons = [
    { icon: <FaCalendarAlt />, badge: false },
    { icon: <FaClock />, badge: true },
  ];

  return (
    <div className={`flex items-center ${mobileView ? "gap-4 pl-3" : "gap-3"}`}>
      {rightIcons.map((item, index) => (
        <div
          key={index}
          className="relative p-2 w-9 h-9 flex items-center justify-center bg-gray-50 rounded-lg cursor-pointer hover:bg-pink-100 transition-colors duration-200"
        >
          {item.icon}
          {item.badge && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full"></span>
          )}
        </div>
      ))}

      {/* Profile Dropdown */}
      <div className="relative">
        <img
          src={user}
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-pink-400 cursor-pointer hover:border-pink-500 transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Dropdown Menu */}
        {isOpen && (
          <div className={`absolute ${mobileView ? "left-0" : "right-0"} mt-2 w-48 bg-white shadow-lg rounded-lg py-1 z-50 border border-gray-100`}>
            <ul className="text-gray-700">
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 cursor-pointer">
                <FaUserCog className="text-pink-500" /> Settings
              </li>
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 cursor-pointer">
                <FaSignInAlt className="text-pink-500" /> Login
              </li>
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-pink-50 cursor-pointer">
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