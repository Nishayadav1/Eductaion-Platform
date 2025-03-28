import React from "react";
import { FaChalkboardTeacher, FaBookReader, FaGraduationCap } from "react-icons/fa";

const Services = () => {
  return (
    <section className="p-6 md:p-20 bg-[#F7EAE7] text-zinc-800">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-[#FF743B]">Our Services</h2>
      <p className="text-center mb-10 text-lg">
        We offer a range of services designed to empower educators and improve teaching outcomes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <FaChalkboardTeacher className="text-6xl text-[#FF743B] mb-4" />
          <h4 className="text-2xl font-semibold mb-2">Professional Development</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Workshops and seminars</li>
            <li>Online courses</li>
            <li>Skill enhancement programs</li>
          </ul>
          <button className="bg-[#FF743B] text-white font-semibold px-4 py-2 rounded-full">
            Learn More &rarr;
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <FaBookReader className="text-6xl text-[#FF3B7F] mb-4" />
          <h4 className="text-2xl font-semibold mb-2">Educational Resources</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Articles and videos</li>
            <li>Interactive tools</li>
            <li>Curriculum materials</li>
          </ul>
          <button className="bg-[#FF3B7F] text-white font-semibold px-4 py-2 rounded-full">
            Explore Resources &rarr;
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <FaGraduationCap className="text-6xl text-[#F7A07D] mb-4" />
          <h4 className="text-2xl font-semibold mb-2">Career Advancement</h4>
          <ul className="list-disc pl-6 mb-4">
            <li>Job search tools</li>
            <li>Networking events</li>
            <li>Certification programs</li>
          </ul>
          <button className="bg-[#F7A07D] text-white font-semibold px-4 py-2 rounded-full">
            Get Started &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;