import React from "react";
import { FaMedal, FaChartLine, FaFileAlt } from "react-icons/fa";

function ProgressTracker() {
  return (
    <div className="bg-gradient-to-r mb-2 from-pink-100 to-purple-200 p-4 rounded-2xl shadow-lg w-full mt-6 text-center">
      <h3 className="text-gray-800 font-bold text-xl mb-4">Your Progress</h3>
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-yellow-400 bg-yellow-100 text-yellow-600 text-2xl shadow-md">
            <FaMedal />
          </div>
          <span className="text-xs mt-2 font-semibold text-gray-700">Wins</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-blue-400 bg-blue-100 text-blue-600 text-2xl shadow-md">
            <FaChartLine />
          </div>
          <span className="text-xs mt-2 font-semibold text-gray-700">Stats</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-green-400 bg-green-100 text-green-600 text-2xl shadow-md">
            <FaFileAlt />
          </div>
          <span className="text-xs mt-2 font-semibold text-gray-700">Logs</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressTracker;
