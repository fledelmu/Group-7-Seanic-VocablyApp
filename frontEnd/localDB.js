import * as SQLite from 'expo-sqlite/legacy';

// Open the database
const db = SQLite.openDatabase('localStudentDatabase.db');

// Create the table if it doesn't exist
const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS students (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                score INTEGER,
                lastLetter TEXT
            );`,
            [],
            () => {
                console.log('Table created successfully.');
            },
            (tx, error) => {
                console.error('Error creating table:', error);
            }
        );
    });
};

// Insert a student into the database
const insertStudent = (student) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO students (name, score, lastLetter) VALUES (?, ?, ?)',
                [student.name, student.score, student.lastLetter],
                (tx, result) => {
                    console.log('Inserted student with ID:', result.insertId);
                    resolve(result);
                },
                (tx, error) => {
                    console.error('Error inserting student:', error);
                    reject(error);
                }
            );
        });
    });
};

// Fetch all students from the database
const fetchStudents = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM students',
                [],
                (tx, result) => {
                    const students = result.rows._array;
                    resolve(students);
                },
                (tx, error) => {
                    console.error('Error fetching students:', error);
                    reject(error);
                }
            );
        });
    });
};

export { createTable, insertStudent, fetchStudents };
