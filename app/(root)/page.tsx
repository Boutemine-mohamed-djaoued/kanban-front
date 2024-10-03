import Sidebar from "@/components/layout/sidebar/Sidebar";
import Board from "./components/Board";
const page = () => {
  return (
    <main className="flex-1 flex flex-col">
      <Sidebar />
      <Board />
    </main>
  );
};
export default page;
