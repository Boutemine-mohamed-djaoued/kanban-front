"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/other/Logo";
import HideSideBar from "./HideSideBar";
import ThemeChanger from "./ThemeChanger";
import AllBoards from "./AllBoards";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <button className="fixed bottom-20 flex py-1 px-2 left-0 bg-my-accent hover:bg-accent-hover rounded-e-full" onClick={toggleDrawer(true)} aria-label="Open sidebar">
        <FaEye className="text-white" size={25}></FaEye>
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="hidden">open</SheetTrigger>
        <SheetContent className="w-fit flex flex-col border-e-2 border-e-light-lines" side="left">
          <div className="sr-only">
            <SheetHeader>
              <SheetTitle>Sidebar Menu</SheetTitle>
              <SheetDescription>Navigate through the sidebar menu.</SheetDescription>
            </SheetHeader>
          </div>
          <Logo />
          <AllBoards />
          <ThemeChanger />
          <HideSideBar toggleDrawer={toggleDrawer} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
