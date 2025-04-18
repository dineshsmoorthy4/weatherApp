import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../WeatherCard/styles';
import { WeatherData } from '../../types/weatherTypes';
import { useTheme } from '../../context/ThemeContext';

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const { theme } = useTheme();
  const cardStyles = styles(theme);

  return (
    <View style={cardStyles.container}>
      <Text style={cardStyles.city}>{weather.name}</Text>
      <View style={cardStyles.tempContainer}>
        <Text style={cardStyles.temperature}>
          {Math.round(weather.main.temp)}°C
        </Text>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
            }}
            style={cardStyles.icon}
          />
      </View>
      <Text style={cardStyles.condition}>{weather.weather[0].main}</Text>
      <Text style={cardStyles.description}>{weather.weather[0].description}</Text>
    </View>
  );
};

export default WeatherCard;