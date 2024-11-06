import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { styles } from './styles';
import { fetchStudents } from '../localDB'; // Ensure this is your fetch function

function ContinueScreen() {
    const [students, setStudents] = useState([]); // Store students for rendering

    useEffect(() => {
        const loadStudents = async () => {
            try {
                const studentsData = await fetchStudents(); // Fetch students data
                const studentList = [];

                studentsData.forEach((student) => {
                    // Process the student data
                    const { name, score, lastLetter } = student;
                    studentList.push({ name, score, lastLetter });
                });

                setStudents(studentList); // Update the state with processed students
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        loadStudents(); // Fetch students on mount
    }, []);

    // Render each student in the FlatList
    const renderItem = ({ item }) => (
        <View style={styles.studentItem}>
            <Text style={styles.studentText}>Name: {item.name}</Text>
            <Text>Last Letter: {item.lastLetter}</Text>
        </View>
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

export default ContinueScreen;
