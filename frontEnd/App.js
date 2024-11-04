import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './screens/MainMenu';
import HomeScreen from './screens/SelectScreen';
import AlphabetDetailScreen from './screens/AlphabetTest';
import StartingScreen from './screens/StartScreen';
import { colors } from './screens/styles';

// Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen 
        name="MainMenu" 
        component={MainMenuScreen} 
        options={{
          headerStyle: {
            backgroundColor: '#FFFF', 
          },
          headerTintColor: colors.black, 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
        /> 
        <Stack.Screen 
        name="StartorContinue" 
        component={StartingScreen} 
        options={{
          headerStyle: {
            backgroundColor: colors.pastelGreen, 
          },
          headerTintColor: colors.darkBrown, 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
        /> 
        <Stack.Screen 
        name="AlphabetView" 
        component={HomeScreen} 
        options={{
          headerStyle: {
            backgroundColor: colors.pastelGreen, 
          },
          headerTintColor: colors.darkBrown, 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen 
        name="AlphabetTestScreen" 
        component={AlphabetDetailScreen} 
        options={{
          headerStyle: {
            backgroundColor: colors.pastelGreen, 
          },
          headerTintColor: colors.darkBrown, 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}