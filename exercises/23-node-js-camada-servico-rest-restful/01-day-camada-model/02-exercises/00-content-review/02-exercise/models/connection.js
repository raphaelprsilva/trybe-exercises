const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'raphael',
  password: 'Raphael123456!',
  database: 'users_crud',
});

module.exports = connection;
