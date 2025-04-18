import React from 'react';
import {render} from '@testing-library/react-native';
import WeatherCard from '../src/components/WeatherCard/WeatherCard';
import {WeatherData, ThemeColors} from '../src/types';

describe('WeatherCard', () => {
  const mockWeather: WeatherData = {
    cityName: 'London',
    temperature: 15.5,
    condition: 'Cloudy',
    description: 'few clouds',
    icon: '02d',
  };

  const mockTheme: ThemeColors = {
    textColor: '#000000',
    cardBgColor: '#FFFFFF',
    backgroundColor: '#F8F8F8',
    inputBgColor: '#EEEEEE',
  };

  test('renders correctly with weather data', () => {
    const {getByText} = render(
      <WeatherCard weather={mockWeather} theme={mockTheme} />,
    );

    expect(getByText('London')).toBeTruthy();
    expect(getByText('16°C')).toBeTruthy(); // Rounded 15.5 to 16
    expect(getByText('Cloudy')).toBeTruthy();
    expect(getByText('few clouds')).toBeTruthy();
  });
});