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

function App() {
  const [createTask, setCreateTask] = useState(false);
  const [taskDetail, setTaskDetail] = useState(false);
  const [taskComponent, setTaskComponent] = useState(function () {
    const tasksData = localStorage.getItem("tasks");

    return tasksData ? JSON.parse(tasksData) : [];
  });

  const [selectedId, setSelectedId] = useState("");

  useEffect(
    function () {
      localStorage.setItem("tasks", JSON.stringify(taskComponent));
    },
    [taskComponent]
  );

  return (
    // 2. Pass value to child components
    <Todos.Provider
      value={{
        createTask,
        setCreateTask,
        taskComponent,
        setTaskComponent,
        months,
        selectedId,
        setSelectedId,
        taskDetail,
        setTaskDetail,
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
