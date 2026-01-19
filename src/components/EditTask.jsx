import { Todos } from "../App";
import { useContext, useState } from "react";

import Button from "./Button";

import closeIcon from "../assets/x-close.svg";
import calendarIcon from "../assets/calendar.svg";
import clockIcon from "../assets/clock icon.svg";
import notificationBell from "../assets/bell-03.svg";

function EditTask() {
  const { taskComponent, selectedId } = useContext(Todos);

  const selectedTask = taskComponent.filter((task) => task.id === selectedId);
  console.log(selectedTask);

  return (
    <div className="w-full md:w-full mt-auto bg-white flex flex-col gap-4 p-6 rounded-tr-3xl rounded-tl-3xl md:rounded-lg border border-gray-100 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 font-secondaryFont">
          Edit Task
        </h3>
        <img src={closeIcon} alt="Close Icon" className="" />
      </div>
      <div className="min-w-80 md:min-w-0 min-h-36 w-full">
        <textarea
          name="task-input"
          id="task-input"
          className="w-full py-3 px-[14px] text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
          rows="5"
          placeholder="Create wireframe"
        >
          {selectedTask.title}
        </textarea>
      </div>
      <div className="flex items-center justify-between *:py-[10px] *:px-4 *:border *:border-gray-300 *:flex *:items-center *:gap-3 *:rounded-lg *:w-[30%] md:*:min-w-0">
        <div>
          <img src={calendarIcon} alt="calendar icon" />
        </div>
        <div>
          {/* <img src={clockIcon} alt="clock icon" /> */}
          <p>{selectedTask.startTime}</p>
        </div>
        <div>
          {/* <img src={clockIcon} alt="clock icon" /> */}
          <p>{selectedTask.completTime}</p>
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
        <Button>Cancel</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
}
export default EditTask;
