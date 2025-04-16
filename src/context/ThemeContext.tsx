import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ThemeColors} from '../types';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => Promise<void>;
  theme: ThemeColors;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: async () => {},
  theme: {
    backgroundColor: '#F8F8F8',
    textColor: '#000000',
    cardBgColor: '#FFFFFF',
    inputBgColor: '#EEEEEE',
  },
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setIsDarkMode(savedTheme === 'dark');
        }
      } catch (err) {
        console.error('Failed to load theme', err);
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    try {
      await AsyncStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
      setIsDarkMode(!isDarkMode);
    } catch (err) {
      console.error('Failed to save theme', err);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        theme: {
          backgroundColor: isDarkMode ? '#121212' : '#F8F8F8',
          textColor: isDarkMode ? '#FFFFFF' : '#000000',
          cardBgColor: isDarkMode ? '#1E1E1E' : '#FFFFFF',
          inputBgColor: isDarkMode ? '#333333' : '#EEEEEE',
        },
      }}>
      {children}
    </ThemeContext.Provider>
  );
};