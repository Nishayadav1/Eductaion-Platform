import React from "react";
import { MoveUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center p-12 bg-[#F7EAE7] h-screen gap-8 relative overflow-hidden">
      <div className=" ml-20 max-w-2xl relative">
        <div className="absolute -top-0 -left-6 bg-[#F8D4C8] text-[#FF743B] px-8 py-3 rounded-lg -rotate-6 shadow-md">
          <span className="font-semibold text-lg">#1 Platform for Teachers</span>
        </div>

        <h1 className="text-6xl font-extrabold mb-6 mt-16 leading-tight">
          Empowering Educators for a {" "}
          <span className="text-[#FF743B]">Brighter Future</span>
        </h1>

        <p className="text-2xl mb-8 text-gray-700 leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quod unde hic magnam aut modi sunt, possimus eius cumque, quas
          delectus.
        </p>

        <div className="flex space-x-6">
          <Link  to="/signup" className="bg-[#1BB49A] text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-3  shadow-lg text-xl">
            <span>Get Started</span>
            <MoveUpRight size={24} />
          </Link>
          <button className="px-8 py-4 font-semibold flex items-center space-x-3 text-xl">
            <div className="bg-[#FF743B] p-3 rounded-full">
              <Play size={24} className="text-white" />
            </div>
            <span>How It Works</span>
          </button>
        </div>
      </div>

      <div className=" w-1/2 bg-[#F7EAE7] relative">
        <img
          src="/hero-image1.jpg"
          alt="Hero"
          className="w-full object-cover rounded-lg mix-blend-multiply"
        />
      </div>
    </section>
  );
};

export default HeroSection;
