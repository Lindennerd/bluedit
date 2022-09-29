import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="px-2 py-1 rounded-full hover:bg-slate-100 flex dark:hover:bg-slate-600 items-center gap-2"
      onClick={() => setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
    >
      {theme === "dark" ? (
        <>
          <MdLightMode className="text-xl" />
          <span>Light</span>
        </>
      ) : (
        <>
          <MdDarkMode className="text-xl" />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
