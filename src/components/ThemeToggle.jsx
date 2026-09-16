import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext.jsx";

// A small pill-shaped switch, styled to match the rest of the navbar.
// Placed next to the nav links on desktop and inside the mobile menu.
function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={
        "relative flex items-center h-8 w-14 rounded-full border border-core-line bg-core-graphite transition-colors duration-300 " +
        className
      }
    >
      <span
        className={
          "absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-core-navy border border-core-line flex items-center justify-center text-sm shadow-glowBlue transition-transform duration-300 " +
          (isDark
            ? "translate-x-0 text-signal-cyan"
            : "translate-x-6 text-signal-amber")
        }
      >
        {isDark ? <HiMoon /> : <HiSun />}
      </span>
    </button>
  );
}

export default ThemeToggle;
