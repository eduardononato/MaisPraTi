import { useContext  } from "react";
import { ThemeContext } from "../../../app/providers/ThemeProvider"

const ThemeToggleButton = () => {

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="text-2xl transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full"
      onClick={toggleTheme}
      aria-label="Alternar tema claro/escuro"
    >
      {isDarkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggleButton;