export interface Theme {
    primary: string;
    background: string;
    backgroundSecondary: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
    cardBackground: string;
    textColor: string;
  }
  
  export const lightTheme: Theme = {
    primary: '#4285F4',
    background: '#FFFFFF',
    backgroundSecondary: '#F5F5F5',
    textPrimary: '#333333',
    textSecondary: '#666666',
    border: '#E0E0E0',
    cardBackground: '#FFFFFF',
    textColor: '#000000',
    
  };
  
  export const darkTheme: Theme = {
    primary: '#8AB4F8',
    background: '#121212',
    backgroundSecondary: '#1E1E1E',
    textPrimary: '#E0E0E0',
    textSecondary: '#9E9E9E',
    border: '#333333',
    cardBackground: '#1E1E1E',
    textColor: '#FFFFFF',
  };