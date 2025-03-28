import React from 'react';

const WhatyouLookingFor = () => {
  return (
    <div className="p-6 mx-auto text-center bg-[#F5F7FB] ">
      <h2 className="text-3xl font-bold mb-4">What are you looking for?</h2>
      <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="flex  justify-center flex-wrap sm:flex-nowrap gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Lorem Heading 1</h3>
          <p className="text-lg text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-sm text-gray-400 mb-4">Additional information about the feature or service.</p>
          <button className="bg-black text-white px-6 py-3 rounded-lg">Get Started</button>
        </div>

        <div className="bg-[#1AB79D] p-6 rounded-xl text-white shadow-sm w-full md:w-1/3">
          <h3 className="text-2xl font-semibold mb-4">Lorem Heading 2</h3>
          <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-sm text-gray-200 mb-4">More details to help users understand the value.</p>
          <button className="bg-[#ED7C4F] text-white px-6 py-3 rounded-lg">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default WhatyouLookingFor;
