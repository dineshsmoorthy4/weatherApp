import { StyleSheet } from 'react-native';
import { Theme } from './../../styles/theme';

export const styles = (theme: Theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    marginTop: 20,
    marginHorizontal: 10
  },
  themeToggle: {
    padding: 5,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});