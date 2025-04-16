import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';
import {useColorScheme, StatusBar} from 'react-native';

// Mock useColorScheme
jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock StatusBar to inspect props
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return null;
});

// Clear mock between tests
afterEach(() => {
  jest.clearAllMocks();
});

describe('App Component', () => {
  it('renders HomeScreen component inside navigation stack', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');
    const {getByTestId} = render(<App />);
    expect(getByTestId('home-screen')).toBeTruthy();
  });

  it('sets StatusBar to dark-content in light mode', () => {
    (useColorScheme as jest.Mock).mockReturnValue('light');
    render(<App />);
    expect(StatusBar).toHaveBeenCalledWith(
      expect.objectContaining({barStyle: 'dark-content'}),
      {}
    );
  });

  it('sets StatusBar to light-content in dark mode', () => {
    (useColorScheme as jest.Mock).mockReturnValue('dark');
    render(<App />);
    expect(StatusBar).toHaveBeenCalledWith(
      expect.objectContaining({barStyle: 'light-content'}),
      {}
    );
  });
});