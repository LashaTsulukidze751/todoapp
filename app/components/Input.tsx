import { useRecoilState } from "recoil";
import { taskState, tasksState } from "../state";
import { ChangeEvent } from "react";
import { IoMdAdd } from "react-icons/io";

export default () => {
  const [task, setTask] = useRecoilState(taskState);
  const [tasks, setTasks] = useRecoilState<any>(tasksState);

  const handleOnChange = () => {
    if (task) {
      
      setTasks([...tasks, task.slice(0,35)]);
      setTask("");
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    localStorage.setItem("tasks", JSON.stringify([...tasks, e.target.value]));
  };

  return (
    <div className="my-10 flex w-64 items-center justify-center">
      <input
        type="text"
        className="h-8 w-60 outline-none"
        value={task}
        onChange={handleInput}
      />
      <IoMdAdd
       title="add"
        className="flex h-8 w-8 cursor-pointer items-center justify-center bg-red-600 fill-white hover:scale-110"
        onClick={handleOnChange}
      />
    </div>
  );
};
