import { MdOutlineSpaceDashboard } from "react-icons/md";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setBoards, setChosenBoard } from "@/redux/features/userData";
const AllBoards = () => {
  const userData = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  const selectBoard = (index: number) => {
    dispatch(setChosenBoard(index));
  };

  return (
    <div className="py-5 mb-auto">
      <h2 className="font-semibold my-2 px-5">ALL BOARDS ({userData.boards.length})</h2>
      {userData.boards.map((board: any, index: number) => (
        <button
          onClick={() => selectBoard(index)}
          className={`py-2 my-1 w-[calc(100%-1.25rem)] ps-5 rounded-e-full flex items-center gap-2 ${index === userData.chosenBoard && "bg-my-accent text-white"}`}
          key={index}>
          <MdOutlineSpaceDashboard className={`${index === userData.chosenBoard && "text-white"}`}></MdOutlineSpaceDashboard>
          {board.name}
        </button>
      ))}
    </div>
  );
};
export default AllBoards;
