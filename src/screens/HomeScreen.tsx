import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useWeather } from '../hooks/useWeather';
import { useTheme } from '../context/ThemeContext';
import CityInput from '../components/CityInput/CityInput';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import ErrorMessage from '../components/ErrorMessage';
import NetworkStatus from '../components/NetworkStatus';
import { globalStyles } from '../styles/globalStyles';

const HomeScreen = () => {
  const { city, setCity, weather, loading, error, fetchWeather } = useWeather();
  const { theme } = useTheme();
  const styles = globalStyles(theme);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (weather !== null || error) {
      setInitialLoad(false);
      setCity('');
    }
  }, [weather, error]);

  if (initialLoad) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.primary} />
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled"
      >
        <ThemeToggle />
        <NetworkStatus />
        <CityInput
          value={city}
          onChangeText={setCity}
          onSubmitEditing={() => fetchWeather(city)}
        />
        
        {loading && <ActivityIndicator size="large" color={theme.primary} />}
        
        {error ? (
          <ErrorMessage message={error} />
        ) : (
          weather && <WeatherCard weather={weather} />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;