import React from 'react';
import { Text, View, Button } from 'react-native';
import { mainMenuStyles, colors } from './styles';

function MainMenuScreen({ navigation }) {
  return (
    <View style={mainMenuStyles.mainMenuContainer}>
      <Text style={mainMenuStyles.title}>Alphabet Learning {'\n'} App</Text>
      <View style={mainMenuStyles.buttonContainer}>
        <Button
          color={colors.darkBrown} 
          title="Start (A)"
          onPress={() => navigation.navigate('Starting')}
        />
      </View>
      <View style={mainMenuStyles.buttonContainer}>
        <Button
          color={colors.darkBrown} 
          title="Selection"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

export default MainMenuScreen;