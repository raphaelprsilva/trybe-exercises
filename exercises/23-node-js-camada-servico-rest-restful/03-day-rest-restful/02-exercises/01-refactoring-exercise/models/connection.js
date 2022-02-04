const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'raphael',
  password: 'Raphael123456!',
  database: 'b24_d03_exercises'
});

module.exports = connection;
