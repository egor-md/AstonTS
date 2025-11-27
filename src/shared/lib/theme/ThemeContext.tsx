import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const tougleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
        document.body.dataset.theme = theme;
    }

    return (
        <ThemeContext.Provider value={{theme, tougleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};