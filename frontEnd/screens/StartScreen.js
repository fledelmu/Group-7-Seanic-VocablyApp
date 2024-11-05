// StartingScreen.js
import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles, colors } from './styles';

function StartingScreen({ navigation }) {
  return (
    <View style={styles.startingScreenContainer}>
      <Text style={styles.title}>Welcome to the Alphabet Learning App!</Text>
      <Text style={styles.instruction}>Get ready to learn your letters.</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          color={colors.pastelBlue}
          title="Continue"
          onPress={() => navigation.navigate('Continue Screen')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          color={colors.pastelBlue}
          title="New"
          onPress={() => navigation.navigate('New Player Screen')}
        />
      </View>
    </View>
  );
}

export default StartingScreen;
