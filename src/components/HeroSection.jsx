import React from "react";
import { MoveUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 bg-[#F7EAE7] min-h-screen gap-8 relative overflow-hidden">
     
      <div className="max-w-2xl text-center md:text-left relative">
        <div className="absolute -top-0 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-[#F8D4C8] text-[#FF743B] px-6 py-2 rounded-lg -rotate-6 shadow-md">
          <span className="font-semibold text-lg">#1 Platform for Teachers</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 mt-16 leading-tight">
          Empowering Educators for a{" "}
          <span className="text-[#FF743B]">Brighter Future</span>
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-gray-700 leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quod unde hic magnam aut modi sunt, possimus eius cumque, quas delectus.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
          <Link 
            to="/signup"
            className="bg-[#1BB49A] text-white px-8 py-4 rounded-full font-semibold flex items-center space-x-3 shadow-lg text-xl"
          >
            <span>Get Started</span>
            <MoveUpRight size={24} />
          </Link>
          <button className="flex items-center space-x-3 text-xl font-semibold">
            <div className="bg-[#FF743B] p-3 rounded-full">
              <Play size={24} className="text-white" />
            </div>
            <span>How It Works</span>
          </button>
        </div>
      </div>

     
      <div className=" hidden md:block md:w-1/2 ">
        <img
          src="/teacher.jpg"
          alt="Hero"
          className="w-full max-w-md md:max-w-none object-cover rounded-lg mix-blend-multiply"
        />
      </div>
    </section>
  );
};

export default HeroSection;
