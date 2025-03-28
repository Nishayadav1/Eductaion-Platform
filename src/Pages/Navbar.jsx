import React, { useState } from "react";
import LeftNav from "../components/LeftNav";
import MiddleNav from "../components/MiddleNav";
import RightNav from "../components/RightNav";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="max-w-screen w-full overflow-hidden flex items-center justify-between px-6 py-4 bg-white shadow-md relative">
{/* LeftNav (Logo) */}
      <LeftNav />

      {/* MiddleNav - Visible on Desktop, Hidden on Mobile */}
      <div className="hidden md:flex">
        <MiddleNav />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* RightNav - Hidden on Mobile */}
        <div className="hidden md:flex">
          <RightNav />
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="md:hidden p-3 bg-pink-100 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-pink-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes className="text-pink-500 text-lg" /> : <FaBars className="text-pink-500 text-lg" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 right-4 w-56 bg-white shadow-lg rounded-xl p-5 z-50 border border-pink-300 transition-all duration-500 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <MiddleNav />
        <div className="mt-4 border-t border-gray-200 pt-3">
          <RightNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;