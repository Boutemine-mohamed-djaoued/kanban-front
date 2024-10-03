type buttonProps = {
  role: string;
  func: () => void;
};
const MainButton = ({ role, func }: buttonProps) => {
  return (
    <button className="bg-my-accent text-white px-3 py-2 rounded-full w-full text-center" onClick={func}>
      {role}
    </button>
  );
};
export default MainButton;
