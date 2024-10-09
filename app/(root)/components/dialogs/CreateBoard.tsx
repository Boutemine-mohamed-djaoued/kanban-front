import AddInput from "@/components/form/AddInput";
import MainButton from "@/components/other/MainButton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import type { RootState } from "@/redux/store";
import { useSelector, UseSelector } from "react-redux";
const createBoardRequest = async (boardData: any) => {
  const response = await axios.post("/api/board", boardData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const CreateBoard = () => {
  const [columns, setColumns] = useState([""]);
  const [boardName, setBoardName] = useState("");
  const [open, setOpen] = useState(false);
  const userData = useSelector((state : RootState) => state.userData);
  const mutation = useMutation({
    mutationFn: createBoardRequest,
    onSuccess: () => {
      setOpen(false);
      userData.refetch();
    },
    onError: () => {},
  });

  const addColumns = () => {
    setColumns([...columns, ""]);
  };

  const handleCreateBoard = () => {
    mutation.mutate({
      name: boardName,
      columns: columns,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="px-5 text-my-accent">+ Create New Board</div>
      </DialogTrigger>
      <DialogContent className="dark:bg-dark-grey max-w-[25rem] text-250">
        <DialogHeader>
          <DialogTitle>Add New Board</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div>
          <label className="block mb-1 text-gray-500 font-semibold" htmlFor="boardname">
            Name
          </label>
          <input
            onChange={(e) => setBoardName(e.target.value)}
            value={boardName}
            className="dark:bg-dark-grey ring-1 ring-gray-200 dark:border-dark-lines px-5 py-2 rounded-sm w-full"
            placeholder="e.g. My New Board"
            id="boardname"
          />
        </div>
        <div className="mb-5">
          <h2 className="text-gray-500 font-semibold">Columns</h2>
          <div className="mb-4">
            {columns.map((column: any, index: number) => (
              <AddInput key={index} index={index} value={columns} setValue={setColumns} />
            ))}
          </div>
          <MainButton func={addColumns} role="+ Add New Column" variant="secondary" />
        </div>
        <MainButton func={handleCreateBoard} role="Create New Board" />
      </DialogContent>
    </Dialog>
  );
};

export default CreateBoard;
