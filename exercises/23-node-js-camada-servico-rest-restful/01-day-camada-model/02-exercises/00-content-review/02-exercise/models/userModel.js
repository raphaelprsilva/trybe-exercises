const connection = require('../models/connection');

const formatedUsersResult = (movies) => movies.map((movie) => ({
  id: movie.id,
  firstName: movie.first_name,
  lastName: movie.last_name,
  email: movie.email,
}));

// Funções que fazem conexão com o banco de dados

const create = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES(?, ?, ?, ?)';
  const [result] = await connection.execute(query, [firstName, lastName, email, password]);

  console.log('create - result:', result);

  // Como verificar o resultado inserido????
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

  if (!users.length) return [];

  return formatedUsersResult(users);
};

const getById = async (id) => {
  const query = 'SELECT * FROM users_crud.users WHERE id = ?';

  const [user] = await connection.execute(query, [id]);
  console.log('getById - user:', user);
  console.log('!user.length:', !user.length);

  if (!user.length) return null;

  const userFormated = formatedUsersResult(user)[0];

  return userFormated;
};

const update = async (id, firstName, lastName, email, password) => {
  const query = 'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';

  const parsedId = parseInt(id, 10);
  await connection.execute(query, [
    firstName,
    lastName,
    email,
    password,
    parsedId,
  ]);

  return getById(id);
};

const exclude = async (id) => {
  const query = 'DELETE FROM users_crud.users WHERE id = ?';
  
  await connection.execute(query, [id]);

  return getById(id);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
}