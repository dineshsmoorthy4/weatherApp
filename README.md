# Weather App

A React Native Weather App built with TypeScript that fetches and displays weather data from the OpenWeatherMap API. The app supports both iOS and Android platforms and includes comprehensive type safety.

## Features

- Search for cities and view their current weather
- Display of weather information including:
  - City name
  - Current temperature
  - Weather condition (e.g., "Cloudy", "Sunny")
  - Weather icon
- Error handling for city not found
- Persistent storage of the last searched city
- Dark mode toggle
- Cross-platform support (iOS and Android)
- Full TypeScript implementation with type safety

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- OpenWeatherMap API key

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dineshsmoorthy4/weatherApp.git
   cd weatherApp
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. For iOS, install pods:
   ```bash
   cd ios && pod install && cd ..
   ```

4. Run the application:
   
   For iOS:
   ```bash
   npx react-native run-ios
   ```
   
   For Android:
   ```bash
   npx react-native run-android
   ```

## Project Structure

```
weather-app/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CityInput/
│   │   │   ├── CityInput.tsx
│   │   │   └── styles.ts
│   │   ├── WeatherCard/
│   │   │   ├── WeatherCard.tsx
│   │   │   └── styles.ts
│   │   └── ThemeToggle/
│   │       ├── ThemeToggle.tsx
│   │       └── styles.ts
│   ├── config/
│   │   └── constants.ts
│   ├── context/
│   │   ├── ThemeContext.tsx
│   │   └── WeatherContext.tsx
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   ├── useNetworkStatus.ts
│   │   └── useWeather.ts
│   ├── services/
│   │   ├── api.ts
│   │   └── weatherService.ts
│   ├── styles/
│   │   ├── globalStyles.ts
│   │   └── theme.ts
│   ├── types/
│   │   └── weatherTypes.ts
│   ├── utils/
│   │   ├── helpers.ts
│   │   └── storage.ts
│   ├── App.tsx
│   └── HomeScreen.tsx
├── __tests__/
│   ├── components/
│   └── hooks/
├── .env
├── app.json
├── babel.config.js
├── metro.config.js
├── package.json
└── README.md
```

## Architectural Decisions

### TypeScript Implementation

- Used TypeScript for all components and services to ensure type safety and better developer experience
- Created dedicated type definitions for API responses, component props, and context states
- Properly typed React Context providers and consumers

### State Management

- Used React Context API with TypeScript for type-safe state management
- Created separate contexts for weather data and theme management
- Implemented proper typing for all context values and functions

### API Service

- Created a typed API service module for communication with OpenWeatherMap
- Used axios for HTTP requests with TypeScript type definitions for responses
- Implemented error handling with proper TypeScript types

### Theme Support

- Created a fully typed ThemeContext for managing dark/light mode preferences
- Used AsyncStorage to persist theme settings
- Applied type-safe theme styles throughout the app

### Testing

- Added typed unit tests using TypeScript, Jest, and React Testing Library
- Included mock implementations with proper TypeScript typing

### AsyncStorage

- Used AsyncStorage with TypeScript for type-safe data persistence
- Implemented proper error handling for async operations

## Testing

Run the tests with:
```bash
npm test
# or
yarn test
```

## Benefits of TypeScript

- **Type Safety**: Catches common errors during development rather than at runtime
- **Improved IDE Support**: Better autocompletion, type checking, and refactoring capabilities
- **Self-Documenting Code**: Types serve as documentation for component props and function parameters
- **Easier Maintenance**: Type definitions make it easier to understand and refactor code
- **Better Team Collaboration**: Clear interfaces between components and modules

## Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


## License
This project is licensed under the MIT © 2025 License.

## Developed with ❤️ by [Dinesh.Smoorthy](https://www.dineshsmoorthy.com)
