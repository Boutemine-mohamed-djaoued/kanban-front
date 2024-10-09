import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { HiDotsVertical } from "react-icons/hi";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import axios from "axios";
interface taskProps {
  task: taskType;
}
const task = ({ task }: taskProps) => {
  const [status, setStatus] = useState("");
  const userData = useSelector((state: RootState) => state.userData);
  useEffect(() => {
    console.log(status);
  }, [status]);
  const checkSubtask = async (subtaskId: any) => {
    try {
      const response = await axios.put(
        `/api/task/subtask/${subtaskId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      userData.refetch();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:cursor-pointer p-5 my-5 bg-white dark:bg-dark-grey rounded-lg shadow-md">
          <div className="text-black dark:text-white  font-semibold ">{task.title}</div>
          <div className="text-250">
            {task.subtasks && task.subtasks.reduce((count: number, subtask: any) => count + subtask.done, 0)} of {task.subtasks.length} subtasks
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="dark:bg-dark-grey">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-400 mb-4 max-w-[35ch] leading-5">{task.title}</DialogTitle>
            <HiDotsVertical className="text-gray-500" size={30}></HiDotsVertical>
          </div>
          <DialogDescription className="text-meduim-grey">{task.description}</DialogDescription>
        </DialogHeader>
        <div>
          <h3 className="font-semibold text-gray-500">Subtasks (0 of {task.subtasks && task.subtasks.length})</h3>
          <div>
            {task.subtasks &&
              task.subtasks.map((subtask: subtaskType, index: number) => {
                return (
                  <div key={index} className="bg-light-lines bg-opacity-50 dark:bg-very-dark-grey p-3 my-3 rounded-md flex gap-2">
                    <input checked={subtask.done} onChange={()=>checkSubtask(subtask._id)} type="checkbox" id={index.toString()} name={subtask.title} value={subtask.title} />
                    <label className={`${subtask.done ? "line-through text-gray-500" : null}`} htmlFor={index.toString()}>
                      {subtask.title}
                    </label>
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-500">Current Status</h3>
          <Select onValueChange={setStatus}>
            <SelectTrigger className="w-full dark:bg-dark-grey">
              <SelectValue placeholder={userData.boards[userData.chosenBoard].columns[0].name} />
            </SelectTrigger>
            <SelectContent className="dark:bg-dark-grey">
              <SelectGroup>
                {userData.boards[userData.chosenBoard].columns.map((column: any, index: number) => (
                  <SelectItem value={column.name} key={index}>
                    {column.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default task;
