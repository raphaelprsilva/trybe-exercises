const connection = require('./connection');

const create = async (({ title, directedBy, releaseYear }) => {
  const QUERY = 'INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)'
  const [result] = await connection.execute(QUERY, [title, directedBy, releaseYear]);

  return {
    id: result.insertId,
  };
});

module.exports = {
  create,
};