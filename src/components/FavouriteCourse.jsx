import React from "react";

const FavouriteCourse = () => {
  const categories = [
    "Science",
    "Mathematics",
    "English",
    "History",
    "Geography",
    "Physical Education",
  ];

  return (
    <div className="bg-[#F7EAE7] w-full py-20">
      <section className="max-w-7xl mx-auto p-6">
        <div className="relative text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">
            Choose Favourite Course from Top Category
          </h1>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 bg-[#1BB49A] text-white px-8 py-2 rounded-full -rotate-6 shadow-md ">
            <span className="font-semibold"> Categories</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img
                src={`/category-${index + 1}.jpg`}
                alt={category}
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800">
            See All Categories
          </button>
        </div>
      </section>
    </div>
  );
};

export default FavouriteCourse;
