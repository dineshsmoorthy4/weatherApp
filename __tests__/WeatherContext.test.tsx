import React from 'react';
import {render, act, waitFor} from '@testing-library/react-native';
import {WeatherProvider, WeatherContext} from '../src/context/WeatherContext';
import {fetchWeatherByCity} from '../src/services/weatherService';
import {Text, View} from 'react-native';

jest.mock('../src/services/weatherService');
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

const mockedFetchWeather = fetchWeatherByCity as jest.MockedFunction<typeof fetchWeatherByCity>;

interface TestComponentProps {
  testID?: string;
}

const TestComponent: React.FC<TestComponentProps> = ({testID}) => {
  const {city, weather, loading, error} = React.useContext(WeatherContext);
  return (
    <View>
      <Text testID={`${testID}-city`}>{city}</Text>
      <Text testID={`${testID}-loading`}>{loading.toString()}</Text>
      <Text testID={`${testID}-error`}>{error || 'no error'}</Text>
      <Text testID={`${testID}-weather`}>
        {weather ? JSON.stringify(weather) : 'no weather'}
      </Text>
    </View>
  );
};

describe('WeatherContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('provides weather data and loading state', async () => {
    const mockWeatherData = {
      cityName: 'London',
      temperature: 15,
      condition: 'Cloudy',
      description: 'few clouds',
      icon: '02d',
    };

    mockedFetchWeather.mockResolvedValueOnce(mockWeatherData);

    let getWeatherFn: (cityName: string) => Promise<void>;
    const {getByTestId} = render(
      <WeatherProvider>
        <WeatherContext.Consumer>
          {value => {
            getWeatherFn = value.getWeather;
            return <TestComponent testID="test" />;
          }}
        </WeatherContext.Consumer>
      </WeatherProvider>,
    );

    expect(getByTestId('test-loading').props.children).toBe('false');
    expect(getByTestId('test-weather').props.children).toBe('no weather');

    await act(async () => {
      await getWeatherFn!('London');
    });

    await waitFor(() => {
      expect(getByTestId('test-loading').props.children).toBe('false');
      expect(getByTestId('test-weather').props.children).toBe(
        JSON.stringify(mockWeatherData),
      );
    });
  });

  test('handles errors correctly', async () => {
    mockedFetchWeather.mockRejectedValueOnce(new Error('City not found'));

    let getWeatherFn: (cityName: string) => Promise<void>;
    const {getByTestId} = render(
      <WeatherProvider>
        <WeatherContext.Consumer>
          {value => {
            getWeatherFn = value.getWeather;
            return <TestComponent testID="test" />;
          }}
        </WeatherContext.Consumer>
      </WeatherProvider>,
    );

    await act(async () => {
      await getWeatherFn!('InvalidCity');
    });

    await waitFor(() => {
      expect(getByTestId('test-loading').props.children).toBe('false');
      expect(getByTestId('test-error').props.children).toBe(
        'City not found or Try another city input for fetching weather data!',
      );
    });
  });
});