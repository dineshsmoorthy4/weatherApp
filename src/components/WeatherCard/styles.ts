import { StyleSheet } from 'react-native';
import { Theme } from './../../styles/theme';

export const styles = (theme: Theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.cardBackground,
    borderRadius: 12,
    padding: 20,
    marginVertical: 16,
    marginHorizontal: 20,
    width: '98%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 10,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.textPrimary,
    marginBottom: 10,
    textAlign: 'center',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: '300',
    color: theme.textPrimary,
    marginRight: 10,
  },
  icon: {
    width: 120,
    height: 80,
  },
  condition: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.textPrimary,
    textAlign: 'center',
    marginTop: 5,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 16,
    color: theme.textSecondary,
    textAlign: 'center',
    marginTop: 5,
    textTransform: 'capitalize',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: theme.border,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: theme.textSecondary,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.textPrimary,
  },
});