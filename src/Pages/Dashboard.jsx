import React from "react";
import StatsCard from "../components/StatsCard";
import ProgressBar from "../components/ProgressBar";
import CourseCard from "../components/CourseCard";
import { FaRegClock, FaBook, FaAward } from "react-icons/fa";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
    <Navbar/>
      <h1 className="text-5xl font-bold ml-7 mb-8">Dashboard</h1>
      <div className="p-4 md:p-6 space-y-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatsCard
            number={5}
            label="Certificates"
            bgColor="bg-green-200"
            icon={<FaAward className="text-green-500 text-xl" />}
          />
          <StatsCard
            number={12}
            label="Courses"
            bgColor="bg-orange-200"
            icon={<FaBook className="text-orange-500 text-xl" />}
          />
          <StatsCard
            number={40}
            label="Hours"
            bgColor="bg-purple-200"
            icon={<FaRegClock className="text-purple-500 text-xl" />}
          />
        </div>

        {/* Learning Progress */}
        <div className="w-full flex justify-center">
          <ProgressBar percentage={58} time={28} />
        </div>

        {/* Course Section - Increased Height */}
        <div className="grid grid-cols-1 gap-4">
          <CourseCard title="Training" percentage={78} className="h-48" />
          <CourseCard title="Programs" percentage={82} className="h-48" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
