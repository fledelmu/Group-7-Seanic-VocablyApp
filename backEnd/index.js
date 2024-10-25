// kani inyong main sa backend
import express from 'express';
import bodyParser from 'body-parser';
import pkg from 'pg'; 
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const connectionString = '${process.env.DATABASE_URL}:${process.env.DB_PORT}/studentdata_db'; 

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false }  
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));