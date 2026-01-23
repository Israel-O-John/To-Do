import { useContext } from "react";
import { Todos } from "../App";

function Task({ task, onClick }) {
  const { taskDay } = useContext(Todos);
  const day = taskDay(task);
  return (
    <div
      onClick={onClick}
      className="py-4 px-6 bg-gray-50 border-b border-b-gray-200 flex items-center justify-between cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-5 h-5 border border-gray-300 accent-blue-200 rounded-lg peer"
        />
        <div className="peer-checked:line-through">
          <h4 className="font-secondaryFont font-medium text-sm text-gray-900 ">
            {task.title}
          </h4>
          <p className="font-secondaryFont text-sm text-gray-600">
            {task.startTime} - {task.completeTime}{" "}
          </p>
        </div>
      </div>

      <p className="font-secondaryFont text-sm text-gray-600">{day}</p>
    </div>
  );
}
export default Task;
