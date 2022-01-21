const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'raphael',
  host: 'localhost',
  password: 'Raphael123456!',
  database: 'model_example'
});

module.exports = connection;