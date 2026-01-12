import Button from "./Button";

import closeIcon from "../assets/x-close.svg";
import calendarIcon from "../assets/calendar.svg";
import clockIcon from "../assets/clock icon.svg";

function TaskDetailedView() {
  return (
    <div className="w-full mt-auto bg-white flex flex-col gap-4 p-6 rounded-tr-3xl rounded-tl-3xl md:rounded-lg border border-gray-100 shadow-xl">
      <img src={closeIcon} alt="close icon" className="ml-auto" />
      <h3 className="text-lg font-bold text-gray-700">Create Wireframe</h3>

      <div className=" pt-4">
        <p className="flex items-center gap-2 ">
          <span className="">
            <img src={calendarIcon} alt="calendar icon" />
          </span>
          20th January, 2023
        </p>
        <p className="flex items-center gap-2">
          <span>
            <img src={clockIcon} alt="clock icon" />
          </span>
          8:00 - 10:00 AM
        </p>
      </div>
      <div className="flex items-center justify-between">
        <Button>Delete</Button>
        <Button>Edit</Button>
      </div>
    </div>
  );
}
export default TaskDetailedView;
