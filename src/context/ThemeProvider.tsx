import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export enum Theme {
  DARK = "dark",
  LIGHT = "light",
}

interface IThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const themeContext = createContext<IThemeContext>({
  theme: Theme.LIGHT,
  setTheme: (theme) => {},
});

export const useTheme = () => {
  return useContext(themeContext);
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeState, setThemeState] = useState<Theme>(Theme.LIGHT);

  function setTheme(theme: Theme) {
    setThemeState(theme);
  }

  return (
    <themeContext.Provider value={{ theme: themeState, setTheme: setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
