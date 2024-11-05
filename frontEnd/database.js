import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('alphabetApp.db');

// Function to initialize the database and create the players table
export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        lastLetter TEXT DEFAULT 'A'
      );`,
      [],
      () => console.log('Players table created successfully'),
      (txObj, error) => console.log('Error creating table:', error)
    );
  });
};

// Function to add a new player to the database
export const addPlayer = (name) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO players (name) VALUES (?);`,
        [name],
        (txObj, result) => resolve(result.insertId),
        (txObj, error) => reject(error)
      );
    });
  });
};

// Function to retrieve all players
export const getPlayers = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM players;`,
        [],
        (txObj, { rows: { _array } }) => resolve(_array),
        (txObj, error) => reject(error)
      );
    });
  });
};

// Function to update the last letter completed for a player
export const updateLastLetter = (id, lastLetter) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE players SET lastLetter = ? WHERE id = ?;`,
        [lastLetter, id],
        (txObj, result) => resolve(result),
        (txObj, error) => reject(error)
      );
    });
  });
};
