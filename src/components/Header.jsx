import React from "react";
import { FaSearch } from "react-icons/fa";

function HeaderBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:px-6 px-4 py-3 gap-4 w-full mt-10">
      <h1 className="hidden lg:block text-3xl sm:text-4xl font-bold">Dashboard</h1>

      <div className="flex flex-wrap items-center justify-end gap-4 w-full md:w-auto">
        <div className="relative flex items-center w-full sm:w-80 md:w-96 lg:w-[28rem]">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-12 pr-4 py-2 rounded-full bg-white border-2 border-pink-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-md transition"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <button className="px-4 py-2 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 active:scale-95 transition">
            All
          </button>
          <button className="px-4 py-2 rounded-full border-2 border-pink-500 text-gray-700 font-semibold shadow-md hover:bg-pink-500 hover:text-white active:scale-95 transition">
            Trainings
          </button>
          <button className="px-4 py-2 rounded-full border-2 border-pink-500 text-gray-700 font-semibold shadow-md hover:bg-pink-500 hover:text-white active:scale-95 transition">
            Certificates
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
