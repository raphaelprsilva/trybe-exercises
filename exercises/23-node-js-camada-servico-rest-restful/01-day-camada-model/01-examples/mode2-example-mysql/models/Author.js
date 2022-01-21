const connection = require('./connection');

const getAuthorsFullName = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (author) => {
  return {
    id: author.id,
    firstName: author.first_name,
    middleName: author.middle_name,
    lastName: author.last_name,
  };
};

const getAllAuthors = async () => {
  const QUERY = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors';
  const [authors] = await connection.execute(QUERY);
  return authors.map(serialize).map(getAuthorsFullName);
};

const getAuthorsById = async (id) => {
  const QUERY =
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id=?';
  const [author] = await connection.execute(QUERY, [id]);

  if (author.length === 0) return null;

  const { firstName, middleName, lastName } = author.map(serialize)[0];
  return getAuthorsFullName({ id, firstName, middleName, lastName });
};

module.exports = {
  getAllAuthors,
  getAuthorsById,
};
