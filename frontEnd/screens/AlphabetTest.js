import React, { useState, useEffect } from 'react';
import { Text, View, Image, Button } from 'react-native';
import { postStudentData } from '../api';
import {styles, colors} from './styles'
import Student from '../classes/Student.js';


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
        { word: 'Bear', image: require('./assets/placeholder.png') },
        { word: 'Bee', image: require('./assets/placeholder.png') },
        { word: 'Bird', image: require('./assets/placeholder.png') },
      ],
      C: [
        { word: 'Cat', image: require('./assets/cat.png') },
        { word: 'Car', image: require('./assets/placeholder.png') },
        { word: 'Cake', image: require('./assets/placeholder.png') },
        { word: 'Cow', image: require('./assets/placeholder.png') },
      ],
      D: [
        { word: 'Dog', image: require('./assets/dog.png') },
        { word: 'Duck', image: require('./assets/placeholder.png') },
        { word: 'Drum', image: require('./assets/placeholder.png') },
        { word: 'Doll', image: require('./assets/placeholder.png') },
      ],
      E: [
        { word: 'Elephant', image: require('./assets/elephant.png') },
        { word: 'Egg', image: require('./assets/placeholder.png') },
        { word: 'Ear', image: require('./assets/placeholder.png') },
        { word: 'Eagle', image: require('./assets/placeholder.png') },
      ],
      F: [
        { word: 'Fish', image: require('./assets/fish.png') },
        { word: 'Frog', image: require('./assets/placeholder.png') },
        { word: 'Fan', image: require('./assets/placeholder.png') },
        { word: 'Fire', image: require('./assets/placeholder.png') },
      ],
      G: [
        { word: 'Giraffe', image: require('./assets/giraffe.png') },
        { word: 'Goat', image: require('./assets/placeholder.png') },
        { word: 'Grapes', image: require('./assets/placeholder.png') },
        { word: 'Girl', image: require('./assets/placeholder.png') },
      ],
      H: [
        { word: 'Horse', image: require('./assets/horse.png') },
        { word: 'Hat', image: require('./assets/placeholder.png') },
        { word: 'House', image: require('./assets/placeholder.png') },
        { word: 'Hand', image: require('./assets/placeholder.png') },
      ],
      I: [
        { word: 'Ice Cream', image: require('./assets/ice_cream.png') },
        { word: 'Igloo', image: require('./assets/placeholder.png') },
        { word: 'Insect', image: require('./assets/placeholder.png') },
        { word: 'Island', image: require('./assets/placeholder.png') },
      ],
      J: [
        { word: 'Juice', image: require('./assets/juice.png') },
        { word: 'Jump', image: require('./assets/placeholder.png') },
        { word: 'Jelly', image: require('./assets/placeholder.png') },
        { word: 'Jacket', image: require('./assets/placeholder.png') },
      ],
      K: [
        { word: 'Kite', image: require('./assets/kite.png') },
        { word: 'Kangaroo', image: require('./assets/placeholder.png') },
        { word: 'Key', image: require('./assets/placeholder.png') },
        { word: 'King', image: require('./assets/placeholder.png') },
      ],
      L: [
        { word: 'Lion', image: require('./assets/lion.png') },
        { word: 'Leaf', image: require('./assets/placeholder.png') },
        { word: 'Lamp', image: require('./assets/placeholder.png') },
        { word: 'Ladder', image: require('./assets/placeholder.png') },
      ],  
      M: [
        { word: 'Monkey', image: require('./assets/monkey.png') },
        { word: 'Moon', image: require('./assets/placeholder.png') },
        { word: 'Mouse', image: require('./assets/placeholder.png') },
        { word: 'Map', image: require('./assets/placeholder.png') },
      ],
      N: [
        { word: 'Nest', image: require('./assets/nest.png') },
        { word: 'Nose', image: require('./assets/placeholder.png') },
        { word: 'Nut', image: require('./assets/placeholder.png') },
        { word: 'Net', image: require('./assets/placeholder.png') },
      ],
      O: [
        { word: 'Orange', image: require('./assets/orange.png') },
        { word: 'Owl', image: require('./assets/placeholder.png') },
        { word: 'Ocean', image: require('./assets/placeholder.png') },
        { word: 'Octopus', image: require('./assets/placeholder.png') },
      ],
      P: [
        { word: 'Penguin', image: require('./assets/penguin.png') },
        { word: 'Pig', image: require('./assets/placeholder.png') },
        { word: 'Pencil', image: require('./assets/placeholder.png') },
        { word: 'Plane', image: require('./assets/placeholder.png') },
      ],
      Q: [
        { word: 'Queen', image: require('./assets/queen.png') },
        { word: 'Quail', image: require('./assets/placeholder.png') },
        { word: 'Quilt', image: require('./assets/placeholder.png') },
        { word: 'Quill', image: require('./assets/placeholder.png') },
      ],
      R: [
        { word: 'Rabbit', image: require('./assets/rabbit.png') },
        { word: 'Rainbow', image: require('./assets/placeholder.png') },
        { word: 'Robot', image: require('./assets/placeholder.png') },
        { word: 'Ring', image: require('./assets/placeholder.png') },
      ],
      S: [
        { word: 'Sun', image: require('./assets/sun.png') },
        { word: 'Snake', image: require('./assets/placeholder.png') },
        { word: 'Star', image: require('./assets/placeholder.png') },
        { word: 'Ship', image: require('./assets/placeholder.png') },
      ],
      T: [
        { word: 'Tiger', image: require('./assets/tiger.png') },
        { word: 'Tree', image: require('./assets/placeholder.png') },
        { word: 'Train', image: require('./assets/placeholder.png') },
        { word: 'Turtle', image: require('./assets/placeholder.png') },
      ],
      U: [
        { word: 'Umbrella', image: require('./assets/umbrella.png') },
        { word: 'Under', image: require('./assets/placeholder.png') },
        { word: 'Up', image: require('./assets/placeholder.png') },
        { word: 'Uniform', image: require('./assets/placeholder.png') },
      ],
      V: [
        { word: 'Violin', image: require('./assets/violin.png') },
        { word: 'Van', image: require('./assets/placeholder.png') },
        { word: 'Vase', image: require('./assets/placeholder.png') },
        { word: 'Vest', image: require('./assets/placeholder.png') },
      ],
      W: [
        { word: 'Whale', image: require('./assets/whale.png') },
        { word: 'Water', image: require('./assets/placeholder.png') },
        { word: 'Watch', image: require('./assets/placeholder.png') },
        { word: 'Window', image: require('./assets/placeholder.png') },
      ],
      X: [
        { word: 'Xylophone', image: require('./assets/xylophone.png') },
        { word: 'Box', image: require('./assets/placeholder.png') },
        { word: 'Fox', image: require('./assets/placeholder.png') },
        { word: 'Mix', image: require('./assets/placeholder.png') },
      ],
      Y: [
        { word: 'Yacht', image: require('./assets/yacht.png') },
        { word: 'Yo-yo', image: require('./assets/placeholder.png') },
        { word: 'Yellow', image: require('./assets/placeholder.png') },
        { word: 'Yarn', image: require('./assets/placeholder.png') },
      ],
      Z: [
        { word: 'Zebra', image: require('./assets/zebra.png') },
        { word: 'Zip', image: require('./assets/placeholder.png') },
        { word: 'Zoo', image: require('./assets/placeholder.png') },
        { word: 'Zipper', image: require('./assets/placeholder.png') },
      ],
    };
    //test
  
    const [wordIndex, setWordIndex] = useState(0);
    const [wrongTries, setWrongTries] = useState(0);

    const words = wordImageMap[initialLetter] || [];
    const currentWord = words[wordIndex];
  
    const [student, setStudent] = useState(new Student('test'));

    const handleCheck = () => {
      if (wordIndex < words.length - 1) {
        setWordIndex(prevIndex => prevIndex + 1);
        setWrongTries(0);
      } else {
        // Move to the next letter if current letter's words are exhausted
        const nextLetter = String.fromCharCode(initialLetter.charCodeAt(0) + 1);
        if (nextLetter <= 'Z'&& navigation) {
          navigation.navigate('Alphabet Test Screen', { letter: nextLetter });
          student.addScore();
          setWordIndex(0);
        } else {
          console.log("You've completed the alphabet!");
          // Optionally navigate to a completion screen or reset
        }
      }
    };
  
    const handleWrong = () => {
      if (wrongTries < 2) {
        setWrongTries(prevTries => prevTries + 1);
      } else {
        // After 3 wrong tries, move to the next word
        setWrongTries(0);
        if (wordIndex < words.length - 1) {
          setWordIndex(prevIndex => prevIndex + 1);
        } else {
          // Move to the next letter if current letter's words are exhausted
          const nextLetter = String.fromCharCode(initialLetter.charCodeAt(0) + 1);
          if (nextLetter <= 'Z'&&navigation) {
            navigation.navigate('Alphabet', { letter: nextLetter });
            student.addScore();
            setWordIndex(0);
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
          <Button 
          title="Check" 
          color={colors.pastelBlue}
          onPress={handleCheck} 
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
          title="Wrong" 
          color={colors.pastelBlue}
          onPress={handleWrong} 
          />
        </View>
      </View>
    );
  }
  
  export default AlphabetDetailScreen;