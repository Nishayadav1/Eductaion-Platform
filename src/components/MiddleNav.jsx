import React from "react";
import { FaTachometerAlt, FaBook, FaCalendar, FaChartPie, FaCertificate } from "react-icons/fa";

const MiddleNav = ({ mobileView = false }) => {
  const navItems = [
    { icon: <FaTachometerAlt />, text: "Dashboard" },
    { icon: <FaBook />, text: "Courses" },
    { icon: <FaCalendar />, text: "Calendar" },
    { icon: <FaChartPie />, text: "Analytics" },
    { icon: <FaCertificate />, text: "Certificates" },
  ];

  return (
    <ul className={`font-medium ${mobileView ? "space-y-3" : "flex space-x-5"}`}>
      {navItems.map((item, index) => (
        <li
          key={index}
          className={`group relative flex items-center ${
            mobileView 
              ? "px-4 py-2.5 rounded-lg hover:bg-pink-50" 
              : "px-1 py-1"
          } cursor-pointer transition-all duration-300`}
        >
          <div className="flex items-center space-x-2">
            <span className="text-pink-500 group-hover:text-pink-600 transition-colors duration-300">
              {item.icon}
            </span>
            <span className="text-black group-hover:text-pink-600 group-hover:font-semibold text-base group-hover:text-lg transition-all duration-300">
              {item.text}
            </span>
          </div>
          
          {/* Optional underline effect on hover (desktop only) */}
          {!mobileView && (
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-300"></span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MiddleNav;