const fs = require('fs');
const path = require('path');

const folders = [
  'src/assets',
  'src/components',
  'src/screens',
  'src/navigation',
  'src/context',
  'src/services',
  'src/utils',
  'src/styles',
];

const files = {
  'src/screens/HomeScreen.js': `
  import React from 'react';
  import { View, Text } from 'react-native';
  const HomeScreen = () => (
    <View><Text>Home Screen</Text></View>
  );
  export default HomeScreen;
  `,
  'src/navigation/StackNavigator.js': `
  import React from 'react';
  import { createStackNavigator } from '@react-navigation/stack';
  import HomeScreen from '../screens/HomeScreen';
  const Stack = createStackNavigator();
  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
  export default StackNavigator;
  `,
  'src/context/AppContext.js': `
  import React from 'react';
  export const AppContext = React.createContext();
  `,
  'src/services/api.js': 'export const api = {};',
  'src/utils/helpers.js': 'export const helpers = {};',
  'src/styles/globalStyles.js': 'export const globalStyles = {};'
};

// Create folders
folders.forEach(folder => {
  fs.mkdirSync(folder, { recursive: true });
});

// Create files
Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(__dirname, filePath), content.trim());
});

console.log('Custom project structure created successfully!');
