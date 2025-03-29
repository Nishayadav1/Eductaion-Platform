import React from "react";
import StatsCard from "../components/StatsCard";
import ProgressBar from "../components/ProgressBar";
import CourseCard from "../components/CourseCard";
import { FaRegClock, FaBook, FaAward } from "react-icons/fa";
import Navbar from "./Navbar";
import RightSidePart from "../pages/RightSidePart";
import HeaderBar from "../components/Header";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <HeaderBar />
      <div className="p-4 md:p-6 space-y-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-3/5 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
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

            <div className="w-full flex justify-center">
              <ProgressBar percentage={58} time={28} />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <CourseCard title="Training" percentage={78} className="h-[7.5rem]" />
              <CourseCard title="Programs" percentage={82} className="h-[7.5rem]" />
              <CourseCard title="Certificates" percentage={90} className="h-[7.5rem]" />
            </div>

          </div>

          <div className="w-full lg:w-4/5 mt-6 lg:mt-0">
            <RightSidePart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
