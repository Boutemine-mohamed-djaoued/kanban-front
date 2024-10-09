import React from "react";
import { FaEyeSlash } from "react-icons/fa6";

interface HideSideBarProps {
  toggleDrawer: (newOpen: boolean) => () => void;
}

const HideSideBar: React.FC<HideSideBarProps> = ({ toggleDrawer }) => {
  return (
    <button className="ms-5 text-gray-500 mb-5 flex items-center gap-2" onClick={toggleDrawer(false)}>
      <FaEyeSlash />
      Hide Sidebar
    </button>
  );
};

export default HideSideBar;
