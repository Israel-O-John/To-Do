import { Todos } from "../App";

import Button from "./Button";
import closeIcon from "../assets/x-close.svg";
import calendarIcon from "../assets/calendar.svg";
import notificationBell from "../assets/bell-03.svg";
import { useContext, useEffect, useState } from "react";

function AddTask() {
  const [taskDetails, setTaskDetails] = useState("");
  const [startTime, setStartTime] = useState("10:30");
  const [endTime, setEndTime] = useState("21:30");
  const [taskDays, setTaskDays] = useState(new Date());

  const {
    setCreateTask,
    setTaskComponent,
    taskComponent,
    taskExists,
    monthsShort,
  } = useContext(Todos);

  const taskDay = {
    day: taskDays.getDate(),
    month: monthsShort[taskDays.getMonth()],
    year: taskDays.getFullYear(),
  };

  function handleAdd() {
    const newTask = {
      title: taskDetails,
      startTime,
      completeTime: endTime,
      id: new Date(),
      day: taskDay,
    };

    if (taskExists(newTask, taskComponent)) {
      alert("Task Already Exists");
      return;
    }

    setTaskComponent((tasks) => [newTask, ...tasks]);
    setTaskDetails("");
    setStartTime("10:30");
    setEndTime("21:30");
    setCreateTask(false);
  }

  function handleClose() {
    setCreateTask(false);
  }
  return (
    <div className="w-full  md:w-full mt-auto bg-white flex flex-col gap-4 p-6 rounded-tr-3xl rounded-tl-3xl md:rounded-lg border border-gray-100 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 font-secondaryFont">
          Add Task
        </h3>
        <img
          src={closeIcon}
          alt="Close Icon"
          onClick={handleClose}
          className="cursor-pointer"
        />
      </div>
      <div className="min-w-80 md:min-w-0 min-h-36 w-full">
        <textarea
          name="task-input"
          id="task-input"
          className="w-full py-3 px-[14px] text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
          rows="5"
          value={taskDetails}
          onChange={(e) => setTaskDetails(e.target.value)}
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <div className="task-inp">
          {/* <div className="w-4">
            <img src={calendarIcon} alt="calendar icon" className="w-full" />
          </div> */}
          <p className="text-[10px]">
            {taskDay.day} {taskDay.month}, {taskDay.year}
          </p>
        </div>
        <div className="task-inp">
          {/* <img src={clockIcon} alt="clock icon" /> */}
          <input
            type="time"
            className="text-[10px]"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className="task-inp">
          {/* <img src={clockIcon} alt="clock icon" /> */}
          <input
            type="time"
            className="text-[10px]"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={notificationBell} alt="Notification Bell" />
          <p>10 Minute before</p>
        </div>
        <div className="w-4 h-4">
          <img src={closeIcon} alt="close icon" className="w-full" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button handleClose={handleClose}>Cancel</Button>
        <Button handleAdd={handleAdd}>Add</Button>
      </div>
    </div>
  );
}
export default AddTask;
