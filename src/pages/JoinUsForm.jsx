import React, { useState } from "react";
import { motion } from "framer-motion";

export default function JoinUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    experience: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-[#F7EAE7] p-6"
    >
      <div className="relative w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden border-2  border-[#FF743B]">
       
        <img
          src="/form.png"
          alt="Form Background"
          className="w-full h-full object-cover hidden md:block"
        />

      
        <div className="md:absolute md:top-0 md:right-0  md:w-1/2  w-full h-full p-8 flex flex-col justify-center bg-white rounded-l-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4 text-[#FF743B]">
            Join Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 px-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#1CB399] rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#1CB399] rounded-lg"
            />
            <input
              type="text"
              name="subject"
              placeholder="Teaching Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#1CB399] rounded-lg"
            />
            <input
              type="text"
              name="experience"
              placeholder="Years of Experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full p-3 border border-[#1CB399] rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Tell us about yourself"
              className="w-full p-3 border border-[#1CB399] rounded-lg"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-[#FF743B] text-white rounded-lg hover:bg-[#1CB399] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
