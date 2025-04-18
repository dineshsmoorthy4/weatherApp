import { useState, useEffect, useCallback } from 'react';
import { fetchWeatherByCity } from '../services/weatherService';
import { useDebounce } from './useDebounce';
import { useNetworkStatus } from './useNetworkStatus';
import { storeData, getData } from '../utils/storage';
import { LAST_SEARCHED_CITY_KEY } from '../config/constants';
import { WeatherData } from '../types/weatherTypes';

export const useWeather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { isConnected } = useNetworkStatus();
  const debouncedCity = useDebounce(city, 500);

  useEffect(() => {
    const loadLastSearchedCity = async () => {
      try {
        const lastCity = await getData(LAST_SEARCHED_CITY_KEY);
        if (lastCity) {
          setCity(lastCity);
          fetchWeather(lastCity); // Automatically fetch weather for last city
        }
      } catch (err) {
        console.error('Failed to load last city:', err);
      }
    };
    
    loadLastSearchedCity();
  }, []);

  const fetchWeather = useCallback(async (cityName: string) => {
    if (!cityName.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      if (!isConnected) {
        throw new Error('No internet connection. Please check your network.');
      }
      
      const data = await fetchWeatherByCity(cityName);
      setWeather(data);
      await storeData(LAST_SEARCHED_CITY_KEY, cityName);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }, [isConnected]);

  useEffect(() => {
    if (debouncedCity) {
      fetchWeather(debouncedCity);
    }
  }, [debouncedCity, fetchWeather]);

  return {
    city,
    setCity,
    weather,
    loading,
    error,
    fetchWeather,
  };
};