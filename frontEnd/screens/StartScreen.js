import React from 'react';
import { Text, View, Button } from 'react-native';
import {styles, colors} from './styles'

function StartingScreen({ navigation }) {
  return (
    <View style={styles.startingScreenContainer}>
      <Text style={styles.title}>Welcome to the Alphabet Learning App!</Text>
      <Text style={styles.instruction}>Get ready to learn your letters.</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          onPress={() => navigation.navigate('Alphabet', { letter: 'A' })}
        />
      </View>
    </View>
  );
}

export default StartingScreen;
