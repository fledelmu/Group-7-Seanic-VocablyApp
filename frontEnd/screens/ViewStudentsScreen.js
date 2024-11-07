import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { fetchStudentData } from '../api'; // Ensure this is your fetch function

function TableView() {
    const [students, setStudents] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        const loadStudents = async () => {
            try {
                const studentsData = await fetchStudentData();
                console.log(studentsData);
                const studentList = studentsData.map(({ name, score}) => ({
                    name,
                    score,
                }));
                setStudents(studentList);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        loadStudents();
    }, []);

    const renderItem = ({ item }) => (
        <Pressable
            style={styles.studentItem}
            onPress={() => handlePress(item)}  // Pass the entire item here
        >
            <Text style={styles.studentText}>Name: {item.name}</Text>
            <Text>Score: {item.score}</Text>
        </Pressable>
    );

    return (
        <View style={styles.continueContainer}>
            <Text style={styles.title}>Students List</Text>
            <View style={styles.scrollableBox}>
                <FlatList
                    data={students}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>
        </View>
    );
}

export default TableView;
