// ContinueScreen.js
import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { styles, colors } from './styles';
import { getPlayers } from '../database'; // Assuming this function retrieves players from the database

function ContinueScreen({ navigation }) {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const playerList = await getPlayers();
      setPlayers(playerList);
    };

    fetchPlayers();
  }, []);

  const handleSelectPlayer = (player) => {
    // Navigate to the Alphabet Test Screen and pass the selected player
    navigation.navigate('AlphabetTestScreen', { player });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who's Playing?</Text>
      <ScrollView style={styles.scrollContainer}>
        {players.map((player, index) => (
          <TouchableOpacity
            key={index}
            style={styles.playerButton}
            onPress={() => handleSelectPlayer(player)}
          >
            <Text style={styles.playerText}>{player.name}</Text>
            <Text style={styles.playerText}>Last Letter: {player.lastLetter}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button
        title="Back to Start"
        color={colors.pastelBlue}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default ContinueScreen;
