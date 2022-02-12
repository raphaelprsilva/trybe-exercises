const Joi = require('joi');
const connection = require('./connection');

// Início Validações
const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'string.empty': 'O campo {:#label} é obrigatório',
  'string.email': 'Informe um email válido no campo {:#label}',
  'string.min': 'O campo {:#label} deve ter pelo menos {:#limit} caracteres',
});

const isValid = (userData) => {
  return userSchema.validate(userData);
};

// Fim Validações

const formatUserData = (userData) => ({
  id: userData.id,
  firstName: userData.first_name,
  lastName: userData.last_name,
  email: userData.email,
});

const create = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';

  const [result] = await connection.execute(query, [firstName, lastName, email, password]);
  const insertId = result.insertId;
  return { id: insertId, firstName, lastName, email };
};


const getAll = async () => {
  const query = 'SELECT id, first_name, last_name, email FROM users_crud.users';

  const [result] = await connection.execute(query);
  return result.map(formatUserData);
};

const getById = async (id) => {
  const query = 'SELECT id, first_name, last_name, email FROM users_crud.users WHERE id = ?';

  const [result] = await connection.execute(query, [id]);
  const foundUser = result.map(formatUserData)[0];
  return foundUser;
};

const update = async (id, { firstName, lastName, email, password }) => {
  const query = 'UPDATE users_crud.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?';

  await connection.execute(query, [firstName, lastName, email, password, id]);

  return getById(id);
};

const deleteUser = async (id) => {
  const query = 'DELETE FROM users_crud.users WHERE id = ?';
  const userToDelete = getById(id);
  await connection.execute(query, [id]);

  return userToDelete;
};

module.exports = {
  create,
  isValid,
  getAll,
  getById,
  update,
  deleteUser,
};
