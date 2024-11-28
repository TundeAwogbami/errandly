<<<<<<< HEAD
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../src/screens/LoadingScreen';
import SplashScreen from '../src/screens/SplashScreen';
import WelcomeScreen from '../src/screens/WelcomeScreen';
import SignupScreen from '../src/screens/SignupScreen';
import CreateOrderScreen from '../src/screens/CreateOrderScreen';
import TrackOrderScreen from '../src/screens/TrackOrderScreen';
=======
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "../src/screens/LoadingScreen";
import SplashScreen from "../src/screens/SplashScreen";
import WelcomeScreen from "../src/screens/WelcomeScreen";
import SignupScreen from "../src/screens/SignupScreen";
import CreateOrderScreen from "../src/screens/CreateOrderScreen";
import TrackOrderScreen from "../src/screens/TrackOrderScreen";
>>>>>>> bccefae217d5b32f1e65d2c17e70ee0225dc28ca

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Loading"
        component={LoadingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateOrder"
        component={CreateOrderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TrackOrder"
        component={TrackOrderScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
