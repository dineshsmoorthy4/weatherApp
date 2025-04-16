Weather App

A React Native Weather App built with TypeScript that fetches and displays weather data from the OpenWeatherMap API. The app supports both iOS and Android platforms and includes comprehensive type safety.
Features

Search for cities and view their current weather
Display of weather information including:

City name
Current temperature
Weather condition (e.g., "Cloudy", "Sunny")
Weather icon


Error handling for city not found
Persistent storage of the last searched city
Dark mode toggle
Cross-platform support (iOS and Android)
Full TypeScript implementation with type safety.

Prerequisites

Node.js (v14 or later)
npm or yarn
React Native CLI
Xcode (for iOS development)
Android Studio (for Android development)
OpenWeatherMap API key

Installation

Clone the repository:
bashgit clone https://github.com/yourusername/weatherApp.git
cd weatherApp

Install dependencies:
bash npm install
# or
yarn install

Open the src/services/weatherService.ts file and replace YOUR_API_KEY with your actual OpenWeatherMap API key.
For iOS, install pods:
bashcd ios && pod install && cd ..

Run the application:
For iOS:
bash npx react-native run-ios
For Android:
bash npx react-native run-android

Project Structure
weather-app-ts/
├── android/
├── ios/
├── src/
│   ├── components/   
│   │   └── WeatherCard.tsx
│   ├── context/      
│   │   ├── ThemeContext.tsx
│   │   └── WeatherContext.tsx
│   ├── hooks/        
│   │   ├── useTheme.ts
│   │   └── useWeather.ts
│   ├── screens/      
│   │   └── HomeScreen.tsx
│   ├── services/     
│   │   └── weatherService.ts
│   ├── types/       
│   │   └── index.ts
│   └── utils/        
├── __tests__/        # Test files
├── App.tsx
├── index.js
├── tsconfig.json
├── package.json
└── README.md

Architectural Decisions
TypeScript Implementation

- Used TypeScript for all components and services to ensure type safety and better developer experience
- Created dedicated type definitions for API responses, component props, and context states
- Properly typed React Context providers and consumers

State Management

- Used React Context API with TypeScript for type-safe state management
- Created separate contexts for weather data and theme management
- Implemented proper typing for all context values and functions

API Service

- Created a typed API service module for communication with OpenWeatherMap
- Used axios for HTTP requests with TypeScript type definitions for responses
- Implemented error handling with proper TypeScript types

Theme Support

- Created a fully typed ThemeContext for managing dark/light mode preferences
- Used AsyncStorage to persist theme settings
- Applied type-safe theme styles throughout the app

Testing

- Added typed unit tests using TypeScript, Jest, and React Testing Library
- Included mock implementations with proper TypeScript typing

AsyncStorage

- Used AsyncStorage with TypeScript for type-safe data persistence
- Implemented proper error handling for async operations

Testing

Run the tests with:
bash npm test
# or
yarn test

Benefits of TypeScript

- Type Safety: Catches common errors during development rather than at runtime
- Improved IDE Support: Better autocompletion, type checking, and refactoring capabilities
- Self-Documenting Code: Types serve as documentation for component props and function parameters
- Easier Maintenance: Type definitions make it easier to understand and refactor code
- Better Team Collaboration: Clear interfaces between components and modules

Future Improvements

- Add a 5-day forecast with TypeScript interfaces for the forecast data
- Implement geolocation with typed APIs
- Add more detailed weather information with proper typing
- Implement animations for weather conditions
- Add unit tests for all components and services
- Support for multiple languages with typed translation keys

# Learn More
To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
