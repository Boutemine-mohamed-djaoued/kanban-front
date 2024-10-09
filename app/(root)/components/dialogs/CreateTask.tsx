import MainButton from "@/components/other/MainButton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import AddInput from "@/components/form/AddInput";
// import { toast } from "@/components/ui/toast"; // Assuming you have a toast component

const createTaskRequest = async (taskData: any) => {
  const response = await axios.post("/api/task", taskData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const CreateTask = () => {
  const userData = useSelector((state: RootState) => state.userData);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskColumn, setTaskColumn] = useState("");
  const [subtasks, setSubtasks] = useState([""]);
  const [open, setOpen] = useState(false);
  const mutation = useMutation({
    mutationFn: createTaskRequest,
    onSuccess: () => {
      setOpen(false);
      userData.refetch();
    },
    onError: () => {},
  });

  const addSubtasks = () => {
    setSubtasks([...subtasks, ""]);
  };

  useEffect(() => {
    if (userData.boards.length > 0) setTaskColumn(userData.boards[userData.chosenBoard].columns[0].name);
  }, [userData]);
  const handleCreateTask = () => {
    mutation.mutate({
      title: taskTitle,
      description: taskDescription,
      subtasks: subtasks,
      columnId: userData.boards[userData.chosenBoard].columns.find((column: any) => column.name === taskColumn)?._id,
      boardId: userData.boards[userData.chosenBoard]._id,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="bg-my-accent text-white px-3 py-2 rounded-full w-full text-center">+ Add New Task</div>
      </DialogTrigger>
      {userData.boards.length !== 0 && (
        <DialogContent className="dark:bg-dark-grey max-w-[30rem] text-250">
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div>
            <label className="block mb-1 text-gray-500 font-semibold" htmlFor="title">
              Title
            </label>
            <input
              onChange={(e) => setTaskTitle(e.target.value)}
              value={taskTitle}
              className="dark:bg-dark-grey ring-1 ring-gray-200 dark:border-dark-lines px-5 py-2 rounded-sm w-full"
              placeholder="e.g. Take coffee break"
              id="title"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-500 font-semibold" htmlFor="description">
              Description
            </label>
            <textarea
              onChange={(e) => setTaskDescription(e.target.value)}
              value={taskDescription}
              className="dark:bg-dark-grey min-h-[6.5rem] ring-gray-200 ring-1 dark:border-dark-lines px-5 py-2 rounded-md w-full"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
              id="description"
            />
          </div>
          <div>
            <h2 className="text-gray-500 font-semibold">Subtasks</h2>
            <div className="mb-4">
              {subtasks.map((subtask: string, index: number) => {
                return <AddInput key={index} index={index} value={subtasks} setValue={setSubtasks}></AddInput>;
              })}
            </div>
            <MainButton func={addSubtasks} role="+ Add New Subtask" variant="secondary"></MainButton>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-gray-500">Status</h3>
            <Select onValueChange={setTaskColumn}>
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
          <MainButton func={handleCreateTask} role="Create New Task" />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default CreateTask;
