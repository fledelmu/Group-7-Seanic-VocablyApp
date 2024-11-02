import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

function MainMenuScreen({ navigation }) {
  return (
    <View style={styles.mainMenuContainer}>
      <Text style={styles.title}>Alphabet Learning App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Start (A)"
          onPress={() => navigation.navigate('Alphabet', { letter: 'A' })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Selection"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

export default MainMenuScreen;