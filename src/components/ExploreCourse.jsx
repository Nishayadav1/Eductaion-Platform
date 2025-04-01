import React, { useState } from "react";
import { Search, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import courses from "../data/Courses";

const ExploreCourse = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCourses, setVisibleCourses] = useState(6);

  const handleCardClick = (course) => {
    navigate(
      `/course/${course.title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[()]/g, "")}`,
      { state: { course } }
    );
  };

  const handleSeeAllCategories = () => {
    setVisibleCourses((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisibleCourses(6);
  };

  return (
    <div className="bg-[#F5F7FB] w-full">
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative mt-8 flex justify-between items-center">
          <h1 className="text-4xl font-bold text-gray-800">Explore Our Course</h1>
          <div className="absolute -top-6 -left-5 w-32 py-2 bg-[#FF743B] text-white px-8 rounded-lg -rotate-6 shadow-md">
            <span className="font-semibold whitespace-nowrap">Our Course</span>
          </div>

          <div className="flex items-center space-x-2 bg-white p-2 rounded-full shadow-md">
            <input
              type="text"
              placeholder="Search courses"
              className="p-2 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="p-2 bg-[#1BB49A] rounded-lg text-white">
              <Search size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {courses.slice(0, visibleCourses).map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 w-full cursor-pointer hover:bg-[#1BB49A] hover:opacity-80 hover:text-white hover:scale-105"
              onClick={() => handleCardClick(course)}
            >
              <div className="relative">
                <img
                  src="/pattern.png"
                  alt="Course"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                  <Globe size={50} className="text-white bg-black bg-opacity-50 rounded-full p-1" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          {visibleCourses < courses.length ? (
            <button 
              onClick={handleSeeAllCategories} 
              className="px-6 py-3 bg-[#FF743B] text-white font-semibold rounded-lg">
              See All Categories
            </button>
          ) : (
            <button 
              onClick={handleShowLess} 
              className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg">
              Show Less
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExploreCourse;
