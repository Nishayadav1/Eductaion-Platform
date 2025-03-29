import React from "react";
import TimeTable from "./TimeTable";
const schedule = [
  { subject: "Educational Policy & Reforms ", time: "8:00-8:30", color: "bg-green-200" },
  { subject: "School Process Development Trainings ", time: "8:30-9:00", color: "bg-pink-200" },
  { subject: "Pedagogical Trainings ", time: "10:00-10:30", color: "bg-yellow-200" },
  { subject: "Subject Specific Trainings ", time: "12:00-12:30", color: "bg-purple-200" },
];
function Schedule() {
  return (
    <div className="w-full max-w-lg mx-auto">
        <TimeTable/>
      <h2 className="text-2xl font-bold">My Schedule</h2>
      <div className="mt-2 space-y-2 w-full">
        {schedule.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg 
              ${item.color} hover:bg-opacity-80 duration-300 ease-in-out`}
          >
            <span className="font-medium text-left flex-1">{item.subject}</span>
            <span className="text-gray-600 text-right">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Schedule;