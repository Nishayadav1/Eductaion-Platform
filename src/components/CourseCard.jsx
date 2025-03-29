import React from "react";

const CourseCard = ({ title, percentage, places }) => {
  return (
    <div className="relative p-6 rounded-xl h-[150px] shadow-lg overflow-hidden flex items-center space-x-4 bg-white">
      <div className="flex-1">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg text-gray-700">{places} Online Training with Experts</p>

        {/* Avatars */}
        <div className="flex items-center mt-2">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-10 h-10 rounded-full border-2 border-white -ml-2 first:ml-0" />
          <img src="https://randomuser.me/api/portraits/women/2.jpg" className="w-10 h-10 rounded-full border-2 border-white -ml-2 first:ml-0" />
          <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-10 h-10 rounded-full border-2 border-white -ml-2 first:ml-0" />
          <div className="w-10 h-10 bg-gray-300 text-xs flex items-center justify-center rounded-full -ml-2">+33</div>
        </div>
      </div>

      <div className="relative w-16 h-16">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
          <circle
            className="text-gray-300"
            strokeWidth="4"
            fill="none"
            strokeDasharray="100, 100"
            stroke="black"
            d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831"
          />
          <circle
            className="text-pink-500"
            strokeWidth="4"
            fill="none"
            strokeDasharray={`${percentage}, 100`} 
            strokeLinecap="round"
            stroke="hotpink"
            d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white text-sm font-bold rounded-full">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
