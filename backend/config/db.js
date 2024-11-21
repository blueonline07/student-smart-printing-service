import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new pg.Client({
  user: process.env.PG_USER,
  host: 'localhost',
  database: 'ssps',
  password: process.env.PG_PASSWORD,
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

export { client };
