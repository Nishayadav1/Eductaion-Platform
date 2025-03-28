import React from "react";
import { FaTachometerAlt, FaBook, FaCalendar, FaChartPie, FaCertificate } from "react-icons/fa";

const MiddleNav = () => {
  return (
    <ul className="font-bold flex flex-col md:flex-row md:space-x-6">
      {[
        { icon: <FaTachometerAlt />, text: "Dashboard" },
        { icon: <FaBook />, text: "Courses" },
        { icon: <FaCalendar />, text: "Calendar" },
        { icon: <FaChartPie />, text: "Analytics" },
        { icon: <FaCertificate />, text: "Certificates" },
      ].map((item, index) => (
        <li
          key={index}
          className="flex items-center space-x-2 cursor-pointer transition-all duration-300 transform hover:scale-110 hover:text-pink-500"
        >
          {item.icon} <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
};

export default MiddleNav;
