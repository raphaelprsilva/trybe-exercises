const rescue = require('express-rescue');
const userService = require('../services/userService');

const create = rescue(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = await userService.create({
    firstName,
    lastName,
    email,
    password,
  });
  console.log('userMiddleware - create - newUser:', newUser);

  if (newUser.error) {
    return next(newUser.error);
  }

  return res.status(201).json(newUser);
});

const getAll = rescue(async (_req, res) => {
  const users = await userService.getAll();

  if (!users) {
    return res.status(404).json({ error: true, message: 'Not found users' });
  }

  return res.status(200).json(users);
});

const getById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const user = await userService.getById(id);
  console.log('Controller - getById - user:', user);

  if (user.error) return next(user.error);

  return res.status(200).json(user);
});

const update = rescue(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  // QUESTION - Poderia fazer isso: "userService.update(id, req.body);" ????
  const updatedUser = await userService.update(id, {
    firstName,
    lastName,
    email,
    password,
  });

  console.log('Controller - update - updatedUser:', updatedUser);

  if (!updatedUser) {
    return res
      .status(404)
      .json({ message: 'Não foi possível atualizar o usuário' });
  }

  return res.status(200).json(updatedUser);
});

const exclude = rescue(async (req, res) => {
  const { id } = req.params;

  const userData = await userService.exclude(parseInt(id, 10));
  console.log('Controller - exclude - userData:', userData);

  if (!userData) {
    return res.status(404).json({
      error: true,
      message: `Não foi possível deletar o usuário ${id}`,
    });
  }

  return res.status(201).json({ message: `Usuário com id ${id} deletado` });
});

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};
