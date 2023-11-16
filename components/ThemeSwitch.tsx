import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiMoon, BiSun, BiDesktop } from "react-icons/bi";

type Theme = "light" | "dark";
const ThemeSwitch = () => {
  //Theme Mode Switch
  const [theme, setTheme] = useState<Theme>("light");
  const styleMode =
    "group-hover/switchIcon:scale-[1.25] group-active/switchIcon:scale-105 transition-all";
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  return (
    <div className="modeTheme">
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-textDark bg-white/25 bg-opacity-70 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-textLight border-opacity-40 shadow-2xl rounded-full
          flex items-center justify-center group/switchIcon transition-all dark:bg-black/10 dark:text-textLight"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <BiSun className={styleMode} />
        ) : (
          <BiMoon className={styleMode} />
        )}
        {/* <BiMoon /> */}
      </motion.button>
    </div>
  );
};

export default ThemeSwitch;
