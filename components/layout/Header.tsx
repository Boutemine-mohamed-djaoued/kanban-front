"use client";
import { HiDotsVertical } from "react-icons/hi";
import Logo from "@/components/other/Logo";
import MainButton from "../other/MainButton";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setBoards, setChosenBoard } from "@/redux/features/userData";
import CreateTask from "@/app/(root)/components/dialogs/CreateTask";
const Header = () => {
  const data = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  return (
    <header className="flex bg-white dark:bg-dark-grey">
      <Logo></Logo>
      <div className="flex flex-1 justify-between items-center p-5 border-2 border-e-0 border-light-lines dark:border-dark-lines">
        <div className="text-500 font-meduim"> {data.boards.length != 0 ? data.boards[data.chosenBoard].name : null}</div>
        <div className="flex items-center gap-4">
          <CreateTask/>
          <HiDotsVertical size="1.5rem" className="text-meduim-grey" />
        </div>
      </div>
    </header>
  );
};
export default Header;
