import MainButton from "@/components/other/MainButton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { useEffect, useState } from "react";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setBoards, setChosenBoard } from "@/redux/features/userData";
import AddInput from "@/components/form/AddInput";

const CreateTask = () => {
  const userData = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskColumn, setTaskColumn] = useState("");
  const [subtasks, setSubtasks] = useState(["aone","btwo"]);
  const addSubtasks = () => {
    setSubtasks([...subtasks, "what"]);
  };
  // const createTask = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:4000/task", {
  //       title: taskTitle,
  //       description: taskDescription,
  //       subtasks: subtasks,
  //       columnId: userData.value[chosenBoard.index].columns.find((column: any) => column.name === taskColumn)._id,
  //       boardId: userData.value[chosenBoard.index]._id,
  //     },
  //       {
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         withCredentials: true
  //       })
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg-my-accent text-white px-3 py-2 rounded-full w-full text-center">+ Add New Task</div>
      </DialogTrigger>
      {userData.boards.length != 0 && (
        <DialogContent className="dark:bg-dark-grey">
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div>
            <label className="block mb-1" htmlFor="title">
              Title
            </label>
            <input
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
              className="dark:bg-dark-grey border-2 border-light-lines dark:border-dark-lines px-5 py-2 rounded-md w-full"
              placeholder="e.g. Take coffee break"
              id="title"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="description">
              Description
            </label>
            <textarea
              onChange={(e) => setTaskDescription(e.target.value)}
              value={taskDescription}
              className="dark:bg-dark-grey min-h-[10rem] border-2 border-light-lines dark:border-dark-lines px-5 py-2 rounded-md w-full"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will
            recharge the batteries a little."
              id="description"
            />
          </div>
          <div>
            <h2>Subtasks</h2>
            <div className="mb-4">
              {subtasks.map((subtask: string, index: number) => {
                return <AddInput key={index} index={index} value={subtasks} setValue={setSubtasks}></AddInput>;
              })}
            </div>
            <MainButton func={addSubtasks} role="+ add new column"></MainButton>
          </div>
          <div>
            <h3 className="mb-2">Status</h3>
            <Select onValueChange={setTaskColumn}>
              <SelectTrigger className="w-full dark:bg-dark-grey">
                <SelectValue placeholder={userData.boards[userData.chosenBoard].columns[0].name} />
              </SelectTrigger>
              <SelectContent className="dark:bg-dark-grey">
                <SelectGroup>
                  {userData.boards[userData.chosenBoard] &&
                    userData.boards[userData.chosenBoard].columns.map((column: any, index: number) => {
                      return (
                        <SelectItem value={column.name} key={index}>
                          {column.name}
                        </SelectItem>
                      );
                    })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <MainButton func={() => {console.log({subtasks,taskTitle,taskDescription})}} role="Create New Task"></MainButton>
        </DialogContent>
      )}
    </Dialog>
  );
};
export default CreateTask;
