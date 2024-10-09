import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch"; // Import from Shadcn
import { IoSunny } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { cn } from "@/lib/utils";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex p-2 mx-5 my-2 items-center gap-2 justify-center bg-light-grey dark:bg-very-dark-grey rounded-md">
      <IoSunny size="1.5rem" className="text-meduim-grey" />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={handleChange}
        className={cn("bg-my-accent mx-4 data-[state=unchecked]:bg-my-accent",)} // Conditional class names using cn
      />
      <BsFillMoonStarsFill size="1rem" className="text-meduim-grey" />
    </div>
  );
};

export default ThemeChanger;
