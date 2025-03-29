import React, { useState } from "react";

function Calendar() {
  const days = ["M", "T", "W", "Th", "F", "Sat"];
  const [selectedDay, setSelectedDay] = useState(null);

  const handleClick = (day) => setSelectedDay(day);

  return (
    <div className="flex justify-center gap-2 my-3">
      {days.map((day, index) => (
        <div
          key={index}
          onClick={() => handleClick(day)}
          className={`p-3 rounded-xl cursor-pointer transition-all flex items-center justify-center w-14 h-14 text-center text-sm font-bold ${selectedDay === day ? "bg-black text-white" : "bg-gray-200"}`}
        >
          {day} {14 + index}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
