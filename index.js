// Import necessary modules from Expo and React
import { registerRootComponent } from 'expo';
import React from 'react';
import { AppRegistry } from 'react-native';

// Import your main component
import App from './App'; // Assuming your main component file is named App.js and is located in the same directory

// Register the main component using registerRootComponent
registerRootComponent(App);

// AppRegistry.registerComponent('YourAppName', () => App);
// ^ This line is no longer necessary when using expo.registerRootComponent

// No need to export anything from this file
