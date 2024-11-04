// kani inyong main sa backend
import express from 'express';
import bodyParser from 'body-parser';
import pkg from 'pg'; 
import dotenv from 'dotenv';

const app = express()
const port = process.env.PORT || 10000;
dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST,         
  port: process.env.DB_PORT || 5432, 
  database: process.env.DB_DATABASE, 
  user: process.env.DB_USERNAME,     
  password: process.env.DB_PASSWORD,  
  ssl: { rejectUnauthorized: false }  
});

pool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Connection error', err.stack));

  app.get('/', (req, res) => {
      res.send('Trying if the server is still up');
  });


  // here
  app.post('/add-info/post-student-data', async (req, res) => {
      try {
          const student_name = 'John Doe';
          const student_score = 85;

          const result = await pool.query(
              'INSERT INTO student_data_table (student_name, student_score) VALUES ($1, $2) RETURNING *',
              [student_name, student_score]
          );

          res.status(201).send(`Student added with ID: ${result.rows[0].student_id}`);
      } catch (error) {
          console.error('Error inserting student:', error);
          res.status(500).send('Error inserting student');
      }
  });

  // this too
  app.get('/view-data/get-student-data', async (req, res) => {
      try {
          const result = await pool.query('SELECT * FROM student_data_table');
          res.status(200).json(result.rows);
      } catch (error) {
          console.error('Error retrieving students:', error);
          res.status(500).send('Error retrieving students');
      }
  });

  app.delete('/dev-table-clear', async (req, res) => {
      try {

       await pool.query(`
              DELETE FROM student_data_table;
          `);

          res.status(200).send('All student data has been cleared.');
      } catch (error) {
          console.error('Error clearing student data:', error);
          res.status(500).send('Error clearing student data');
      }
  });

  app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
  });