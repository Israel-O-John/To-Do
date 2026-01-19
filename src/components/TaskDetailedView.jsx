import { Todos } from "../App";

import Button from "./Button";

import closeIcon from "../assets/x-close.svg";
import calendarIcon from "../assets/calendar.svg";
import clockIcon from "../assets/clock icon.svg";
import { useContext } from "react";

function TaskDetailedView() {
  const { taskComponent, months, setTaskDetail, setCreateTask, selectedId } =
    useContext(Todos);

  const currentTask = taskComponent.find((task) => task.id === selectedId);

  const date = new Date(currentTask.id);

  function handleDelete() {
    // console.log("Love");
  }

  function handleEdit() {
    // console.log("Hate");
  }

  function handleClose() {
    setTaskDetail(false);
    setCreateTask(false);
  }

  return (
    <div className="w-full mt-auto bg-white flex flex-col gap-4 p-6 rounded-tr-3xl rounded-tl-3xl md:rounded-lg border border-gray-100 shadow-xl">
      <img
        src={closeIcon}
        alt="close icon"
        className="ml-auto cursor-pointer"
        onClick={handleClose}
      />
      <h3 className="text-lg font-bold text-gray-700">{currentTask.title}</h3>

      <div className=" pt-4">
        <p className="flex items-center gap-2 ">
          <span className="">
            <img src={calendarIcon} alt="calendar icon" />
          </span>
          {date.getDate()} {months[date.getMonth()]}, {date.getFullYear()}
        </p>
        <p className="flex items-center gap-2">
          <span>
            <img src={clockIcon} alt="clock icon" />
          </span>
          {currentTask.startTime} - {currentTask.completeTime}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Button handleDelete={handleDelete}>Delete</Button>
        <Button handleEdit={handleEdit}>Edit</Button>
      </div>
    </div>
  );
}
export default TaskDetailedView;
