import React from "react";

const About = () => {
  return (
    <section className="p-6 md:p-20 bg-[#F7EAE7] text-zinc-800 ">
      <div className="flex md:flex-row items-center mb-10 relative">
        <div className="hidden md:block relative w-full md:w-1/2">
          <img
            src="/about1.jpeg"
            alt="Lynkt"
            className="w-1/2 rounded-lg shadow-lg"
          />
          <img
            src="/about2.jpeg"
            alt="Lynkt Overlay"
            className="w-1/2 rounded-lg shadow-lg absolute top-8 left-8 md:top-20 md:left-60"
          />
        </div>
        <div className="ml-0 md:ml-10 mt-6 md:w-1/2 md:mt-0">
          <h2 className="text-5xl font-extrabold italic text-black mb-4">
            About Us
          </h2>
          <p className="text-lg">
            Lynkt is a cutting-edge Teacher's Training Platform dedicated to
            bridging the gap in professional development for educators. It
            provides a comprehensive suite of tools and resources aimed at
            enhancing educator effectiveness, fostering professional growth, and
            improving educational outcomes.
          </p>
        </div>
      </div>

     
      <section className="p-6 md:mt-40 md:p-20 bg-[#F7EAE7] text-zinc-800">
        <h3 className="text-4xl text-center font-bold mb-10 text-[#FF743B]">
           Objectives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between border-l-4 border-[#1CB399]">
            <h4 className="text-2xl font-extrabold text-black mb-3">
              Improve Teaching Skills
            </h4>
            <p className="text-lg">
              Access a variety of tools to enhance teaching skills and stay
              updated with modern educational trends.
            </p>
          </div>

          
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between border-l-4 border-[#FF743B]">
            <h4 className="text-2xl font-extrabold text-black mb-3">
              Enhance Teaching Methods
            </h4>
            <p className="text-lg">
              Equip educators with innovative methods to boost student
              engagement and learning outcomes.
            </p>
          </div>

         
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between border-l-4 border-[#1CB399]">
            <h4 className="text-2xl font-extrabold text-black mb-3">
              Advance Career Opportunities
            </h4>
            <p className="text-lg">
              Get access to job search tools, networking, and certifications to
              elevate your teaching career.
            </p>
          </div>
        </div>

        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#FF743B]">
            <h4 className="text-2xl font-semibold mb-3 text-[#FF743B]">
              Strategies for Skill Improvement
            </h4>
            <ul className="list-disc pl-6 text-lg">
              <li>Regular assessment tools</li>
              <li>Access to expert knowledge base</li>
              <li>Professional development courses</li>
            </ul>
          </div>

       
          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#1CB399]">
            <h4 className="text-2xl font-semibold mb-3 text-[#1CB399]">
              Strategies for Teaching Methods
            </h4>
            <ul className="list-disc pl-6 text-lg">
              <li>Interactive lesson planning tools</li>
              <li>Best practice sharing</li>
              <li>Multimedia learning materials</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-[#FF743B]">
            <h4 className="text-2xl font-semibold mb-3 text-[#FF743B]">
              Strategies for Career Growth
            </h4>
            <ul className="list-disc pl-6 text-lg">
              <li>Job search assistance</li>
              <li>Certifications for skill validation</li>
              <li>Networking and mentorship programs</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
