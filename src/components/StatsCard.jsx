import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({ number, label, bgColor, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative p-4 ${bgColor} rounded-2xl shadow-md text-center text-black transition-all duration-300`}
    >
      {/* Circular Icon at the Top */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute -top-4 left-4 bg-white p-2 rounded-full shadow-md"
      >
        {icon}
      </motion.div>

      {/* Main Content */}
      <div className="pt-6">
        <h2 className="text-3xl font-bold transition-all duration-300 hover:text-pink-500">
          {number}
        </h2>
        <p className="text-lg transition-all duration-300 hover:text-gray-700">
          {label}
        </p>
      </div>
    </motion.div>
  );
};

export default StatsCard;
