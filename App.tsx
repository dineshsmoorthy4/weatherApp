import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { WeatherProvider } from './src/context/WeatherContext';
import HomeScreen from './src/screens/HomeScreen';
import { globalStyles } from './src/styles/globalStyles';
import { StatusBar } from 'react-native';

const App = () => {
  const { theme, isDarkMode  } = useTheme();

  return (
    <SafeAreaProvider style={globalStyles(theme).safeArea}>
      <ThemeProvider>
        <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
        <WeatherProvider>
          <HomeScreen />
        </WeatherProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;