import React, { useState } from 'react';
import { Text, View, Image, Button, Alert } from 'react-native';
import { styles, colors } from './styles';

function AlphabetViewScreen({ route, navigation }) {
  const { letter: initialLetter } = route.params;  // The letter passed from previous screen
  const wordImageMap = {
    A: [
      { word: 'Apple', image: require('./assets/apple.png') },
      { word: 'Ant', image: require('./assets/Ant.png') },
      { word: 'Alligator', image: require('./assets/Alligator.png') },
      { word: 'Airplane', image: require('./assets/Airplane.png') },
    ],
    B: [
      { word: 'Banana', image: require('./assets/banana.png') },
      { word: 'Bear', image: require('./assets/bear.png') },
      { word: 'Bee', image: require('./assets/bee.png') },
      { word: 'Bird', image: require('./assets/bird.png') },
    ],
    C: [
      { word: 'Cat', image: require('./assets/cat.png') },
      { word: 'Car', image: require('./assets/car.png') },
      { word: 'Cake', image: require('./assets/cake.png') },
      { word: 'Cow', image: require('./assets/cow.png') },
    ],
    D: [
      { word: 'Dog', image: require('./assets/dog.png') },
      { word: 'Duck', image: require('./assets/duck.png') },
      { word: 'Drum', image: require('./assets/drum.png') },
      { word: 'Doll', image: require('./assets/doll.png') },
    ],
    E: [
      { word: 'Elephant', image: require('./assets/elephant.png') },
      { word: 'Egg', image: require('./assets/egg.png') },
      { word: 'Ear', image: require('./assets/ear.png') },
      { word: 'Eagle', image: require('./assets/eagle.png') },
    ],
    F: [
      { word: 'Fish', image: require('./assets/fish.png') },
      { word: 'Frog', image: require('./assets/frog.png') },
      { word: 'Fan', image: require('./assets/fan.png') },
      { word: 'Fire', image: require('./assets/fire.png') },
    ],
    G: [
      { word: 'Giraffe', image: require('./assets/giraffe.png') },
      { word: 'Goat', image: require('./assets/goat.png') },
      { word: 'Grapes', image: require('./assets/grapes.png') },
      { word: 'Girl', image: require('./assets/girl.png') },
    ],
    H: [
      { word: 'Horse', image: require('./assets/horse.png') },
      { word: 'Hat', image: require('./assets/hat.png') },
      { word: 'House', image: require('./assets/house.png') },
      { word: 'Hand', image: require('./assets/hand.png') },
    ],
    I: [
      { word: 'Ice Cream', image: require('./assets/ice_cream.png') },
      { word: 'Igloo', image: require('./assets/igloo.png') },
      { word: 'Insect', image: require('./assets/insect.png') },
      { word: 'Island', image: require('./assets/island.png') },
    ],
    J: [
      { word: 'Juice', image: require('./assets/juice.png') },
      { word: 'Jump', image: require('./assets/jump.png') },
      { word: 'Jelly', image: require('./assets/jelly.png') },
      { word: 'Jacket', image: require('./assets/jacket.png') },
    ],
    K: [
      { word: 'Kite', image: require('./assets/kite.png') },
      { word: 'Kangaroo', image: require('./assets/kangaroo.png') },
      { word: 'Key', image: require('./assets/key.png') },
      { word: 'King', image: require('./assets/king.png') },
    ],
    L: [
      { word: 'Lion', image: require('./assets/lion.png') },
      { word: 'Leaf', image: require('./assets/leaf.png') },
      { word: 'Lamp', image: require('./assets/lamp.png') },
      { word: 'Ladder', image: require('./assets/ladder.png') },
    ],  
    M: [
      { word: 'Monkey', image: require('./assets/monkey.png') },
      { word: 'Moon', image: require('./assets/moon.png') },
      { word: 'Mouse', image: require('./assets/mouse.png') },
      { word: 'Map', image: require('./assets/map.png') },
    ],
    N: [
      { word: 'Nest', image: require('./assets/nest.png') },
      { word: 'Nose', image: require('./assets/nose.png') },
      { word: 'Nut', image: require('./assets/nuts.png') },
      { word: 'Net', image: require('./assets/net.png') },
    ],
    O: [
      { word: 'Orange', image: require('./assets/orange.png') },
      { word: 'Owl', image: require('./assets/owl.png') },
      { word: 'Ocean', image: require('./assets/ocean.png') },
      { word: 'Octopus', image: require('./assets/octopus.png') },
    ],
    P: [
      { word: 'Penguin', image: require('./assets/penguin.png') },
      { word: 'Pig', image: require('./assets/pig.png') },
      { word: 'Pencil', image: require('./assets/pencil.png') },
      { word: 'Plane', image: require('./assets/plane.png') },
    ],
    Q: [
      { word: 'Queen', image: require('./assets/queen.png') },
      { word: 'Quail', image: require('./assets/quail.png') },
      { word: 'Quilt', image: require('./assets/quilt.png') },
      { word: 'Quill', image: require('./assets/quill.png') },
    ],
    R: [
      { word: 'Rabbit', image: require('./assets/rabbit.png') },
      { word: 'Rainbow', image: require('./assets/rainbow.png') },
      { word: 'Robot', image: require('./assets/ROBOT.png') },
      { word: 'Ring', image: require('./assets/ring.png') },
    ],
    S: [
      { word: 'Sun', image: require('./assets/sun.png') },
      { word: 'Snake', image: require('./assets/snake.png') },
      { word: 'Star', image: require('./assets/star.png') },
      { word: 'Ship', image: require('./assets/ship.png') },
    ],
    T: [
      { word: 'Tiger', image: require('./assets/tiger.png') },
      { word: 'Tree', image: require('./assets/tree.png') },
      { word: 'Train', image: require('./assets/train.png') },
      { word: 'Turtle', image: require('./assets/turtle.png') },
    ],
    U: [
      { word: 'Umbrella', image: require('./assets/umbrella.png') },
      { word: 'Under', image: require('./assets/under.png') },
      { word: 'Up', image: require('./assets/up.png') },
      { word: 'Uniform', image: require('./assets/uniform.png') },
    ],
    V: [
      { word: 'Violin', image: require('./assets/violin.png') },
      { word: 'Van', image: require('./assets/van.png') },
      { word: 'Vase', image: require('./assets/vase.png') },
      { word: 'Vest', image: require('./assets/vest.png') },
    ],
    W: [
      { word: 'Whale', image: require('./assets/whale.png') },
      { word: 'Water', image: require('./assets/water.png') },
      { word: 'Watch', image: require('./assets/watch.png') },
      { word: 'Window', image: require('./assets/widow.png') },
    ],
    X: [
      { word: 'Xylophone', image: require('./assets/xylophone.png') },
      { word: 'X-ray', image: require('./assets/x-ray.png') },
      { word: 'Xerox', image: require('./assets/xerox.png') },
      { word: 'Xylo', image: require('./assets/xylo.png') },
    ],
    Y: [
      { word: 'Yacht', image: require('./assets/yacht.png') },
      { word: 'Yo-yo', image: require('./assets/yoyo.png') },
      { word: 'Yellow', image: require('./assets/yellow.png') },
      { word: 'Yarn', image: require('./assets/yarn.png') },
    ],
    Z: [
      { word: 'Zebra', image: require('./assets/zebra.png') },
      { word: 'Zip', image: require('./assets/zip.png') },
      { word: 'Zoo', image: require('./assets/zoo.png') },
      { word: 'Zipper', image: require('./assets/zipp1.png') },
    ],
  };

  const [wordIndex, setWordIndex] = useState(0);

  const words = wordImageMap[initialLetter] || [];
  const currentWord = words[wordIndex];

  const handleNext = () => {
    if (wordIndex < words.length - 1) {
      setWordIndex(prevIndex => prevIndex + 1);
    } else {
      // Navigate to the next letter
      const nextLetter = String.fromCharCode(initialLetter.charCodeAt(0) + 1);
      if (nextLetter <= 'Z' && navigation) {
        navigation.navigate('AlphabetPreview', { letter: nextLetter });
        setWordIndex(0); // Reset word index for the new letter
      } else {
        console.log("You've completed the alphabet!");
        // Optionally navigate to a completion screen or reset
      }
    }
  };

  const handleBack = () => {
    if (wordIndex > 0) {
      setWordIndex(prevIndex => prevIndex - 1);
    } else {
      // Navigate to the previous letter if at the first word
      const prevLetter = String.fromCharCode(initialLetter.charCodeAt(0) - 1);
      if (prevLetter >= 'A' && navigation) {
        navigation.navigate('AlphabetPreview', { letter: prevLetter });
      } else {
        console.log("You're at the beginning of the alphabet.");
      }
    }
  };

  const handleExit = () => {
    Alert.alert(
      "Exit",
      "Are you sure you want to go back to the main menu?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("MainMenu");
          },
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.detailContainer}>
      <View style={styles.topCenterLetter}>
        <Text style={styles.letterTopCenter}>{initialLetter}</Text>
      </View>
      <View style={styles.wordContainer}>
        {currentWord && (
          <>
            <Text style={styles.wordText}>{currentWord.word}</Text>
            <View style={styles.box}>
              <Image source={currentWord.image} style={styles.image} />
            </View>
          </>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Next"
          color={colors.pastelBlue}
          onPress={handleNext}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Back"
          color={colors.pastelBlue}
          onPress={handleBack}
        />
      </View>
      <View style={styles.exitContainer}>
        <Button
          title="X"
          color={colors.pastelBlue}
          onPress={handleExit}
        />
      </View>
    </View>
  );
}

export default AlphabetViewScreen;
