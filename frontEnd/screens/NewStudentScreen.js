import {styles, colors} from './styles'
import { Text, View, Button, TextInput } from 'react-native';
import { React, useState } from 'react';
import Student from '../classes/Student';

function NewStudentScreen({navigation}){
    const [name, setName] = useState('');

    const createStudent = () => {
        if (name.trim()) {
            // Navigate to the AlphabetTestScreen and pass the student object
            navigation.navigate('AlphabetTestScreen', { letter: 'A', studentName: name});
        } else {
            alert("Please enter your name"); // Handle empty name input
        }
    };
    return (
        <View style={styles.startingScreenContainer}>
          <Text style={styles.title}>Who's Playing?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Name"
            value={name}
            onChangeText={setName}
          />
          <Button
            title="Start"
            color={colors.pastelBlue}
            onPress={createStudent}
          />
        </View>
    );
}


export default NewStudentScreen;