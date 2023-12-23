import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    background: '#1d2634',
    text: '#9e9ea4',
  });

  const toggleTheme = () => {
    // Toggle between light and dark themes as needed
    setTheme((prevTheme) => ({
      ...prevTheme,
      background: prevTheme.background === '#1d2634' ? '#ffffff' : '#1d2634',
      text: prevTheme.text === '#9e9ea4' ? '#000000' : '#9e9ea4',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

