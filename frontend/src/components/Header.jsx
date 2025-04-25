import React, { useState, useEffect } from "react";
import { Sun } from "../icons/Sun";
import { Moon } from "../icons/Moon";

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className=" bg-white dark:bg-black flex items-center gap-10 p-5 ">
      <p className=" text-2xl">
        Blog <span className="text-orange-600">Allaho akbar</span>
      </p>
      <button
        className="text-3xl p-0 m-0 ml-auto"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}

export default Header;
