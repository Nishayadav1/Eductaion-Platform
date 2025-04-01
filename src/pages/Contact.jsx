import React from "react";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// Contact Information Component
const ContactInfo = () => {
  return (
    <div className="w-full md:w-1/3 bg-white/40 p-8 rounded-xl shadow-lg border border-gray-300 backdrop-blur-lg">
      <h3 className="text-xl font-semibold mb-6">Other Ways to Connect</h3>
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <a href="https://www.google.com/maps/place/123+Main+Street" target="_blank" rel="noopener noreferrer">
            <MapPin className="text-gray-700 cursor-pointer" />
          </a>
          <div>
            <p className="text-lg font-medium">Visit Us</p>
            <p>123 Main Street, Your City</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <a href="/chat" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="text-gray-700 cursor-pointer" />
          </a>
          <div>
            <p className="text-lg font-medium">Chat with Us</p>
            <p>Live Chat Available</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <a href="tel:+12345678901">
            <Phone className="text-gray-700 cursor-pointer" />
          </a>
          <div>
            <p className="text-lg font-medium">Call Us</p>
            <p>+1 (234) 567-8901</p>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold mt-6">Connect with us on Social Media</h3>
      <div className="flex flex-col space-y-4 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <FaFacebook className="text-gray-700 text-2xl cursor-pointer" />
          <span className="text-gray-700">Facebook</span>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <FaTwitter className="text-gray-700 text-2xl cursor-pointer" />
          <span className="text-gray-700">Twitter</span>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <FaInstagram className="text-gray-700 text-2xl cursor-pointer" />
          <span className="text-gray-700">Instagram</span>
        </a>
      </div>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  return (
    <div className="w-full md:w-2/3 bg-white/40 p-8 rounded-xl shadow-lg border border-gray-300 backdrop-blur-lg">
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <input
            type="text"
            className="w-full md:w-1/2 border border-black focus:border-black outline-none px-4 py-3 rounded-lg bg-transparent text-black placeholder-black"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            className="w-full md:w-1/2 border border-black focus:border-black outline-none px-4 py-3 rounded-lg bg-transparent text-black placeholder-black"
            placeholder="Last Name"
            required
          />
        </div>
        <div>
          <input
            type="text"
            className="w-full border border-black focus:border-black outline-none px-4 py-3 rounded-lg bg-transparent text-black placeholder-black"
            placeholder="Company Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            className="w-full border border-black focus:border-black outline-none px-4 py-3 rounded-lg bg-transparent text-black placeholder-black"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            className="w-full border border-black focus:border-black outline-none px-4 py-3 rounded-lg bg-transparent text-black placeholder-black"
            placeholder="Phone Number"
            required
          />
        </div>
        <div>
          <textarea
            className="w-full border border-black focus:border-black outline-none px-4 py-3 rounded-lg bg-transparent text-black placeholder-black"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="receiveInfo" className="w-4 h-4 text-black" />
          <label htmlFor="receiveInfo" className="text-black text-sm">
            I’d like to receive more information about Lynkt. I understand and agree to the {" "}
            <a href="/privacy-policy" className="text-orange-500 underline">
              privacy policy
            </a>.
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-60 px-4 py-3 bg-[#FF914D] text-white font-medium rounded-3xl shadow-md hover:bg-[#FF7B32] transition duration-200 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

// Main ContactUs Component
const Contact = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#F7EAE7] to-orange-200 p-10 space-y-10 md:space-y-0 md:space-x-10">
      <div className="w-full max-w-6xl h-full flex flex-col md:flex-row md:space-x-10">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
