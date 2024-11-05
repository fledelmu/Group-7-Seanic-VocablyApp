import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import {styles, colors} from './styles'

// Home Screen to display alphabet letters
function HomeScreen({ navigation }) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {alphabet.map((letter) => (
            <View key={letter} style={styles.letterContainer}>
              <Text
                style={styles.letter}
                onPress={() => navigation.navigate('Alphabet Test Screen', { letter })}
              >
                {letter}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }

export default HomeScreen;