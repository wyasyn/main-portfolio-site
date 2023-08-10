// ThemeContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme){
      setTheme(currentTheme)
    }
  },[]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    localStorage.setItem('theme', theme)
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};



ThemeProvider.propTypes = {
    children: PropTypes.any,
  };