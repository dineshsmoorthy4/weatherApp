import 'react-native-gesture-handler/jestSetup';

// Optional: suppress specific console warnings if needed
jest.mock('react-native/Libraries/Animated/NativeAnimatedModule', () => ({
  // Mock out the animated timing and other methods if needed
  timing: jest.fn(),
  spring: jest.fn(),
  decay: jest.fn(),
  // Add more mocks here as needed
}));