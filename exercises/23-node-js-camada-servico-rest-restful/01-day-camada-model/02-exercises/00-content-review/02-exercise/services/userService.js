const userModel = require('../models/userModel');

// TODO - Antes de criar o usuário, verifique se o usuário com tais características já existe
// Caso exista, não permita a criação de outro semelhante.

const create = async ({ firstName, lastName, email, password }) => {
  const doesUserExists = await userModel.getByName({ firstName, lastName, email });
  console.log('service - create - doesUserExists:', doesUserExists);

  if (doesUserExists) return {
    error: {
      code: 'alreadyExists',
      message: 'O usuário já existe',
    },
  }

  const newUser = await userModel.create({ firstName, lastName, email, password });

  return newUser;
};

const getAll = async () => {
  const users = await userModel.getAll();

  if (!users.length) return false;

  return users;
};

const getById = async (id) => {
  const doesUserExists = await userModel.getById(id);

  if (!doesUserExists) {
    return {
      error: {
        code: 'notFound',
        message: 'Usuário não encontrado',
      },
    };
  }

  return doesUserExists;
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
