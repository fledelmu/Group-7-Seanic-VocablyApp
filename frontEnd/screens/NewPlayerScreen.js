// NewPlayerScreen.js
import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { styles, colors } from './styles';
import { addPlayer } from '../database'; // Assuming this function adds a player to the database

function NewPlayerScreen({ navigation }) {
  const [name, setName] = useState('');

  const handleAddPlayer = async () => {
    if (name.trim()) {
      await addPlayer(name); // Adds player to the database
      setName('');
      navigation.navigate('AlphabetTestScreen'); // Navigates to the test screen
    } else {
      Alert.alert("Please enter a name");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Start"
        color={colors.pastelBlue}
        onPress={handleAddPlayer}
      />
    </View>
  );
}

export default NewPlayerScreen;
