import React from "react";
import { motion } from "motion/react";

const About = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };
  return (
    <section className="p-6 md:p-20 bg-[#FFD5EA] text-zinc-800 md:mt-20">
      <div className="flex  md:flex-row items-center mb-10 relative">
        <div className=" hidden md:block relative w-full md:w-1/2">
          <img 
            src="/about1.jpeg" 
            alt="Lynkt" 
            className="w-1/2  rounded-lg shadow-lg" 
          />
          <img 
            src="/about2.jpeg" 
            alt="Lynkt Overlay" 
            className="w-1/2  rounded-lg shadow-lg absolute top-8 left-8 md:top-20 md:left-60" 
          />
        </div>
        <div className="ml-0 md:ml-10 mt-6 md:w-1/2 md:mt-0">
          <h2 className="text-5xl font-extrabold italic text-black mb-4">About Us</h2>
          <p className="text-lg">
            Lynkt is a cutting-edge Teacher's Training Platform dedicated to bridging the gap in professional development for educators. It provides a comprehensive suite of tools and resources aimed at enhancing educator effectiveness, fostering professional growth, and improving educational outcomes.
          </p>
        </div>
      </div>



      <section className="p-6 md:mt-40 md:p-20 bg-[#FFD5EA] text-zinc-800">
      <h3 className="text-4xl text-center font-bold mb-10 text-[#FF3B7F]">User Objectives</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
          <h4 className="text-5xl font-extrabold text-black mb-4">Improve Teaching Skills</h4>
          <p className="text-lg">
            Provide resources and tools to help educators continuously enhance their teaching skills and stay updated with the latest educational trends.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1">
          <h4 className="text-2xl font-semibold mb-2 text-[#FF3B7F]">Strategies</h4>
          <ul className="list-disc pl-6">
            <li><strong>Assessment Tools:</strong> Track progress and identify improvement areas.</li>
            <li><strong>Knowledge Base:</strong> Access articles, videos, and research.</li>
            <li><strong>Professional Courses:</strong> Join workshops and skill enhancement programs.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1">
          <h4 className="text-5xl font-extrabold text-black mb-4">Enhance Teaching Methods</h4>
          <p className="text-lg">
            Equip educators with innovative methods to improve student engagement and learning outcomes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
          <h4 className="text-2xl font-semibold mb-2 text-[#FF3B7F]">Strategies</h4>
          <ul className="list-disc pl-6">
            <li><strong>Course Tools:</strong> Design syllabus and plan interactive lessons.</li>
            <li><strong>Best Practices:</strong> Share successful teaching strategies.</li>
            <li><strong>Interactive Resources:</strong> Use multimedia for engaging delivery.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
          <h4 className="text-5xl font-extrabold text-black mb-4">Advance Career Opportunities</h4>
          <p className="text-lg">
            Support educators in career advancement with job search tools and professional networking.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1">
          <h4 className="text-2xl font-semibold mb-2 text-[#FF3B7F]">Strategies</h4>
          <ul className="list-disc pl-6">
            <li><strong>Job Hunt:</strong> Resume builders and interview prep resources.</li>
            <li><strong>Certifications:</strong> Validate and enhance skills.</li>
            <li><strong>Networking:</strong> Connect with mentors and professionals.</li>
          </ul>
        </div>

      </div>

    </section>
    </section>
  );
};

export default About;
