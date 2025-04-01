import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ContactPage from "./ContactPage";

const Solutions = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-gradient-to-r from-[#F7EAE7] to-orange-200 py-10 px-5 md:px-20">
      {/* Problem Section */}
      <div className="bg-white/50 backdrop-blur-lg shadow-lg rounded-xl p-8 mb-10 border border-gray-200 shadow-orange-400/50 w-full md:w-3/4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">The Problem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Manual fee collection is time-consuming and error-prone.", "Difficulty in tracking pending fees and generating reports.", "Lack of transparency for students and parents.", "Compliance and audit challenges."].map((problem, index) => (
            <div key={index} className="bg-red-100 border border-red-300 p-6 rounded-xl shadow-md flex items-center justify-center text-center shadow-red-400/50">
              <p className="text-red-900 text-base font-medium">{problem}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-white/50 backdrop-blur-lg shadow-lg rounded-xl p-8 mb-10 border border-gray-200 shadow-orange-400/50 w-full md:w-3/4">
        <h2 className="text-3xl font-bold text-black text-center mb-6">Our Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["Automated Fee Collection & Real-time Tracking", "Multiple Payment Options (UPI, Cards, Net Banking)", "Customizable Reports & Fee Reminders", "Student & Parent Portal for Transparency", "Secure & Compliant Transactions"].map((solution, index) => (
            <div key={index} className="bg-green-100 border border-green-300 p-6 rounded-xl shadow-md flex items-center justify-center text-center shadow-green-400/50">
              <p className="text-green-900 text-base font-medium">{solution}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-3/4">
        {["Automated Fee Reminders", "Installment & Scholarship Support", "Seamless Integration", "Multi-User Access", "Data Security"].map((feature, index) => (
          <div key={index} className="bg-white/50 backdrop-blur-lg shadow-md rounded-xl p-5 flex items-center gap-3 border border-gray-200 shadow-orange-400/50">
            <FaCheckCircle className="text-green-500 text-xl" />
            <p className="text-gray-800 font-medium">{feature}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <button
          onClick={() => setIsContactOpen(true)}
          className="bg-[#FF914D] text-white px-6 py-3 rounded-3xl shadow-lg shadow-orange-400/50 hover:bg-[#FF7B32] transition duration-200 ease-in-out transform hover:scale-105"
        >
          Talk to Our Experts
        </button>
      </div>

      {isContactOpen && <ContactPage onClose={() => setIsContactOpen(false)} />}
    </div>
  );
};

export default Solutions;
