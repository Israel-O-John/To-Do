import { useContext } from "react";
import { Todos } from "../App";

import AddTask from "./AddTask";
import Calendar from "./Calendar";
import EditTask from "./EditTask";
import TaskDetailedView from "./TaskDetailedView";

function InputSection() {
  const { createTask, taskDetail } = useContext(Todos);

  return (
    <div className="md:border-l md:pl-5 md:w-[30%] h-dvh ">
      {createTask ? (
        <div className="w-screen h-dvh bg-black/25 absolute top-0 left-0 flex flex-col  md:w-full md:relative md:block md:bg-inherit ">
          {
            taskDetail ? <TaskDetailedView /> : <AddTask />
            // {/* <EditTask /> */}
          }
        </div>
      ) : (
        <div className="hidden md:block">
          <Calendar />
        </div>
      )}
    </div>
  );
}
export default InputSection;
