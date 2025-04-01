import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLynkt = () => {
  return (
    <footer className="bg-[#F7EAE7] p-10 md:p-16 text-gray-800 rounded-t-2xl shadow-md">
      <hr className="py-2 text-gray-400" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-[#FF743B] mb-3">Lynkt</h2>
          <p className="text-gray-700">
            Empowering teachers with resources, training, and opportunities to
            excel in education.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#FF743B] mb-3">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-[#FF743B]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#FF743B]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/solutions" className="hover:text-[#FF743B]">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#FF743B]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#FF743B] mb-3">
            Connect With Us
          </h3>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          <button className="bg-[#FF743B] text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto md:mx-0">
            <FaDownload size={20} /> Download Our App
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Available on iOS and Android
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-600 text-center mt-10">
        &copy; 2025 Lynkt. All rights reserved.
      </p>
    </footer>
  );
};

export default FooterLynkt;
