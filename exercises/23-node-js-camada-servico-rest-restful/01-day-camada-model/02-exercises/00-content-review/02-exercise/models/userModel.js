const connection = require('../models/connection');

// QUESTION - Onde seria um bom lugar para se colocar esse tipo de função?
const formatUsersResult = (movies) => movies.map((movie) => ({
  id: movie.id,
  firstName: movie.first_name,
  lastName: movie.last_name,
  email: movie.email,
}));

// Funções que fazem conexão com o banco de dados

const create = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES(?, ?, ?, ?)';
  const [result] = await connection.execute(query, [firstName, lastName, email, password]);

  console.log('userModel - create - result:', result);

  // QUESTION - Como verificar o resultado inserido? Eu realmente preciso fazer isso?
  if (!result) return null;

  return {
    id: result.insertId,
    firstName,
    lastName,
    email
  };
};

const getAll = async () => {
  const query = 'SELECT * FROM users_crud.users';

  const [users] = await connection.execute(query);

  // QUESTION - essa é uma boa maneira de se fazer uma verificação? Se não, como seria?
  if (!users.length) return [];

  return formatUsersResult(users);
};

const getById = async (id) => {
  const query = 'SELECT * FROM users_crud.users WHERE id = ?';

  const [user] = await connection.execute(query, [id]);
  console.log('Model - getById - user:', user);
  console.log('!user.length:', !user.length);

  if (!user.length) return null;

  const userFormated = formatUsersResult(user)[0];

  return userFormated;
};

const update = async (id, { firstName, lastName, email, password }) => {
  const doesUserExists = await getById(id);
  console.log('Model - update - doesUserExists:', doesUserExists);

  if (!doesUserExists) return null;

  const query = 'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';
  const parsedId = parseInt(id, 10);

  await connection.execute(query, [firstName, lastName, email, password, parsedId]);

  const updatedUserData = await getById(id);

  return updatedUserData;
};

const exclude = async (id) => {
  const doesUserExists = await getById(id);

  if (!doesUserExists) return false;

  const query = 'DELETE FROM users_crud.users WHERE id = ?';

  await connection.execute(query, [id]);

  return doesUserExists;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
}