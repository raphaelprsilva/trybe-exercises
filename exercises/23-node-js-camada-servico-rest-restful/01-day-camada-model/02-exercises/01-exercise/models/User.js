const connection = require('./connection');

// Properties validators functions
const validatePropertyAndType = (property) => !property || typeof property !== 'string';

const serialize = ({ id, first_name, last_name, email, password }) => ({
  id,
  firstName: first_name,
  lastName: last_name,
  email,
  password,
});

const getAllUsers = async () => {
  const QUERY = 'SELECT id, first_name, last_name, email, password FROM users_crud.users';
  const [users] = await connection.execute(QUERY);
  return users.map(serialize);
};

const validateNewUser = ({ firstName, lastName, email, password }) => {
  if (validatePropertyAndType(firstName)) return false;
  if (validatePropertyAndType(lastName)) return false;
  if (validatePropertyAndType(email)) return false;
  if (validatePropertyAndType(password) || password.length < 6) return false;
  return true;
};

const setNewUser = ({ firstName, lastName, email, password }) => {
  const QUERY =
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES(?, ?, ?, ?)';

  console.log('Here, at setNewUser');

  connection.execute(QUERY, [firstName, lastName, email, password])
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }))

};

module.exports = {
  getAllUsers,
  setNewUser,
  validateNewUser,
};
