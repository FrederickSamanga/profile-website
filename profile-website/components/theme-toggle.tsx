"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-transparent hover:bg-gray-800 transition-colors"
    >
      <div className="relative items-center w-4 h-4">
        <Sun className="absolute inset-0 h-5 w-5 transition-opacity duration-300 dark:opacity-0" />
        <Moon className="absolute inset-0 h-5 w-5 transition-opacity duration-300 opacity-0 dark:opacity-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}