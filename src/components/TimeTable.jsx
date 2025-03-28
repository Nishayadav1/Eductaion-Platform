import React, { useState } from "react";
function TimeTable() {
  const days = ["M", "T", "W", "Th", "F","Sat","S"];
  const [selectedDay, setSelectedDay] = useState(null);

  const handleClick = (day) => {
    setSelectedDay(day);
  };
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-3 w-full max-w-md mx-auto">
    {days.map((day, index) => (
      <div
        key={index}
        onClick={() => handleClick(day)}
        className={`p-3 rounded-xl cursor-pointer transition-all w-12 h-12 flex flex-col items-center justify-center text-center ${
          selectedDay === day ? "bg-black text-white" : "bg-gray-200"
        }`}
      >
        <span className="font-bold">{day}</span>
        <span className="text-sm text-gray-500">{14 + index}</span>
      </div>
    ))}
  </div>
  );
}

export default TimeTable;