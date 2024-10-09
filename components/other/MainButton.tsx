import { cn } from "@/lib/utils"; // Assuming you have a cn utility or use 'classnames' package.

type ButtonProps = {
  role: string;
  func: () => void;
  variant?: "primary" | "secondary" | "danger";
};

const MainButton = ({ role, func, variant = "primary" }: ButtonProps) => {
  return (
    <button
      className={cn("px-4 py-2 font-semibold rounded-full text-center transition-all duration-200 w-full", {
        "bg-my-accent text-white ": variant === "primary",
        "bg-my-accent bg-opacity-10 text-my-accent ": variant === "secondary",
        "bg-red-500 text-white hover:bg-red-600": variant === "danger",
      })}
      onClick={func}>
      {role}
    </button>
  );
};

export default MainButton;
