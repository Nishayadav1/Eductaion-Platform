import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaDownload } from 'react-icons/fa';

const FooterLynkt = () => {
  return (
    <footer className="bg-[#F7EAE7] p-6 text-center rounded-2xl shadow-md ">
      <h2 className="text-2xl font-bold mb-4">Lynkt - Empowering Teachers</h2>
      <p className="text-gray-600 mb-4">Connecting teachers with resources and opportunities.</p>

      <div className="flex justify-center gap-4 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaFacebookF size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
          <FaInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
          <FaLinkedin size={24} />
        </a>
      </div>

      <div className="flex flex-col items-center mt-4">
        <button className="bg-[#1AB79D] text-white px-6 py-3 rounded-lg flex items-center gap-2">
          <FaDownload size={20} /> Download Our App
        </button>
        <p className="text-sm text-gray-500 mt-2">Available on iOS and Android</p>
      </div>

      <p className="text-sm text-gray-500 mt-4">&copy; 2025 Lynkt. All rights reserved.</p>
    </footer>
  );
};

export default FooterLynkt;
