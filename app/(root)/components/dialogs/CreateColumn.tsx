import MainButton from "@/components/other/MainButton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const createColumnRequest = async (columnData: any) => {
  const response = await axios.post("/api/column", columnData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

const CreateColumn = () => {
  const [columnName, setColumnName] = useState("");
  const userData = useSelector((state: RootState) => state.userData);
  const [open, setOpen] = useState(false);
  const mutation = useMutation({
    mutationFn: createColumnRequest,
    onSuccess: () => {
      setOpen(false);
      userData.refetch();
    },
    onError: (error) => {},
  });

  const handleCreateColumn = () => {
    mutation.mutate({
      name: columnName,
      boardId: userData.boards[userData.chosenBoard]._id,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="h-full text-center text-400 font-semibold bg-light-lines dark:bg-dark-grey bg-opacity-75 w-[15rem] grid items-center rounded-lg">+ New Column</div>
      </DialogTrigger>
      <DialogContent className="dark:bg-dark-grey max-w-[20rem] text-250">
        <DialogHeader>
          <DialogTitle>Add New Column</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="mb-3">
          <label className="block mb-1 text-gray-500 font-semibold" htmlFor="columnname">
            Name
          </label>
          <input
            onChange={(e) => setColumnName(e.target.value)}
            value={columnName}
            className="dark:bg-dark-grey ring-1 ring-gray-200 dark:border-dark-lines px-5 py-2 rounded-md w-full"
            placeholder="e.g. My New Column"
            id="columnname"
          />
        </div>
        <MainButton func={handleCreateColumn} role="Create New Column" />
      </DialogContent>
    </Dialog>
  );
};

export default CreateColumn;
