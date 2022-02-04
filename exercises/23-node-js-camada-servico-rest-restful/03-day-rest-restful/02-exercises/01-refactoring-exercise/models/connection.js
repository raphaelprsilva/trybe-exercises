const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'raphael',
  password: 'Raphael123456!',
  database: 'b24_d03_exercises',
});

module.exports = connection;
