const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM trybe_flix.subscribers';
  const [result] = await connection.execute(query);

  return result;
};

const create = async ({ name, email }) => {
  const query =
    'INSERT INTO trybe_flix.subscribers (name, email) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute(query, [name, email]);

  return {
    id: insertId,
    name,
    email,
  };
};

module.exports = {
  getAll,
  create,
};
