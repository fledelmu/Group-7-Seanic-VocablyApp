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
const insertStudent = (name, score, progress) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            // First, check if the student exists by name
            tx.executeSql(
                'SELECT * FROM students WHERE name = ?',
                [name],
                (tx, result) => {
                    if (result.rows.length > 0) {
                        // If the student exists, update the record
                        tx.executeSql(
                            'UPDATE students SET score = ?, lastLetter = ? WHERE name = ?',
                            [score, progress, name],
                            (tx, result) => {
                                console.log(`Updated student: ${name}`);
                                resolve(result);
                            },
                            (tx, error) => {
                                console.error('Error updating student:', error);
                                reject(error);
                            }
                        );
                    } else {
                        // If the student does not exist, insert a new record
                        tx.executeSql(
                            'INSERT INTO students (name, score, lastLetter) VALUES (?, ?, ?)',
                            [name, score, progress],
                            (tx, result) => {
                                console.log('Inserted student with ID:', result.insertId);
                                resolve(result);
                            },
                            (tx, error) => {
                                console.error('Error inserting student:', error);
                                reject(error);
                            }
                        );
                    }
                },
                (tx, error) => {
                    console.error('Error checking if student exists:', error);
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
                    const students = [];
                    for (let i = 0; i < result.rows.length; i++) {
                        students.push(result.rows.item(i));
                    }
                    console.log('Students:', students); // Log the fetched data
                    resolve(students); // Resolve the promise with the data
                },
                (tx, error) => {
                    console.error('Error fetching students:', error);
                    reject(error); // Reject the promise with the error
                }
            );
        });
    });
};

const apiFetchStudent = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT name, score FROM students', 
                [],
                (tx, result) => {
                    const students = [];
                    for (let i = 0; i < result.rows.length; i++) {
                        const student = result.rows.item(i); 
                        students.push({ name: student.name, score: student.score }); 
                    }
                    console.log('Fetched Students:', students); 
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

export { createTable, insertStudent, fetchStudents, apiFetchStudent };
