import React from "react";
import { FaGlobe, FaFlask, FaPencilAlt, FaBookOpen } from "react-icons/fa";

const categories = [
  { name: "Weekend Professional Development Programs", icon: <FaGlobe />, color: "bg-gray-900 text-gray-300" },
  { name: "Special Education, Inclusivity, Mental Health & Counselling Trainings", icon: <FaFlask />, color: "bg-pink-500 text-pink-300" },
  { name: "Assessment & Data Analysis Trainings", icon: <FaBookOpen />, color: "bg-purple-500 text-purple-300" },
  { name: "Innovative Teaching and 21st Century Skills", icon: <FaPencilAlt />, color: "bg-yellow-500 text-yellow-300" },
];

function Cartificate() {
  return (
    <>
   <div className="flex justify-center items-center w-full">
   <h2 className="text-3xl font-bold text-gray-800 text-center sm:text-4xl md:text-3xl md:text-left">
          🎓 Certificate Programs
        </h2>
      </div>

      <div className="flex flex-col items-center my-6">
        <div className="flex flex-wrap gap-4 justify-center w-full max-w-3xl p-2">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`flex items-center justify-center gap-3 w-80 h-20 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105 ${cat.color}`}
            >
              <span className="text-3xl bg-white ml-3 p-3 rounded-full shadow-md">{cat.icon}</span>
              <span className="text-sm sm:text-base text-white text-center">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cartificate;
