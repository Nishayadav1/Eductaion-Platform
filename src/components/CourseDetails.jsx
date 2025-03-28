import React from "react";
import { useLocation } from "react-router-dom";

const CourseDetails = () => {
  const location = useLocation();
  const { course } = location.state || {};

  if (!course) {
    return <h2 className="text-2xl font-semibold text-center mt-10">Course not found.</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <p className="text-2xl font-semibold text-[#1BB49A]">{course.price}</p>
      <button className="mt-4 px-6 py-2 bg-[#1BB49A] text-white rounded-lg hover:bg-green-500">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseDetails;
