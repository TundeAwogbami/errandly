import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/app-navigator';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#000000" 
      />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

export { App };