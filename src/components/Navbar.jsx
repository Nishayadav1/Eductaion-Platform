import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`flex justify-between items-center p-4 shadow-lg shadow-black/20 text-zinc-700 md:px-20 fixed top-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-[#f2d3c8] text-white" : "bg-[#F7EAE7]"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="text-2xl font-bold">Lynkt</div>
      <ul className="flex space-x-6 text-lg">
        <li>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/" className="text-[#FF743B]">
              Home
            </Link>
          </motion.div>
        </li>
        <li>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/about">About</Link>
          </motion.div>
        </li>
        <li>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/services">Services</Link>
          </motion.div>
        </li>
        <li>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/solutions">Solutions</Link>
          </motion.div>
        </li>
        <li>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/contact">Contact</Link>
          </motion.div>
        </li>
      </ul>
      <div className="flex gap-2">
        <Link
          to="/joinus"
          className="bg-zinc-900 text-white px-4 py-2 rounded-full font-semibold"
        >
          Join Us
        </Link>

        <Link
          to="/login"
          className="bg-zinc-900 text-white px-4 py-2 rounded-full font-semibold"
        >
          Log in
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
