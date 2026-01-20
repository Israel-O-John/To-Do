import { Todos } from "../App";

import { useContext, useState } from "react";

import rightIcon from "../assets/chevron-right.svg";
import leftIcon from "../assets/chevron left.svg";

const TODAY = new Date();
function Calendar() {
  const [year, setYear] = useState(TODAY.getFullYear());
  const [month, setMonth] = useState(TODAY.getMonth());

  const { months, monthsShort } = useContext(Todos);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const startOffset = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dayInLastMonth = new Date(year, month, 0).getDate();

  const todayDay = TODAY.getDate();
  const todayMonth = TODAY.getMonth();
  const todayYear = TODAY.getFullYear();

  const cells = [];

  // Empty cells before day 1
  for (let i = startOffset; i > 0; i--) {
    cells.push({ day: dayInLastMonth - i + 1, type: "prev", isToday: false });
  }

  // Numberd days
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push({
      day: day,
      type: "current",
      isToday: day === todayDay && month === todayMonth && year === todayYear,
    });
  }

  // After current month days
  const remainder = cells.length % 7;
  if (remainder !== 0) {
    const needed = 7 - remainder;
    for (let day = 1; day <= needed; day++) {
      cells.push({ day: day, type: "next", isToday: false });
    }
  }

  function handleNext() {
    if (month === 11) {
      setMonth(0);
      setYear((year) => year + 1);
    } else {
      setMonth((month) => month + 1);
    }
  }

  function handlePrev() {
    if (month === 0) {
      setMonth(11);
      setYear((year) => year - 1);
    } else {
      setMonth((month) => month - 1);
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-xl p-6 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <img
          src={leftIcon}
          alt="chevron left"
          onClick={handlePrev}
          className="cursor-pointer "
        />
        <p className="font-secondaryFont font-semibold text-base text-gray-700">
          {months[month]} {year}
        </p>
        <img
          src={rightIcon}
          alt="chevron right"
          onClick={handleNext}
          className="cursor-pointer "
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm w-[75%]">
          <p className="font-secondaryFont font-normal text-sm text-gray-900">
            {monthsShort[TODAY.getMonth()]} {TODAY.getDate()},{" "}
            {TODAY.getFullYear()}
          </p>
        </div>
        <p className="py-2 px-4 border border-gray-300 rounded-lg shadow-sm font-secondaryFont font-semibold text-sm text-gray-700">
          Today
        </p>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {days.map((day) => (
          <div
            key={day}
            className="font-secondaryFont text-center text-xs font-medium text-gray-700 "
          >
            {day}
          </div>
        ))}
        {cells.map((cell, index) => (
          <div
            key={index}
            className={`text-center py-1 px-1 rounded-3xl${
              cell.type !== "current"
                ? "font-secondaryFont text-xs text-gray-500 cursor-pointer"
                : ""
            } font-secondaryFont text-xs text-gray-700 cursor-pointer ${
              cell.isToday
                ? "text-xs font-secondaryFont font-medium text-white bg-button-blue-active"
                : ""
            }`}
          >
            {cell.day}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Calendar;
