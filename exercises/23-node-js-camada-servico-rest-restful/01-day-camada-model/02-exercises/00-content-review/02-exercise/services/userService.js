const userModel = require('../models/userModel');

// Preciso validar se o usuário com o nome, sobrenome e email já existe
// Preciso verificar se os dados inseridos são coerentes com as regras de negócio
// QUESTION - A comunicação com middlewares serão feitos aqui???
const create = async ({ firstName, lastName, email, password }) => {
  // QUESTION - Teria mais alguma validação além das do joi?
  // const isANewValidUser = ???
  const newUser = await userModel.create({ firstName, lastName, email, password });

  if (!newUser) return false;

  return newUser;
};

const getAll = async () => {
  const users = await userModel.getAll();

  if (!users.length) return false;

  return users;
};

// QUESTION - O que validar aqui???
const getById = async (id) => {
  const user = await userModel.getById(id);

  if (!user) return false;

  return user;
};

const update = async (id, { firstName, lastName, email, password }) => {
  const updatedUserData = await userModel.update(id, { firstName, lastName, email, password });
  console.log('Service - update - updatedUserData:', updatedUserData);

  if (!updatedUserData) return false;

  return updatedUserData;
};

const exclude = async (id) => {
  const user = await userModel.exclude(id);

  if (!user) return false;

  return user;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};
