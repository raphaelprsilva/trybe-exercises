const Joi = require('joi');
const rescue = require('express-rescue');
const UserModel = require('../models/User');

const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  'any.required': 'O campo é obrigatório',
  'string.min':
    'O campo deve ter, pelo menos,  caracteres',
  'string.email': 'Informe um email válido no campo ',
});
// quando eu deixo no messages o campo {{: id="label" }}, o código quebra

module.exports = [
  (req, _res, next) => {
    const { error } = createUserSchema.validate(req.body);
    if (error) return next(error);
    next();
  },
  rescue(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    // no gabarito, não existe uma função "isValid"
    if (!UserModel.validateNewUser({ firstName, lastName, email, password })) {
      const err = new Error('Invalid data');
      err.status = 400;
      return next(err);
    }

    // inconsistente, pois no User não colocamos async na função "setNewUser" no arquivo User
    const newUser = await UserModel.setNewUser({ firstName, lastName, email, password });
    res.status(201).json(newUser);
  })
];
