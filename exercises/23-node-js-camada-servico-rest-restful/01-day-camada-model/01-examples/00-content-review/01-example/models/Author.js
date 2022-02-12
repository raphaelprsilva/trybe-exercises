const connection = require('./connection');

const serialize = (author) => ({
  id: author.id,
  firstName: author.first_name,
  middleName: author.middle_name,
  lastName: author.last_name,
});

const getFullName = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const getAll = async () => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors'
  const [authors] = await connection.execute(query);

  return authors.map(serialize).map(getFullName);
};

const findById = async (id) => {
  // 1ª Maneira de se fazer
  // const authors = await getAll();
  // const foundAuthor = authors.find((author) => author.id === parseInt(id, 10));

  // return foundAuthor;

  // 2ª Maneira de se fazer
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?';
  const [author] = await connection.execute(query, [id]);

  return author;
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!middleName || typeof middleName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => {
  const query = 'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)';

  const newAuthor = connection.execute(query, [firstName, middleName, lastName]);

  return newAuthor;
};

module.exports = {
  getAll,
  findById,
  create,
  isValid,
};
