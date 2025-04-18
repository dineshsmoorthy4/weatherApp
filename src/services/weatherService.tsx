import apiClient from './api';
import { API_KEY } from '../config/constants';
import { WeatherData } from '../types/weatherTypes';
import axios from 'axios';

export const fetchWeatherByCity = async (city: string): Promise<WeatherData> => {
  try {
    if (!city.trim()) {
      throw new Error('Please enter a city name');
    }
    
    const response = await apiClient.get(
      `/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('City not found. Please try another location.');
    }
    throw new Error('Failed to fetch weather data. Please try again later.');
  }
};