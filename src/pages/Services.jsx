import React from "react";
import { Link } from "react-router-dom";
import { FaChalkboardTeacher, FaBookReader, FaGraduationCap } from "react-icons/fa";

const Services = () => {
  return (
    <section className="bg-[#F7EAE7] text-zinc-800">
      <div className="relative">
        <img
          src="/header.png"
          alt="Services Hero"
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0  bg-opacity-60 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">
            Empowering Educators
          </h2>
        </div>
      </div>

      <div className="p-6 md:p-20">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-[#FF743B]">
          Our Services
        </h2>
        <p className="text-center mb-10 text-lg">
          We offer a range of services designed to empower educators and improve teaching outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <FaChalkboardTeacher className="text-6xl text-[#FF743B] mb-4 mx-auto" />
            <h4 className="text-2xl font-semibold text-center mb-4">Professional Development</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Workshops and seminars</li>
              <li>Online courses</li>
              <li>Skill enhancement programs</li>
            </ul>
            <button className="block w-full bg-[#FF743B] text-white font-semibold px-6 py-3 rounded-full text-lg transition hover:bg-[#e6642e]">
              Learn More &rarr;
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <FaBookReader className="text-6xl text-[#FF743B] mb-4 mx-auto" />
            <h4 className="text-2xl font-semibold text-center mb-4">Educational Resources</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Articles and videos</li>
              <li>Interactive tools</li>
              <li>Curriculum materials</li>
            </ul>
            <button className="block w-full bg-[#FF743B] text-white font-semibold px-6 py-3 rounded-full text-lg transition hover:bg-[#e6642e]">
              Explore Resources &rarr;
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <FaGraduationCap className="text-6xl text-[#FF743B] mb-4 mx-auto" />
            <h4 className="text-2xl font-semibold text-center mb-4">Career Advancement</h4>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Job search tools</li>
              <li>Networking events</li>
              <li>Certification programs</li>
            </ul>
            <Link to="/signup" className="block w-full bg-[#FF743B] text-white font-semibold px-6 py-3 rounded-full text-lg transition hover:bg-[#e6642e]">
              Get Started &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
