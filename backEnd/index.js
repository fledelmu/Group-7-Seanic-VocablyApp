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
    res.send('Conneted')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })