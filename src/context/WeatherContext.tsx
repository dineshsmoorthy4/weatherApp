import React, {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchWeatherByCity} from '../services/weatherService';
import {WeatherData} from '../types';

interface WeatherContextType {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
  getWeather: (cityName: string) => Promise<void>;
}

export const WeatherContext = createContext<WeatherContextType>({
  city: '',
  setCity: () => {},
  weather: null,
  loading: false,
  error: null,
  getWeather: async () => {},
});

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({children}) => {
  const [city, setCity] = useState<string>('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    // Load last searched city when app opens
    const loadLastSearchedCity = async () => {
      try {
        // await AsyncStorage.clear();
        const savedCity = await AsyncStorage.getItem('lastSearchedCity');
        console.log('Last searched city:', savedCity);
        if (savedCity) {
          setCity(savedCity);
          getWeather(savedCity);
        }
      } catch (err) {
        console.error('Failed to load last searched city', err);
      }
    };

    loadLastSearchedCity();
  }, []);

  const getWeather = async (cityName: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherByCity(cityName);
      setWeather(data);
      // Save last searched city
      await AsyncStorage.setItem('lastSearchedCity', cityName);
      setLoading(false);
    } catch (err) {
      setError('City not found or Try another city input for fetching weather data!');
      setLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weather,
        loading,
        error,
        getWeather,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};