import { useState } from "react";

const TODAY = new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function MiniCalendar() {
  const [activeYear, setActiveYear] = useState(TODAY.getFullYear());
  const [activeMonth, setActiveMonth] = useState(TODAY.getMonth());

  const daysInMonth = new Date(activeYear, activeMonth + 1, 0).getDate();

  const calendarDays = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(activeYear, activeMonth, day);

    calendarDays.push({
      date,
      dayNumber: date.getDate(),
      weekDay: date.getDay(),
      isToday: date.toDateString() === TODAY.toDateString(),
    });
  }

  return (
    <div className="px-4 md:w-full ">
      <p className="text-xs text-gray-900 font-semibold pb-3">
        {months[activeMonth]} {activeYear}
      </p>
      <div className="flex gap-3 overflow-x-scroll">
        {calendarDays.map((day, index) => (
          <div
            className={`flex flex-col items-center gap-2 min-w-12  text-xs text-gray-700  py-2 px-3 border rounded-lg border-gray-300 hover:bg-button-blue-active hover:text-white ${
              day.isToday ? "text-white bg-button-blue-active" : "bg-white"
            }`}
            key={index}
          >
            <p>{daysShort[day.weekDay]}</p>
            <p>{day.dayNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MiniCalendar;
