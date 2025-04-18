import React from 'react';
import { View, Text } from 'react-native';
import { useNetworkStatus } from '../hooks/useNetworkStatus';
import { useTheme } from '../context/ThemeContext';
import { globalStyles } from '../styles/globalStyles';

const NetworkStatus: React.FC = () => {
  const { isConnected } = useNetworkStatus();
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  if (isConnected) return null;

  return (
    <View style={styles.networkStatus}>
      <Text style={styles.networkStatusText}>No internet connection</Text>
    </View>
  );
};

export default NetworkStatus;