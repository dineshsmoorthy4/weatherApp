import { StyleSheet } from 'react-native';
import { Theme } from '../styles/theme';

export const globalStyles = (theme: Theme) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.background,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.background,
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  errorContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFEBEE',
    borderRadius: 8,
  },
  errorText: {
    color: '#D32F2F',
    textAlign: 'center',
  },
  networkStatus: {
    padding: 10,
    backgroundColor: '#FFF3E0',
    borderRadius: 8,
    marginBottom: 15,
  },
  networkStatusText: {
    color: '#E65100',
    textAlign: 'center',
  },
});