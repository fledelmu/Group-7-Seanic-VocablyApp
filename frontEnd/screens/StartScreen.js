import React from 'react';
import { Text, View, Button } from 'react-native';
import {styles, colors} from './styles'

function StartingScreen({ navigation }) {
  return (
    <View style={styles.startingScreenContainer}>
      <Text style={styles.title}>Welcome to Vocably!</Text>
      <Text style={styles.instruction}>Ready to learn your letters?</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          color={colors.pastelBlue}
          title="Continue"
          onPress={() => navigation.navigate('ContinueScreen')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          color={colors.pastelBlue}
          title="New"
          onPress={() => navigation.navigate('New Student')}
        />
      </View>
    </View>
  );
}

export default StartingScreen;
