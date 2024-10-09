"use client";
import axios from "axios";
import Skeleton from "./SkeletonBody";
import { useQuery } from "@tanstack/react-query";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setBoards, setChosenBoard, setRefetch } from "@/redux/features/userData";
import { useEffect } from "react";
import Column from "./Column";
import CreateColumn from "./dialogs/CreateColumn";

const getData = async () => {
  const response = await axios.get("/api/board", {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return response.data;
};

const Board = () => {
  const userData = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  const { isError, isLoading, data, refetch } = useQuery({
    queryKey: ["board"],
    queryFn: getData,
  });

  useEffect(() => {
    if (data) {
      dispatch(setBoards(data));
      dispatch(setRefetch(refetch));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <div>Error loading board data</div>;
  }

  return (
    <div className="p-5 flex gap-5 overflow-y-auto flex-1 text-meduim-grey">
      {/* <taskContext.Provider value={{ task, setTask }}> */}
      {userData.boards.length > 0 &&
        userData.boards[userData.chosenBoard].columns.map((column: any, index: number) => {
          return <Column key={index} column={column}></Column>;
        })}
      {/* <LookUpTask></LookUpTask> */}
      {/* </taskContext.Provider> */}
      <CreateColumn></CreateColumn>
    </div>
  );
};

export default Board;
