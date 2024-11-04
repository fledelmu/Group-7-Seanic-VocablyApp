import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles, colors } from './styles';

function MainMenuScreen({ navigation }) {
  return (
    <View style={styles.mainMenuContainer}>
      <Text style={styles.title}>Alphabet Learning {'\n'} App</Text>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.pastelBlue} 
          title="Start (A)"
          onPress={() => navigation.navigate('StartorContinue')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={colors.pastelBlue} 
          title="Selection"
          onPress={() => navigation.navigate('AlphabetView')}
        />
      </View>
    </View>
  );
}

export default MainMenuScreen;