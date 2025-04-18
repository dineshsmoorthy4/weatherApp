import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../CityInput/styles';
import { useTheme } from './../../context/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CityInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
}

const CityInput: React.FC<CityInputProps> = ({ value, onChangeText, onSubmitEditing }) => {
  const { theme } = useTheme();
  const inputStyles = styles(theme);

  return (
    <View style={inputStyles.container}>
      <TextInput
        style={inputStyles.input}
        placeholder="Enter city name"
        placeholderTextColor={theme.textSecondary}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity 
        style={inputStyles.button} 
        onPress={onSubmitEditing}
        disabled={!value.trim()}
      >
        <Icon name="search" size={24} color={theme.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default CityInput;