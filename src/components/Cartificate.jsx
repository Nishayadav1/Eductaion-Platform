import React from "react";
import { FaGlobe, FaFlask, FaPencilAlt, FaBookOpen } from "react-icons/fa";

const categories = [
  { name: "Weekend Professional Development", icon: <FaGlobe />, color: "bg-gray-900 text-gray-300" },
  { name: "Special Education & Mental Health", icon: <FaFlask />, color: "bg-pink-500 text-pink-300" },
  { name: "Assessment & Data Analysis", icon: <FaBookOpen />, color: "bg-purple-500 text-purple-300" },
  { name: "Innovative Teaching & 21st Century Skills", icon: <FaPencilAlt />, color: "bg-yellow-500 text-yellow-300" },
];

function Cartificate() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-2xl mt-2 mb-4 font-bold">🎓 Certificate Training & Programs </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl p-2">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`flex items-center p-2 justify-center gap-3 w-full h-15 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${cat.color}`}
          >
            <span className="text-2xl bg-white p-2 rounded-full shadow-md">{cat.icon}</span>
            <span className="text-sm sm:text-base text-white text-center">{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cartificate;
