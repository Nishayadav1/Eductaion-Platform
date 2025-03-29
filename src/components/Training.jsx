import React, { useState } from "react";
import { FaBookOpen, FaSchool, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";

const sidebarItems = [
  { text: "Master Trainer Programs", icon: <FaBookOpen className="text-purple-500 w-10 h-10" /> },
  { text: "School Auditing Training", icon: <FaSchool className="text-blue-500 w-10 h-10" /> },
  { text: "Leadership Trainings", icon: <FaChalkboardTeacher className="text-green-500 w-10 h-10" /> },
  { text: "SQAAF Enabling Programs", icon: <FaGraduationCap className="text-red-500 w-10 h-10" /> },
  { text: "Pedagogical Trainings", icon: <FaChalkboardTeacher className="text-yellow-600 w-10 h-10" /> },

];

function Training() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index === clickedIndex ? null : index); 
  };

  return (
    <div className="flex flex-col gap-4">
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)} 
          className={`w-46 h-36 bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-5 text-center border 
            transition-transform transform hover:scale-105 hover:shadow-xl 
            ${clickedIndex === index ? "border-pink-800" : "border-pink-400"} // Darken border on click
            hover:border-pink-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-600 active:border-pink-700 
            duration-300 ease-in-out`}
        >
          <div className="transition-transform transform hover:scale-110 duration-300 ease-in-out">
            {item.icon}
          </div>
          <h3 className="text-md font-semibold mt-2 text-gray-800 hover:text-pink-600 transition-colors duration-300">
            {item.text}
          </h3>
          <a href="#" className="text-blue-600 font-medium mt-1 hover:text-indigo-700 transition-colors duration-300">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}

export default Training;