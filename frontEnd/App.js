import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenuScreen from './screens/MainMenu';
import HomeScreen from './screens/SelectScreen';
import AlphabetDetailScreen from './screens/AlphabetTest';
import StartingScreen from './screens/StartScreen';
import { colors } from './screens/styles';
import NewStudentScreen from './screens/NewStudentScreen';
import { createTable } from './localDB';

// Stack Navigator
const Stack = createStackNavigator();

// Common header options
const headerOptions = {
  headerStyle: {
    backgroundColor: colors.pastelGreen,
  },
  headerTintColor: colors.darkBrown,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function App() {
  useEffect(() => {
    // Create the table on app initialization
    const initializeDatabase = async () => {
      try {
        await createTable();
        console.log('Database initialized and table created.');
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };

    initializeDatabase();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen 
          name="MainMenu" 
          component={MainMenuScreen} 
          options={{
            headerStyle: {
              backgroundColor: colors.white,
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
          options={headerOptions} 
        /> 
        <Stack.Screen 
          name="AlphabetView" 
          component={HomeScreen} 
          options={headerOptions} 
        />
        <Stack.Screen 
          name="AlphabetTestScreen" 
          component={AlphabetDetailScreen} 
          options={headerOptions} 
        />
        <Stack.Screen
          name="New Student"
          component={NewStudentScreen}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
