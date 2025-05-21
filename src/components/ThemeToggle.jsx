import { IoMoon, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeProvider";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = ({ ...props }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      {...props}
      onClick={toggleTheme}
      className="md:p-2 p-1 bg-gray-500 text-white rounded-full cursor-pointer"
    >
      {theme === "light" ? <IoMoon size={18} /> : <IoSunnyOutline size={18} />}
    </button>
  );
};

export default ThemeToggle;
