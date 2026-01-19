import { Todos } from "../App";

import { useContext, useEffect, useState } from "react";
import Task from "./Task";
import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";

/* 
const theTasks = [
  {
    id: 1,
    title: "Create Wireframe",
    startTime: "10:30 am",
    completedTime: "11:30 am",
    day: "Today",
  },
  {
    id: 2,
    title: "Go Shopping",
    startTime: "12:30 pm",
    completedTime: "1:30 pm",
    day: "Today",
  },
]; 
*/

function Tasks() {
  const [currentPage, setCurrentPage] = useState(1);

  const { taskComponent, setSelectedId, setTaskDetail, setCreateTask } =
    useContext(Todos);

  const totalItems = taskComponent.length;
  const itemsPerWindow = 4;
  const totalWindows = Math.ceil(totalItems / itemsPerWindow);

  useEffect(() => {
    if (totalWindows === 0) return;

    if (currentPage > totalWindows) {
      setCurrentPage(totalWindows);
    }
  }, [currentPage, totalWindows]);

  const skippedItems = 4 * (currentPage - 1);

  const firstIndex = skippedItems;
  const lastIndex = skippedItems + itemsPerWindow;

  let itemsDisplay = [];
  if (taskComponent.length === 0) {
    itemsDisplay = [];
  } else {
    itemsDisplay = taskComponent.slice(firstIndex, lastIndex);
  }

  const disableBtnPrev = currentPage === 1;
  const disableBtnNext = currentPage === totalWindows;

  const pageNums = Array.from({ length: totalWindows }, (_, i) => i + 1);

  function handlePrev() {
    if (disableBtnPrev) return;
    setCurrentPage(currentPage - 1);
  }
  function handleNext() {
    if (disableBtnNext) return;
    setCurrentPage(currentPage + 1);
  }

  // Start from here
  function handleTaskClick(task) {
    setCreateTask(true);
    setTaskDetail(true);
    setSelectedId(task.id);
  }

  // Pagination logic
  const range = 1;

  const startPage = Math.max(2, currentPage - range);
  const endPage = Math.min(totalWindows - 1, currentPage + range);

  const middlePages = [];
  for (let i = startPage; i <= endPage; i++) {
    middlePages.push(i);
  }

  return (
    <>
      {taskComponent.length < 1 ? (
        <h1>No tasks yet</h1>
      ) : (
        <div className="px-4 md:w-full space-y-6">
          <h3
            className="font-secondaryFont font-semibold text-bas
     text-gray-900 pb-4"
          >
            My Tasks
          </h3>
          <div className="space-y-4">
            {itemsDisplay.map((task) => (
              <Task
                task={task}
                key={task.id}
                onClick={() => handleTaskClick(task)}
              />
            ))}
          </div>

          <div className="w-full flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={disableBtnPrev}
              className="text-sm font-semibold text-gray-600 flex gap-2"
            >
              <img src={leftArrow} alt="arrow left" />
              Previous
            </button>
            <div className="flex gap-4 ">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(1)}
                className={`w-10 h-10 ${
                  currentPage === 1 ? "bg-gray-50 rounded-3xl" : ""
                }`}
              >
                1
              </button>
              {/* left eclipse*/}
              {startPage > 2 && <span>...</span>}

              {/* middle pages */}
              {middlePages.map((page) => (
                <button
                  key={page}
                  disabled={page === currentPage}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 ${
                    currentPage === page ? "bg-gray-50 rounded-3xl" : ""
                  }`}
                >
                  {page}
                </button>
              ))}

              {/* right eclipse */}
              {endPage < totalWindows - 1 && <span>...</span>}

              {/* last page */}
              {totalWindows > 1 && (
                <button
                  disabled={currentPage === totalWindows}
                  onClick={() => setCurrentPage(totalWindows)}
                  className={`w-10 h-10 ${
                    currentPage === totalWindows ? "bg-gray-50 rounded-3xl" : ""
                  }`}
                >
                  {totalWindows}
                </button>
              )}
            </div>
            <button
              onClick={handleNext}
              disabled={disableBtnNext}
              className="text-sm font-semibold text-gray-600 flex gap-2"
            >
              Next
              <img src={rightArrow} alt="right arrow" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Tasks;
