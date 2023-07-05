const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.VITE_HOST,
  user: process.env.VITE_USER,
  database: process.env.VITE_DATABASE,
  password: process.env.VITE_PASSWORD,
  allowExitOnIdle: true
})

module.exports = {
  pool
};