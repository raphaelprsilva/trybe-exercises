require('dotenv/config');
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.BD_PASS,
  database: process.env.DB_NAME,
});

module.exports = connection;
