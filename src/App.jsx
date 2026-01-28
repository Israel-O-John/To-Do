import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Main from "./components/Main";

// 1. Create context
export const Todos = createContext();
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

const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function normalizeTask(task) {
  return {
    ...task,
    day: task.day ?? "",
  };
}
function App() {
  const [createTask, setCreateTask] = useState(false);
  const [taskDetail, setTaskDetail] = useState(false);
  const [editTasks, setEditTasks] = useState(false);
  const [taskComponent, setTaskComponent] = useState(function () {
    const tasksData = localStorage.getItem("tasks");
    if (!tasksData) return [];
    const parsedTasks = JSON.parse(tasksData);
    return parsedTasks.map((task) => normalizeTask(task));
  });
  const [selectedId, setSelectedId] = useState("");
  const [taskDaySet, setTaskDaySet] = useState("");

  useEffect(
    function () {
      localStorage.setItem("tasks", JSON.stringify(taskComponent));
    },
    [taskComponent]
  );

  function addTask(newTask) {
    setTaskComponent((tasks) => [normalizeTask(newTask), ...tasks]);
  }
  function editedTask(updatedTask) {
    const normalized = normalizeTask(updatedTask);
    setTaskComponent((tasks) =>
      tasks.map((task) => (task.id === normalized.id ? normalized : task))
    );
  }
  function deleteTask() {
    const taskComponentNew = taskComponent.filter(
      (task) => task.id !== selectedId
    );
    setTaskComponent([...taskComponentNew]);
  }

  function taskExists(newTask, taskArr) {
    return taskArr.some((task) => {
      return (
        task.title.trim().toLowerCase() ===
          newTask.title.trim().toLocaleLowerCase() &&
        task.startTime.trim().toLowerCase() ===
          newTask.startTime.trim().toLowerCase() &&
        task.completeTime.trim().toLowerCase() ===
          newTask.completeTime.trim().toLowerCase()
      );
    });
  }

  function taskDay(task) {
    const today = new Date();
    const taskDate = new Date(
      task.day.year,
      new Date(`${task.day.month}1`).getMonth(),
      task.day.day
    );

    today.setHours(0, 0, 0, 0);
    taskDate.setHours(0, 0, 0, 0);

    const difference =
      (taskDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

    if (difference === 0) return "Today";
    if (difference === 1) return "Tomorrow";
    if (difference === -1) return "Yesterday";
    return `${task.day.day} ${task.day.month} ${task.day.year}`;
  }

  function convertTo12Hrs(timeStr) {
    let [hours, minutes] = timeStr.split(":");

    hours = Number(hours);
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes}${ampm}`;
  }

  return (
    // 2. Pass value to child components
    <Todos.Provider
      value={{
        createTask,
        setCreateTask,
        taskComponent,
        addTask,
        months,
        monthsShort,
        selectedId,
        setSelectedId,
        taskDetail,
        setTaskDetail,
        editTasks,
        setEditTasks,
        taskExists,
        editedTask,
        deleteTask,
        taskDay,
        convertTo12Hrs,
        taskDaySet,
        setTaskDaySet,
      }}
    >
      <Header />
      <Greeting />
      <Main />
    </Todos.Provider>
  );
}
export default App;

/* 
To consumer context in a component you use
useContext hook
const x = useContext(Todos)
*/
