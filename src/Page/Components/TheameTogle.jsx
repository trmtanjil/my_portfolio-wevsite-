import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true); // default true (dark)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark" || !storedTheme) {
      // যদি localStorage এ কিছু না থাকে, তাহলে default dark
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []); // <-- dependency [] দিতে হবে

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      className={cn(
        "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none "
      )}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun />
      ) : (
        <Moon  />
      )}
    </button>
  );
}

export default ThemeToggle;
