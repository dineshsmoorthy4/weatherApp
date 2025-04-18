import React from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../ThemeToggle/styles';
import {useTheme} from './../../context/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

const ThemeToggle: React.FC = () => {
  const {theme, isDarkMode, toggleTheme} = useTheme();
  const toggleStyles = styles(theme);

  return (
    <View style={toggleStyles.container}>
        <Text style={[toggleStyles.title, {color: theme.textColor}]}>
          Weather App
        </Text>
      <TouchableOpacity onPress={toggleTheme} style={toggleStyles.themeToggle}>
        <Icon
          name={isDarkMode ? 'sunny-outline' : 'moon-outline'}
          size={24}
          color={theme.textColor}
        />
      </TouchableOpacity>
      {/* <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        thumbColor={theme.primary}
        trackColor={{
          false: theme.backgroundSecondary,
          true: theme.backgroundSecondary,
        }}
      /> */}
    </View>
  );
};

export default ThemeToggle;
