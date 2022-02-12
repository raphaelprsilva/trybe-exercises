const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'raphael',
  password: 'Raphael123456!',
  database: 'model_example'
});

module.exports = connection;
