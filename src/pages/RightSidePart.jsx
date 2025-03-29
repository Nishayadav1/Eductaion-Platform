import React from "react"
import ProgressCard from "../components/ProgressCard"
import Schedule from "../components/Schedule"
import Training from "../components/Training"
import Cartificate from "../components/Cartificate"
import ProgressTracker from "../components/ProgressTracker"

function RightSidePart() {
  return (
    <>
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-4 rounded-3xl shadow-lg w-full max-w-6xl flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
          <Training />
        </div>
        <div className="w-full lg:w-full flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ProgressCard />
              <ProgressTracker />
            </div>
            <Schedule />
          </div>
          <Cartificate />
        </div>
      </div>
    </div>
    </>
  );
}
export default RightSidePart;