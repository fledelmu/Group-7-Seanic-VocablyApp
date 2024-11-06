import React, { useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Text, View, Button } from 'react-native';
import { styles, colors } from './styles';
import { apiFetchStudent } from '../localDB';
import { postStudentData } from '../api';

function MainMenuScreen({ navigation }) {
  const isFocused = useIsFocused();

  
  useEffect(() => {
    const postData = async () => {
      try {
        const students = await apiFetchStudent();
     
        students.forEach(async (student) => {
          const { name, score } = student;
          console.log('Name:', name);
          console.log('Score:', score);

          await postStudentData(name, score);
        });

        console.log('Data synchronized successfully.');
      } catch (error) {
        console.error('Error synchronizing data:', error);
      }
    };

    if (isFocused) {
      console.log('MainMenuScreen is focused');
      postData(); 
    }
  }, [isFocused]);  

  return (
    <View style={styles.mainMenuContainer}>
      <Text style={styles.title}>Alphabet Learning {'\n'} App</Text>

      <View style={styles.buttonContainer}>
        <Button
          color={colors.pastelBlue} 
          title="Start (A)"
          onPress={() => navigation.navigate('StartorContinue')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          color={colors.pastelBlue} 
          title="Selection"
          onPress={() => navigation.navigate('AlphabetView')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          color={colors.pastelBlue} 
          title="View Students"
          onPress={() => navigation.navigate('StudentView')}
        />
      </View>

    </View>
  );
}

export default MainMenuScreen;
