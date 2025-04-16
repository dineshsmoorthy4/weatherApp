import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {WeatherContext} from '../context/WeatherContext';
import {ThemeContext} from '../context/ThemeContext';
import WeatherCard from '../components/WeatherCard';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen: React.FC = () => {
  const {city, setCity, weather, loading, error, getWeather} =
    useContext(WeatherContext);
  const {isDarkMode, toggleTheme, theme} = useContext(ThemeContext);
  const [inputCity, setInputCity] = useState<string>(city);

  const handleSearch = async () => {
    const trimmedCity = inputCity.trim();
    if (!trimmedCity) return;
    try {
      setCity(trimmedCity);
      await getWeather(trimmedCity);
      setInputCity('');
    } catch (error) {
      console.error('Error searching for weather:', error);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        {backgroundColor: theme.backgroundColor},
      ]}>
      <View style={styles.header}>
        <Text style={[styles.title, {color: theme.textColor}]}>
          Weather App
        </Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
          <Icon
            name={isDarkMode ? 'sunny-outline' : 'moon-outline'}
            size={24}
            color={theme.textColor}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={[
            styles.input,
            {backgroundColor: theme.inputBgColor, color: theme.textColor},
          ]}
          placeholder="Enter city name"
          placeholderTextColor={isDarkMode ? '#AAAAAA' : '#666666'}
          value={inputCity}
          onChangeText={setInputCity}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity
          style={[styles.button, {opacity: loading ? 0.7 : 1}]}
          onPress={handleSearch}
          disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Icon name="search-sharp" size={30} color="#FFFFFF" />
            // <Text style={styles.buttonText}>Search</Text>
          )}
        </TouchableOpacity>
      </View>

      {error && (
        <Text style={[styles.errorText, {color: '#FF6B6B'}]}>{error}</Text>
      )}

      {weather && !error && <WeatherCard weather={weather} theme={theme} />}

      {!weather && !error && !loading && (
        <View style={styles.placeholderContainer}>
          <Icon name="cloud-outline" size={100} color={theme.textColor} />
          <Text style={[styles.placeholderText, {color: theme.textColor}]}>
            Search for a city to see the weather
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  themeToggle: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  placeholderText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen;
