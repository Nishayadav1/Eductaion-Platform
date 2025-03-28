import React, { useState } from "react";

function Calendar() {
  const days = ["M", "T", "W", "Th", "F","Sat","S"];
  const [selectedDay, setSelectedDay] = useState(null);

  const handleClick = (day) => {
    setSelectedDay(day); // Set the clicked day as selected
  };

  return (
    <div className="flex gap-4 my-3">
      {days.map((day, index) => (
        <div
          key={index}
          onClick={() => handleClick(day)}
          className={`p-3 rounded-xl cursor-pointer transition-all ${
            selectedDay === day ? "bg-black text-white" : "bg-gray-200"
          } flex flex-col items-center`}
        >
          <span className="font-bold">{day}</span>
          <span className="text-sm text-gray-500">{14 + index}</span>
        </div>
      ))}
    </div>
  );
}

export default Calendar;
