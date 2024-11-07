import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { fetchStudentData } from '../api'; // Ensure this is your fetch function

function TableView() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const loadStudents = async () => {
            try {
                const studentsData = await fetchStudentData();
                console.log('Fetched Data:', studentsData);

                // Use forEach to iterate over the data and log it or modify it if needed
                const studentList = [];
                studentsData.forEach(({ student_name, student_score }) => {
                    studentList.push({
                        student_name,
                        student_score,
                    });
                    // You can add any logic here if you want to process data (logging or modifying)
                    console.log('Processed Student:', student_name, student_score);
                });

                // Set the processed student data to state
                setStudents(studentList);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        loadStudents();
    }, []);

    
    const renderItem = ({ item }) => (
        <View style={styles.studentItem}>
            <Text>Name: {item.student_name}</Text>
            <Text>Score: {item.student_score}</Text>
        </View>
    );

    return (
        <View style={styles.continueContainer}>
            <Text style={styles.title}>Students List</Text>
            <View style={styles.scrollableBox}>
               <FlatList
                data={students}  // Pass the processed data to FlatList
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.flatListContainer}
            /> 
            </View>
            
        </View>
    );
}

export default TableView;
