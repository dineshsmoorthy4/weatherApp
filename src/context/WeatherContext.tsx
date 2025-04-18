import React, { createContext, useContext, useState } from 'react';
import { useWeather } from '../hooks/useWeather';
import { WeatherContextType } from '../types/weatherTypes.ts';

const WeatherContext = createContext<WeatherContextType>({
  city: '',
  setCity: () => {},
  weather: null,
  loading: false,
  error: '',
  fetchWeather: async () => {},
});

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const weather = useWeather() as WeatherContextType;

  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);