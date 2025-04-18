export interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  dt: number;
  timezone: number;
}

export interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
  weather: WeatherData | null;
  loading: boolean;
  error: string;
  fetchWeather: (city: string) => Promise<void>;
}