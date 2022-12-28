import { createContext, useState, useEffect, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextData = {
  theme: Theme;
  toggleThemeHandler: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextData>({
  theme: "dark",
  toggleThemeHandler: () => null,
});
export default ThemeContext;

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => initialThemeHandler());

  const toggleTheme = (theme: Theme): void => {
    setTheme(theme);
  };

  const isLocalStorageEmpty = (): boolean => {
    return !localStorage.getItem("themeActive");
  };

  const initialThemeHandler = (): void => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem("themeActive", "dark");
      document!.querySelector("body")!.classList.add("dark");
      toggleTheme("dark");
    } else {
      const themeActive: Theme = localStorage.getItem("themeActive") as Theme;
      if (themeActive === "dark") {
        document!.querySelector("body")!.classList.add("dark");
      }
      toggleTheme(themeActive);
    }
  };

  const toggleThemeHandler = (theme: Theme): void => {
    toggleTheme(theme);
    document!.querySelector("body")!.classList.toggle("dark");
    localStorage.setItem("themeActive", theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return theme;
};

export const useToggleTheme = () => {
  const { toggleThemeHandler } = useContext(ThemeContext);
  return toggleThemeHandler;
};
