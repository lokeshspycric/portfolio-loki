import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Optional: use icons if installed

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full shadow hover:bg-gray-700 transition"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        {darkMode ? "Infra Mode" : "AI Mode"}
      </button>
    </div>
  );
}
