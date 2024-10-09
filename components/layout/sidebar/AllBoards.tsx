import CreateBoard from "@/app/(root)/components/dialogs/CreateBoard";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setChosenBoard } from "@/redux/features/userData";
const AllBoards = () => {
  const userData = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  const selectBoard = (index: number) => {
    dispatch(setChosenBoard(index));
  };

  return (
    <div className="mb-auto">
      <h2 className="font-semibold tracking-wider text-250 text-gray-500 my-2 px-5">ALL BOARDS ({userData.boards.length})</h2>
      {userData.boards.map((board: any, index: number) => (
        <button
          onClick={() => selectBoard(index)}
          className={`py-2 my-1 w-[calc(100%-1.25rem)] ps-5 rounded-e-full flex items-center gap-2 ${index === userData.chosenBoard ? "bg-my-accent text-white" : "text-gray-500"}`}
          key={index}>
          <MdOutlineSpaceDashboard ></MdOutlineSpaceDashboard>
          {board.name}
        </button>
      ))}
      <CreateBoard></CreateBoard>
    </div>
  );
};
export default AllBoards;
