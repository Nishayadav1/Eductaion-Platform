import React from "react"
import ProgressCard from "../components/ProgressCard"
import Schedule from "../components/Schedule"
import Training from "../components/Training"
import Cartificate from "../components/Cartificate"
function RightSidePart() {
  return (
    <div className="bg-gray-100 min-h-screen p-4 flex justify-center items-center">
      <div className="bg-white p-6 rounded-3xl shadow-lg w-full max-w-6xl flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
          <Training />
        </div>
        <div className="w-full lg:w-3/4 flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProgressCard />
            <Schedule />
          </div>
          <Cartificate />
        </div>
      </div>
    </div>
);
}
export default RightSidePart;