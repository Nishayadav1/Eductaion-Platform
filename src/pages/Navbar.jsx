import React, { useState } from "react";
import LeftNav from "../components/LeftNav";
import MiddleNav from "../components/MiddleNav";
import RightNav from "../components/RightNav";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="px-6">
        <nav className="flex items-center justify-between h-20">
          <LeftNav />

        
          <div className="hidden md:flex flex-1 justify-center px-4">
            <MiddleNav />
          </div>

          <div className="hidden md:flex items-center">
            <RightNav />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <MiddleNav mobileView />
          </div>
          <div className="px-4 pt-2 pb-4 border-t border-gray-100">
            <RightNav mobileView />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

