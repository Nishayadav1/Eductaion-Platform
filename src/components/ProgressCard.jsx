import React from "react";
import { FaPencilAlt } from "react-icons/fa";


function ProgressCard() {
  return (
    <>
    <div className="bg-pink-200 w-full h-[70%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-5 rounded-2xl flex flex-col items-center text-center shadow-md mx-auto">
      <h2 className="text-gray-700 font-bold text-lg">Progress</h2>
      <div className="relative w-full bg-gray-300 rounded-full h-2 my-2">
        <div className="bg-pink-500 h-2 rounded-full w-[78%]"></div>
      </div>
      <div className="text-right text-gray-600 font-semibold w-full">78%</div>
      <div className="flex justify-center my-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712105.png"
          alt="Robot"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-lg"
        />
      </div>
      <div className="flex justify-center gap-4">
        <button className="p-2 bg-white text-2xl rounded-full shadow-md">
          🔥
        </button>
        <button className="p-2 bg-white text-2xl rounded-full shadow-md">
          📚
        </button>
        <button className="p-2 bg-white text-3xl rounded-full shadow-md">
          <FaPencilAlt />
        </button>
      </div>
    </div>
    
    </>
  );
}

export default ProgressCard;