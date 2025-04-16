import axios from 'axios';
import {WeatherData} from '../types';

const API_KEY = 'ef7a0e10c68b2eb194e6b4b4fc29bfbd';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

interface WeatherResponse {
  name: string;
  main: {
    temp: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

export const fetchWeatherByCity = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get<WeatherResponse>(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
      },
    });
    console.log('Weather API Response:', response.data);
    return {
      cityName: response.data.name,
      temperature: response.data.main.temp,
      condition: response.data.weather[0].main,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };
  } catch (error) {
    throw error;
  }
};