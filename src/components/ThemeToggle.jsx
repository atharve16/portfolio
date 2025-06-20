import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    // Optional: sync with system preference
    // if (!storedTheme) {
    //   const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    //   setIsDarkMode(prefersDark);
    //   document.documentElement.classList.toggle("dark", prefersDark);
    //   localStorage.setItem("theme", prefersDark ? "dark" : "light");
    // }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
     className={cn(
  "fixed max-sm:hidden top-20 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none"
)}

    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-400 transition-transform duration-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900 transition-transform duration-300" />
      )}
    </button>
  );
};
