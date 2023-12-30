"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { doneItemsState, tasksState } from "../state";
import { IoTrashOutline } from "react-icons/io5";

export default () => {
  const [tasks, setTasks] = useRecoilState<any>(tasksState);
  const [doneItems, setDoneItems] = useRecoilState<any>(doneItemsState);

  useEffect(() => {
    const storedItems = localStorage.getItem("tasks");
    if (storedItems) {
      setTasks(JSON.parse(storedItems));
    }
  }, []);

  const handleTaskClick = (index: number) => {
    const arr = [...doneItems];
    if (arr.includes(index)) {
      arr.splice(arr.indexOf(index), 1);
    } else {
      arr.push(index);
    }
    setDoneItems(arr);
  };

  const handleTaskRemove = (index: number) => {
    const arr = [...tasks];
    arr.splice(index, 1);
    setTasks(arr);
    localStorage.setItem("tasks", JSON.stringify(arr));
  };

  return (
    <ul className="min-w-96">
      {tasks.map((item: string, index: number) => (
        <div
          className="m-1 flex h-8 items-center justify-between bg-white"
          key={index}
        >
          <div className="flex">
            <div className="h-8 w-8">
              <input
                title="done"
                type="checkbox"
                className="m-2 h-4 w-4 outline-none"
                onClick={() => handleTaskClick(index)}
              />
            </div>
            <li
              className={` m-1 ${
                doneItems.includes(index) ? " line-through" : " no-underline"
              }`}
            >
              {item}
            </li>
          </div>
          <div className="h-8 w-8 bg-red-500 p-1 hover:scale-110">
            <IoTrashOutline
            title="delete"
              className="h-6 w-6"
              onClick={() => handleTaskRemove(index)}
            />
          </div>
        </div>
      ))}
    </ul>
  );
};
