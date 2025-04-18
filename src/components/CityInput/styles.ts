import { StyleSheet } from 'react-native';
import { Theme } from './../../styles/theme';

export const styles = (theme: Theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 6,
    width: '98%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.border,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: theme.textPrimary,
    backgroundColor: theme.backgroundSecondary,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.backgroundSecondary,
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 10,
  },
});