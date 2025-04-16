module.exports = {
  preset: 'react-native',
  setupFiles: [
    './jest.setup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-navigation' +
      '|@react-native' +
      '|react-native-safe-area-context' +
      '|@react-native-community' +
      ')/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};