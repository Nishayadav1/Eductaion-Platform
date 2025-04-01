import React, { useState } from "react";
import { FaArrowLeft, FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const ContactPage = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isFormValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-md">
      <div className="relative bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl p-10 border border-gray-300 shadow-orange-500/50 w-full max-w-lg text-center">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition duration-200"
        >
          <FaArrowLeft className="text-gray-800" />
        </button>
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Contact Our Experts</h1>
        <p className="text-gray-700 mb-6 text-lg">Have questions? Reach out, and we’ll be happy to assist you.</p>
        {isSubmitted ? (
          <p className="text-green-600 text-xl font-semibold">Message Sent Successfully!</p>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex items-center border rounded-lg p-4 bg-white focus-within:ring-2 focus-within:ring-orange-500">
              <FaUser className="text-gray-600 mr-3 text-lg" />
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full text-lg focus:outline-none" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex items-center border rounded-lg p-4 bg-white focus-within:ring-2 focus-within:ring-orange-500">
              <FaEnvelope className="text-gray-600 mr-3 text-lg" />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full text-lg focus:outline-none" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-start border rounded-lg p-4 bg-white focus-within:ring-2 focus-within:ring-orange-500">
              <FaCommentDots className="text-gray-600 mr-3 mt-1 text-lg" />
              <textarea 
                placeholder="Your Message" 
                className="w-full h-32 text-lg focus:outline-none" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`bg-[#FF914D] text-white text-lg px-5 py-3 rounded-3xl shadow-lg shadow-orange-500/50 hover:bg-[#FF7B32] transition duration-200 ease-in-out transform hover:scale-105 font-semibold ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isFormValid}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
