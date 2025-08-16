import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
 
function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(()=>{
    const storedTheme = localStorage.getItem("theme")
    if(storedTheme === "dark"){
        setIsDarkMode(true)
        document.documentElement.classList.add("dark")
    }else{
          localStorage.setItem("theme","dark")
      setIsDarkMode(false);
    }
  })

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light")
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme","dark")
      setIsDarkMode(true);
    }
  };

  return (
   
     <button
    className={cn(
        "fixed    top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    onClick={toggleTheme} aria-label="Toggle Theme">
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-gray-900" />
      )}
    </button>
   
  );
}

export default ThemeToggle;
