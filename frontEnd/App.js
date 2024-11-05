import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './screens/MainMenu';
import HomeScreen from './screens/SelectScreen';
import AlphabetDetailScreen from './screens/AlphabetTest';
import StartingScreen from './screens/StartScreen';
import { colors } from './screens/styles';
import NewPlayerScreen from './screens/NewPlayerScreen';
import ContinueScreen from './screens/ContinueScreen';
import { initDatabase } from './database';




// Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    initDatabase(); // Initialize the database when the app loads
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main Menu">
        <Stack.Screen 
        name="Main Menu" 
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
        name="Start or Continue" 
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
        name="Alphabet View" 
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
        name="Alphabet Test Screen" 
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
        <Stack.Screen 
        name="New Player Screen" 
        component={NewPlayerScreen} 
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
        name="Continue Screen" 
        component={ContinueScreen} 
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


