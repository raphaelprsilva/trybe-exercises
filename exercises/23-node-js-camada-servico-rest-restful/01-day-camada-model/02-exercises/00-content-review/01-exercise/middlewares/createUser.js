const rescue = require('express-rescue');
const UserModel = require('../models/User');

// Poderia ter criado esse middleware para o updateUser, mas decidi
// usar o mesmo e compartilhá-lo. Prestar atenção nisso.
const isJoiError = (req, _res, next) => {
  const { error } = UserModel.isValid(req.body);
  console.log('isJoiError - error:', error);

  if (error) return next(error);

  next();
};

const create = rescue(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = await UserModel.create({ firstName, lastName, email, password });

  res.status(201).json(newUser);
});

module.exports = {
  isJoiError,
  create,
};
