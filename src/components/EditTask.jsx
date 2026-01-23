import { Todos } from "../App";
import { useContext, useState } from "react";

import Button from "./Button";

import closeIcon from "../assets/x-close.svg";
import calendarIcon from "../assets/calendar.svg";
import clockIcon from "../assets/clock icon.svg";
import notificationBell from "../assets/bell-03.svg";

function EditTask() {
  const {
    taskComponent,
    selectedId,
    setCreateTask,
    setEditTasks,
    monthsShort,
    editedTask,
  } = useContext(Todos);
  const [selectedTask, setSeletedTask] = useState(
    taskComponent.filter((task) => task.id === selectedId)[0]
  );
  const [taskTitle, setTaskTitle] = useState(selectedTask.title);
  const [taskStartTime, setTaskStartTime] = useState(selectedTask.startTime);
  const [taskCompleteTime, setTaskCompleteTime] = useState(
    selectedTask.completeTime
  );

  function handleClose() {
    setCreateTask(false);
    setEditTasks(false);
  }

  function handleSave() {
    const taskUpdate = {
      title: taskTitle,
      startTime: taskStartTime,
      completeTime: taskCompleteTime,
      id: selectedId,
      day: selectedTask.day,
    };

    editedTask(taskUpdate);
    handleCancel();
  }

  function handleCancel() {
    setCreateTask(false);
    setEditTasks(false);
  }

  return (
    <div className="w-full md:w-full mt-auto bg-white flex flex-col gap-4 p-6 rounded-tr-3xl rounded-tl-3xl md:rounded-lg border border-gray-100 shadow-xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 font-secondaryFont">
          Edit Task
        </h3>
        <img
          src={closeIcon}
          alt="Close Icon"
          className="cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <div className="min-w-80 md:min-w-0 min-h-36 w-full">
        <textarea
          name="task-input"
          id="task-input"
          className="w-full py-3 px-[14px] text-gray-900 border border-gray-300 rounded-lg focus:outline-none"
          rows="5"
          placeholder="Create wireframe"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        ></textarea>
      </div>
      <div className="flex items-center justify-between ">
        <div className="task-inp">
          <p className="text-[10px]">
            {selectedTask.day.day} {selectedTask.day.month}{" "}
            {selectedTask.day.year}
          </p>
        </div>
        <div className="task-inp">
          <input
            type="time"
            className="text-[10px]"
            value={taskStartTime}
            onChange={(e) => setTaskStartTime(e.target.value)}
          />
        </div>
        <div className="task-inp">
          <input
            type="time"
            className="text-[10px]"
            value={taskCompleteTime}
            onChange={(e) => setTaskCompleteTime(e.target.value)}
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
        <Button handleCancel={handleCancel}>Cancel</Button>
        <Button handleSave={handleSave}>Save</Button>
      </div>
    </div>
  );
}
export default EditTask;
