import React from "react";
import { FaArrowRight, FaBook } from "react-icons/fa";

const ProgressBar = ({ percentage, time }) => {
  return (
    <div className="relative p-4 rounded-2xl bg-purple-100 shadow-lg w-full h-[150px] flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <FaBook className="text-purple-600 text-lg" />
        <p className="font-semibold text-black">Learnings today</p>
      </div>

      <div className="flex items-center space-x-1">
        <span className="text-2xl font-bold">{percentage}%</span>
        <span className="text-lg font-semibold">/ {time} min</span>
      </div>

      <div className="relative w-full h-2 bg-gray-300 rounded-full">
        <div
          className="absolute top-0 left-0 h-2 bg-purple-500 rounded-full"
          style={{ width: `${percentage}%` }} 
        ></div>
        
        <div
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{ left: `calc(${percentage}% - 10px)` }} 
        >
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-md">
        <FaArrowRight className="text-black" />
      </div>
    </div>
  );
};

export default ProgressBar;
