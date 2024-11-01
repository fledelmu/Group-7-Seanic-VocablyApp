import React, { useState } from 'react';
import { Text, View, Image, Dimensions, ScrollView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

// Main Menu Screen
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
              onPress={() => navigation.navigate('Alphabet', { letter })}
            >
              {letter}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

// Alphabet Detail screen with swipe feature and check/wrong functionality
function AlphabetDetailScreen({ route, navigation }) {
  const { letter: initialLetter } = route.params;
  const wordImageMap = {
    A: [
      { word: 'Apple', image: require('./assets/apple.png') },
      { word: 'Ant', image: require('./assets/Ant.png') },
      { word: 'Alligator', image: require('./assets/Alligator.png') },
      { word: 'Airplane', image: require('./assets/Airplane.png') },
    ],
    B: [
      { word: 'Banana', image: require('./assets/banana.png') },
      { word: 'Bear', image: '' },
      { word: 'Bee', image: '' },
      { word: 'Bird', image: '' },
    ],
    C: [
      { word: 'Cat', image: require('./assets/cat.png') },
      { word: 'Car', image: '' },
      { word: 'Cake', image: '' },
      { word: 'Cow', image: '' },
    ],
    D: [
      { word: 'Dog', image: require('./assets/dog.png') },
      { word: 'Duck', image: '' },
      { word: 'Drum', image: '' },
      { word: 'Doll', image: '' },
    ],
    E: [
      { word: 'Elephant', image: require('./assets/elephant.png') },
      { word: 'Egg', image: '' },
      { word: 'Ear', image: '' },
      { word: 'Eagle', image: '' },
    ],
    F: [
      { word: 'Fish', image: require('./assets/fish.png') },
      { word: 'Frog', image: '' },
      { word: 'Fan', image: '' },
      { word: 'Fire', image: '' },
    ],
    G: [
      { word: 'Giraffe', image: require('./assets/giraffe.png') },
      { word: 'Goat', image: '' },
      { word: 'Grapes', image: '' },
      { word: 'Girl', image: '' },
    ],
    H: [
      { word: 'Horse', image: require('./assets/horse.png') },
      { word: 'Hat', image: '' },
      { word: 'House', image: '' },
      { word: 'Hand', image: '' },
    ],
    I: [
      { word: 'Ice Cream', image: require('./assets/ice_cream.png') },
      { word: 'Igloo', image: '' },
      { word: 'Insect', image: '' },
      { word: 'Island', image: '' },
    ],
    J: [
      { word: 'Juice', image: require('./assets/juice.png') },
      { word: 'Jump', image: '' },
      { word: 'Jelly', image: '' },
      { word: 'Jacket', image: '' },
    ],
    K: [
      { word: 'Kite', image: require('./assets/kite.png') },
      { word: 'Kangaroo', image: '' },
      { word: 'Key', image: '' },
      { word: 'King', image: '' },
    ],
    L: [
      { word: 'Lion', image: require('./assets/lion.png') },
      { word: 'Leaf', image: '' },
      { word: 'Lamp', image: '' },
      { word: 'Ladder', image: '' },
    ],
    M: [
      { word: 'Monkey', image: require('./assets/monkey.png') },
      { word: 'Moon', image: '' },
      { word: 'Mouse', image: '' },
      { word: 'Map', image: '' },
    ],
    N: [
      { word: 'Nest', image: require('./assets/nest.png') },
      { word: 'Nose', image: '' },
      { word: 'Nut', image: '' },
      { word: 'Net', image: '' },
    ],
    O: [
      { word: 'Orange', image: require('./assets/orange.png') },
      { word: 'Owl', image: '' },
      { word: 'Ocean', image: '' },
      { word: 'Octopus', image: '' },
    ],
    P: [
      { word: 'Penguin', image: require('./assets/penguin.png') },
      { word: 'Pig', image: '' },
      { word: 'Pencil', image: '' },
      { word: 'Plane', image: '' },
    ],
    Q: [
      { word: 'Queen', image: require('./assets/queen.png') },
      { word: 'Quail', image: '' },
      { word: 'Quilt', image: '' },
      { word: 'Quill', image: '' },
    ],
    R: [
      { word: 'Rabbit', image: require('./assets/rabbit.png') },
      { word: 'Rainbow', image: '' },
      { word: 'Robot', image: '' },
      { word: 'Ring', image: '' },
    ],
    S: [
      { word: 'Sun', image: require('./assets/sun.png') },
      { word: 'Snake', image: '' },
      { word: 'Star', image: '' },
      { word: 'Ship', image: '' },
    ],
    T: [
      { word: 'Tiger', image: require('./assets/tiger.png') },
      { word: 'Tree', image: '' },
      { word: 'Train', image: '' },
      { word: 'Turtle', image: '' },
    ],
    U: [
      { word: 'Umbrella', image: require('./assets/umbrella.png') },
      { word: 'Under', image: '' },
      { word: 'Up', image: '' },
      { word: 'Uniform', image: '' },
    ],
    V: [
      { word: 'Violin', image: require('./assets/violin.png') },
      { word: 'Van', image: '' },
      { word: 'Vase', image: '' },
      { word: 'Vest', image: '' },
    ],
    W: [
      { word: 'Whale', image: require('./assets/whale.png') },
      { word: 'Water', image: '' },
      { word: 'Watch', image: '' },
      { word: 'Window', image: '' },
    ],
    X: [
      { word: 'Xylophone', image: require('./assets/xylophone.png') },
      { word: 'Box', image: '' },
      { word: 'Fox', image: '' },
      { word: 'Mix', image: '' },
    ],
    Y: [
      { word: 'Yacht', image: require('./assets/yacht.png') },
      { word: 'Yo-yo', image: '' },
      { word: 'Yellow', image: '' },
      { word: 'Yarn', image: '' },
    ],
    Z: [
      { word: 'Zebra', image: require('./assets/zebra.png') },
      { word: 'Zip', image: '' },
      { word: 'Zoo', image: '' },
      { word: 'Zipper', image: '' },
    ],
  };
  //test

  const [wordIndex, setWordIndex] = useState(0);
  const [wrongTries, setWrongTries] = useState(0);

  const words = wordImageMap[initialLetter] || [];
  const currentWord = words[wordIndex];

  const handleCheck = () => {
    if (wordIndex < words.length - 1) {
      setWordIndex(wordIndex + 1);
      setWrongTries(0); // Reset wrong tries for the new word
    } else {
      // Move to the next letter if current letter's words are exhausted
      const nextLetter = String.fromCharCode(initialLetter.charCodeAt(0) + 1);
      if (nextLetter <= 'Z'&& navigation) {
        navigation.navigate('Alphabet', { letter: nextLetter });
      } else {
        console.log("You've completed the alphabet!");
        // Optionally navigate to a completion screen or reset
      }
    }
  };

  const handleWrong = () => {
    if (wrongTries < 2) {
      setWrongTries(wrongTries + 1);
    } else {
      // After 3 wrong tries, move to the next word
      setWrongTries(0);
      if (wordIndex < words.length - 1) {
        setWordIndex(wordIndex + 1);
      } else {
        // Move to the next letter if current letter's words are exhausted
        const nextLetter = String.fromCharCode(initialLetter.charCodeAt(0) + 1);
        if (nextLetter <= 'Z'&&navigation) {
          navigation.navigate('Alphabet', { letter: nextLetter });
        } else {
          console.log("You've completed the alphabet!");
          // Optionally navigate to a completion screen or reset
        }
      }
    }
  };

  return (
    <View style={styles.detailContainer}>
      <View style={styles.topCenterLetter}>
        <Text style={styles.letterTopCenter}>{initialLetter}</Text>
      </View>
      <View style={styles.wordContainer}>
        {currentWord && (
          <>
            <Image source={currentWord.image} style={styles.image} />
            <Text style={styles.wordText}>{currentWord.word}</Text>
          </>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Check" onPress={handleCheck} />
        <Button title="Wrong" onPress={handleWrong} />
      </View>
    </View>
  );
}

// Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="Main Menu" component={MainMenuScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alphabet" component={AlphabetDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}