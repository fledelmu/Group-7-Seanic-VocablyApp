// kani inyong main sa backend
import express from 'express';
import bodyParser from 'body-parser';
import pkg from 'pg'; 
import dotenv from 'dotenv';

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