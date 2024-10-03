import Image from "next/image";

const Logo = () => {
  return (
    <div className="text-black dark:text-white flex items-center min-w-[15rem] p-5 gap-5 border-y-2 border-light-lines dark:border-dark-lines">
      <Image src="/logo.svg" alt="logo" width="30" height="30"></Image>
      <span className="text-500 font-semibold">Kanban</span>
    </div>
  );
};
export default Logo;
