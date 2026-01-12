import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Main from "./components/Main";

// 1. Create context
export const Todos = createContext();

function App() {
  const [createTask, setCreateTask] = useState(false);
  const [taskComponent, setTaskComponent] = useState(function () {
    const tasksData = localStorage.getItem("tasks");

    return tasksData ? JSON.parse(tasksData) : [];
  });

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
