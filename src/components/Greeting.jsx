import { useContext } from "react";
import { Todos } from "../App";
import plusIcon from "../assets/plus-icon.svg";

function Greeting() {
  const { setCreateTask } = useContext(Todos);
  function handleOpen() {
    setCreateTask(true);
  }
  return (
    <div className="px-4 py-8 md:w-11/12 md:mx-auto md:flex md:items-start md:justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 pb-1">
          Good morning!
        </h2>
        <p className="text-base font-normal text-gray-600 pb-4">
          You got some task to do.
        </p>
      </div>
      <button
        className="items-center gap-2 text-sm font-semibold bg-button-blue flex text-white px-4 py-2 rounded-lg hover:bg-button-blue-active transition-all duration-300"
        onClick={handleOpen}
      >
        <img src={plusIcon} alt="plus icon" />
        Create New Task
      </button>
    </div>
  );
}
export default Greeting;
