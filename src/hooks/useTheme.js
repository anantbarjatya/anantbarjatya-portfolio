import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // storage unavailable — theme still works for this session
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle, isDark: theme === "dark" };
}
