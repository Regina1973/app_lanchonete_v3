import {
  useEffect,
  useState,
} from "react";

import { ThemeContext } from "./ThemeContext";

const STORAGE_KEY = "lc_theme";

export default function ThemeProvider({
  children,
}) {
  const [theme, setTheme] =
    useState("system");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root =
      document.documentElement;

    let currentTheme = theme;

    if (theme === "system") {
      currentTheme =
        window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
          ? "dark"
          : "light";
    }

    root.setAttribute(
      "data-theme",
      currentTheme
    );

    localStorage.setItem(
      STORAGE_KEY,
      theme
    );
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}