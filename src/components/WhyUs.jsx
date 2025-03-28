import React from "react";

const WhyUs = () => {
  return (
    <div className="bg-[#F7EAE7] w-full py-20">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="md:w-1/2">
          <img
            src="/hero-image.jpg"
            alt="Why Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 relative">
          <div className="absolute -top-8 left-0 bg-[#FF743B] text-white px-8 py-2 rounded-lg -rotate-6 shadow-md">
            <span className="font-semibold">Why Us</span>
          </div>

          <h1 className="text-6xl font-extrabold text-gray-800 mb-6 mt-8">
            Why Choose Our Platform
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            eros at justo faucibus vulputate vitae a eros. Integer vitae sem at
            nunc suscipit tincidunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>

          <button className="px-8 py-4 bg-[#1BB49A] text-white font-semibold rounded-full text-lg">
            Browse Courses
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
