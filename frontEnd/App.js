import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './screens/MainMenu';
import HomeScreen from './screens/SelectScreen';
import AlphabetDetailScreen from './screens/AlphabetTest';
import StartingScreen from './screens/StartScreen';

// Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="Main Menu" component={MainMenuScreen} />
        <Stack.Screen name="Starting" component={StartingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alphabet" component={AlphabetDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}