const Joi = require('joi');
const rescue = require('express-rescue');
const userModel = require('../models/userModel');

const requestObject = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
};

const joiErrorMessages = {
  'string.empty': 'O campo {:#label} é obrigatório',
  'string.email': 'Informe um campo válido em {:#label}',
  'string.min': 'O campo {:#label} deve ter pelo menos {:#limit} caracteres',
};

const createUserSchema = Joi.object(requestObject).messages(joiErrorMessages);

const checkJoiError = (req, _res, next) => {
  const { error } = createUserSchema.validate(req.body);
  console.log('checkJoiError - error:', error);

  if (error) return next(error);

  next();
};

const validatesNewUserCreation = rescue(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const newUser = await userModel.create(firstName, lastName, email, password);
  console.log('post - /user - newUser:', newUser);

  if (!newUser) {
    return res.status(404).json({
      error: true,
      message: 'Não foi possível criar um usuário',
    });
  }

  return res.status(201).json(newUser);
});

module.exports = {
  checkJoiError,
  validatesNewUserCreation,
};
