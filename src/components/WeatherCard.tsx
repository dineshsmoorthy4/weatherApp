import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {WeatherData, ThemeColors} from '../types';

interface WeatherCardProps {
  weather: WeatherData;
  theme: ThemeColors;
}

const WeatherCard: React.FC<WeatherCardProps> = ({weather, theme}) => {
  return (
    <View style={[styles.card, {backgroundColor: theme.cardBgColor}]}>
      <Text style={[styles.cityName, {color: theme.textColor}]}>
        {weather.cityName}
      </Text>
      <View style={styles.infoContainer}>
        <View style={styles.temperatureContainer}>
          <Text style={[styles.temperature, {color: theme.textColor}]}>
            {Math.round(weather.temperature)}°C
          </Text>
          <Text style={[styles.condition, {color: theme.textColor}]}>
            {weather.condition}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png`,
            }}
            style={styles.weatherIcon}
          />
        </View>
      </View>
      <Text style={[styles.description, {color: theme.textColor}]}>
        {weather.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 6,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  temperatureContainer: {
    flex: 1,
  },
  temperature: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 18,
    marginTop: 5,
  },
  iconContainer: {
    marginLeft: 20,
  },
  weatherIcon: {
    width: 120,
    height: 80,
  },
  description: {
    fontSize: 14,
    textTransform: 'capitalize',
    marginTop: 8,
  },
});

export default WeatherCard;