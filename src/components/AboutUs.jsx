import React from 'react';

const AboutUs = () => {
  return (
    <div className='bg-[#F5F7FB]'>
        <div className="p-12 bg-[#F5F7FB] max-w-4xl mx-auto">
     
     <div className="w-40 mx-auto bg-[#1BB49A] text-white px-8 py-3 rounded-lg -rotate-6 shadow-md relative">
       <span className="font-semibold text-2xl whitespace-nowrap">About Us</span>
     </div>

     
     <div className="mt-10">
       <p className="text-gray-700 text-2xl leading-relaxed">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam consequuntur, ratione illum quae officiis laudantium laborum ducimus perferendis architecto atque minus alias obcaecati quidem, perspiciatis aut voluptatibus nemo quam repellat!
       </p>
     </div>

     
     <div className="mt-8 p-8 flex justify-around">
       <div className="text-center">
         <h2 className="text-5xl font-extrabold text-black mb-4">100+</h2>
         <small className="text-xl text-gray-600">Courses</small>
       </div>
       <div className="text-center">
         <h2 className="text-5xl font-extrabold text-black mb-4">3k+</h2>
         <small className="text-xl text-gray-600">Training program conducted</small>
       </div>
       <div className="text-center">
         <h2 className="text-5xl font-extrabold text-black mb-4">4k+</h2>
         <small className="text-xl text-gray-600">workshop conducted (offline) </small>
       </div>
     </div>
   </div>
    </div>
  );
};

export default AboutUs;
