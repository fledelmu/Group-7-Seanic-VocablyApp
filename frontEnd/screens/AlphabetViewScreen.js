import React, { useState } from 'react';
import { Text, View, Image, Button, Alert, TouchableWithoutFeedback } from 'react-native';
import { Audio } from 'expo-av';
import { styles, colors } from './styles';

function AlphabetViewScreen({ route, navigation }) {
  const { letter: initialLetter } = route.params;
  const [sound, setSound] = useState();
  const wordImageMap = {
      A: [
        { word: 'Apple', image: require('./assets/apple.png'), audio: require('./assets/Apple.mp3') },
        { word: 'Ant', image: require('./assets/Ant.png'), audio: require('./assets/Ant.mp3') },
        { word: 'Alligator', image: require('./assets/Alligator.png'), audio: require('./assets/Alligator.mp3') },
        { word: 'Airplane', image: require('./assets/Airplane.png'), audio: require('./assets/AirPlane.mp3') },
      ],
      B: [
        { word: 'Banana', image: require('./assets/banana.png'), audio: require('./assets/Banana.mp3') },
        { word: 'Bear', image: require('./assets/bear.png'), audio: require('./assets/Bear.mp3') },
        { word: 'Bee', image: require('./assets/bee.png'), audio: require('./assets/Bee.mp3') },
        { word: 'Bird', image: require('./assets/bird.png'), audio: require('./assets/Bird.mp3') },
      ],
      C: [
        { word: 'Cat', image: require('./assets/cat.png'), audio: require('./assets/Cat.mp3') },
        { word: 'Car', image: require('./assets/car.png'), audio: require('./assets/Car.mp3') },
        { word: 'Cake', image: require('./assets/cake.png'), audio: require('./assets/Cake.mp3') },
        { word: 'Cow', image: require('./assets/cow.png'), audio: require('./assets/Cow.mp3') },
      ],
      D: [
        { word: 'Dog', image: require('./assets/dog.png'), audio: require('./assets/Dog.mp3') },
        { word: 'Duck', image: require('./assets/duck.png'), audio: require('./assets/Duck.mp3') },
        { word: 'Drum', image: require('./assets/drum.png'), audio: require('./assets/Drum.mp3') },
        { word: 'Doll', image: require('./assets/doll.png'), audio: require('./assets/Doll.mp3') },
      ],
      E: [
        { word: 'Elephant', image: require('./assets/elephant.png'), audio: require('./assets/Elephant.mp3') },
        { word: 'Egg', image: require('./assets/egg.png'), audio: require('./assets/Egg.mp3') },
        { word: 'Ear', image: require('./assets/ear.png'), audio: require('./assets/Ear.mp3') },
        { word: 'Eagle', image: require('./assets/eagle.png'), audio: require('./assets/Eagle.mp3') },
      ],
      F: [
        { word: 'Fish', image: require('./assets/fish.png'), audio: require('./assets/Fish.mp3') },
        { word: 'Frog', image: require('./assets/frog.png'), audio: require('./assets/Frog.mp3') },
        { word: 'Fan', image: require('./assets/fan.png'), audio: require('./assets/Fan.mp3') },
        { word: 'Fire', image: require('./assets/fire.png'), audio: require('./assets/Fire.mp3') },
      ],
      G: [
        { word: 'Giraffe', image: require('./assets/giraffe.png'), audio: require('./assets/Giraffe.mp3') },
        { word: 'Goat', image: require('./assets/goat.png'), audio: require('./assets/Goat.mp3') },
        { word: 'Grapes', image: require('./assets/grapes.png'), audio: require('./assets/Grapes.mp3') },
        { word: 'Girl', image: require('./assets/girl.png'), audio: require('./assets/Girl.mp3') },
      ],
      H: [
        { word: 'Horse', image: require('./assets/horse.png'), audio: require('./assets/Horse.mp3') },
        { word: 'Hat', image: require('./assets/hat.png'), audio: require('./assets/Hat.mp3') },
        { word: 'House', image: require('./assets/house.png'), audio: require('./assets/House.mp3') },
        { word: 'Hand', image: require('./assets/hand.png'), audio: require('./assets/Hand.mp3') },
      ],
      I: [
        { word: 'Ice Cream', image: require('./assets/ice_cream.png'), audio: require('./assets/IceCream.mp3') },
        { word: 'Igloo', image: require('./assets/igloo.png'), audio: require('./assets/Igloo.mp3') },
        { word: 'Insect', image: require('./assets/insect.png'), audio: require('./assets/Insect.mp3') },
        { word: 'Island', image: require('./assets/island.png'), audio: require('./assets/Island.mp3') },
      ],
      J: [
        { word: 'Juice', image: require('./assets/juice.png'), audio: require('./assets/Juice.mp3') },
        { word: 'Jump', image: require('./assets/jump.png'), audio: require('./assets/Jump.mp3') },
        { word: 'Jelly', image: require('./assets/jelly.png'), audio: require('./assets/Jelly.mp3') },
        { word: 'Jacket', image: require('./assets/jacket.png'), audio: require('./assets/Jacket.mp3') },
      ],
      K: [
        { word: 'Kite', image: require('./assets/kite.png'), audio: require('./assets/Kite.mp3') },
        { word: 'Kangaroo', image: require('./assets/kangaroo.png'), audio: require('./assets/Kangaroo.mp3') },
        { word: 'Key', image: require('./assets/key.png'), audio: require('./assets/Key.mp3') },
        { word: 'King', image: require('./assets/king.png'), audio: require('./assets/King.mp3') },
      ],
      L: [
        { word: 'Lion', image: require('./assets/lion.png'), audio: require('./assets/Lion.mp3') },
        { word: 'Leaf', image: require('./assets/leaf.png'), audio: require('./assets/Leaf.mp3') },
        { word: 'Lamp', image: require('./assets/lamp.png'), audio: require('./assets/Lamp.mp3') },
        { word: 'Ladder', image: require('./assets/ladder.png') , audio: require('./assets/Ladder.mp3')},
      ],  
      M: [
        { word: 'Monkey', image: require('./assets/monkey.png'), audio: require('./assets/Monkey.mp3') },
        { word: 'Moon', image: require('./assets/moon.png'), audio: require('./assets/Moon.mp3') },
        { word: 'Mouse', image: require('./assets/mouse.png'), audio: require('./assets/Mouse.mp3') },
        { word: 'Map', image: require('./assets/map.png'), audio: require('./assets/Map.mp3') },
      ],
      N: [
        { word: 'Nest', image: require('./assets/nest.png'), audio: require('./assets/Nest.mp3') },
        { word: 'Nose', image: require('./assets/nose.png'), audio: require('./assets/Nose.mp3') },
        { word: 'Nut', image: require('./assets/nuts.png'), audio: require('./assets/Nut.mp3') },
        { word: 'Net', image: require('./assets/net.png'), audio: require('./assets/Net.mp3') },
      ],
      O: [
        { word: 'Orange', image: require('./assets/orange.png'), audio: require('./assets/Orange.mp3') },
        { word: 'Owl', image: require('./assets/owl.png'), audio: require('./assets/Owl.mp3') },
        { word: 'Ocean', image: require('./assets/ocean.png'), audio: require('./assets/Ocean.mp3') },
        { word: 'Octopus', image: require('./assets/octopus.png') , audio: require('./assets/Octopus.mp3')},
      ],
      P: [
        { word: 'Penguin', image: require('./assets/penguin.png'), audio: require('./assets/Penguin.mp3') },
        { word: 'Pig', image: require('./assets/pig.png') , audio: require('./assets/Pig.mp3')},
        { word: 'Pencil', image: require('./assets/pencil.png'), audio: require('./assets/Pencil.mp3') },
        { word: 'Plane', image: require('./assets/plane.png') , audio: require('./assets/Plane.mp3')},
      ],
      Q: [
        { word: 'Queen', image: require('./assets/queen.png') , audio: require('./assets/Queen.mp3')},
        { word: 'Quail', image: require('./assets/quail.png') , audio: require('./assets/Quail.mp3')},
        { word: 'Quilt', image: require('./assets/quilt.png') , audio: require('./assets/Quilt.mp3')},
        { word: 'Quill', image: require('./assets/quill.png') , audio: require('./assets/Quill.mp3')},
      ],
      R: [
        { word: 'Rabbit', image: require('./assets/rabbit.png') , audio: require('./assets/Rabbit.mp3')},
        { word: 'Rainbow', image: require('./assets/rainbow.png'), audio: require('./assets/Rainbow.mp3') },
        { word: 'Robot', image: require('./assets/ROBOT.png') , audio: require('./assets/Robot.mp3')},
        { word: 'Ring', image: require('./assets/ring.png') , audio: require('./assets/Ring.mp3')},
      ],
      S: [
        { word: 'Sun', image: require('./assets/sun.png') , audio: require('./assets/Sun.m4a')},
        { word: 'Snake', image: require('./assets/snake.jpg'), audio: require('./assets/Snake.m4a') },
        { word: 'Star', image: require('./assets/star.jpg') , audio: require('./assets/Star.m4a')},
        { word: 'Ship', image: require('./assets/ship.jpg') , audio: require('./assets/Ship.m4a')},
      ],
      T: [
        { word: 'Tiger', image: require('./assets/tiger.png') , audio: require('./assets/Tiger.m4a')},
        { word: 'Tree', image: require('./assets/tree.png'), audio: require('./assets/Tree.m4a') },
        { word: 'Train', image: require('./assets/train.png'), audio: require('./assets/Train.m4a') },
        { word: 'Turtle', image: require('./assets/turtle.png') , audio: require('./assets/Turtle.m4a')},
      ],
      U: [
        { word: 'Umbrella', image: require('./assets/umbrella.png'), audio: require('./assets/Umbrella.m4a') },
        { word: 'Under', image: require('./assets/under.png'), audio: require('./assets/Under.m4a') },
        { word: 'Up', image: require('./assets/up.png'), audio: require('./assets/Up.m4a') },
        { word: 'Uniform', image: require('./assets/uniform.png'), audio: require('./assets/Uniform.m4a') },
      ],
      V: [
        { word: 'Violin', image: require('./assets/violin.png'), audio: require('./assets/Violin.m4a') },
        { word: 'Van', image: require('./assets/van.png'), audio: require('./assets/Van.m4a') },
        { word: 'Vase', image: require('./assets/vase.png'), audio: require('./assets/Vase.m4a') },
        { word: 'Vest', image: require('./assets/vest.png'), audio: require('./assets/Vest.m4a') },
      ],
      W: [
        { word: 'Whale', image: require('./assets/whale.png'), audio: require('./assets/Whale.m4a') },
        { word: 'Water', image: require('./assets/water.png'), audio: require('./assets/Water.m4a') },
        { word: 'Watch', image: require('./assets/watch.png'), audio: require('./assets/Watch.m4a') },
        { word: 'Window', image: require('./assets/widow.png'), audio: require('./assets/Window.m4a') },
      ],
      X: [
        { word: 'Xylophone', image: require('./assets/xylophone.png'), audio: require('./assets/Xylophone.m4a') },
        { word: 'X-ray', image: require('./assets/x-ray.png'), audio: require('./assets/Xray.m4a') },
        { word: 'Xerox', image: require('./assets/xerox.png'), audio: require('./assets/Xerox.m4a') },
        { word: 'Xylo', image: require('./assets/xylo.png'), audio: require('./assets/Xylophone.m4a') },
      ],
      Y: [
        { word: 'Yacht', image: require('./assets/yacht.png'), audio: require('./assets/Yacht.m4a') },
        { word: 'Yo-yo', image: require('./assets/yoyo.png'), audio: require('./assets/yoyo.m4a') },
        { word: 'Yellow', image: require('./assets/yellow.png'), audio: require('./assets/yellow.m4a') },
        { word: 'Yarn', image: require('./assets/yarn.png'), audio: require('./assets/Yarn.m4a') },
      ],
      Z: [
        { word: 'Zebra', image: require('./assets/zebra.png'), audio: require('./assets/Zebra.m4a') },
        { word: 'Zip', image: require('./assets/zip.png'), audio: require('./assets/Zip.m4a') },
        { word: 'Zoo', image: require('./assets/zoo.png'), audio: require('./assets/Zoo.m4a') },
        { word: 'Zipper', image: require('./assets/zipp1.png'), audio: require('./assets/Zipper.m4a') },
      ],
  };

  const [wordIndex, setWordIndex] = useState(0);
  const words = wordImageMap[initialLetter] || [];
  const currentWord = words[wordIndex];

  async function playSound(audioFile) {
    const { sound } = await Audio.Sound.createAsync(audioFile);
    setSound(sound);
    await sound.playAsync();
  }

  // Clean up the sound when the component unmounts
  React.useEffect(() => {
    return sound ? () => { sound.unloadAsync(); } : undefined;
  }, [sound]);

  const handleNext = () => {
    if (wordIndex < words.length - 1) {
      setWordIndex(prevIndex => prevIndex + 1);
    } else {
      const nextLetter = String.fromCharCode(initialLetter.charCodeAt(0) + 1);
      if (nextLetter <= 'Z' && navigation) {
        navigation.navigate('AlphabetPreview', { letter: nextLetter });
        setWordIndex(0);
      }
    }
  };

  const handleBack = () => {
    if (wordIndex > 0) {
      setWordIndex(prevIndex => prevIndex - 1);
    } else {
      const prevLetter = String.fromCharCode(initialLetter.charCodeAt(0) - 1);
      if (prevLetter >= 'A' && navigation) {
        navigation.navigate('AlphabetPreview', { letter: prevLetter });
      }
    }
  };

  const handleExit = () => {
    Alert.alert("Exit", "Are you sure you want to go back to the main menu?", [
      { text: "Cancel", style: "cancel" },
      { text: "OK", onPress: () => navigation.navigate("MainMenu") },
    ]);
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
            <TouchableWithoutFeedback onPress={() => playSound(currentWord.audio)}>
              <View style={styles.box}>
                <Image source={currentWord.image} style={styles.image} />
              </View>
            </TouchableWithoutFeedback>
          </>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Next" color={colors.pastelBlue} onPress={handleNext} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Back" color={colors.pastelBlue} onPress={handleBack} />
      </View>
      <View style={styles.exitContainer}>
        <Button title="X" color={colors.pastelBlue} onPress={handleExit} />
      </View>
    </View>
  );
}

export default AlphabetViewScreen;