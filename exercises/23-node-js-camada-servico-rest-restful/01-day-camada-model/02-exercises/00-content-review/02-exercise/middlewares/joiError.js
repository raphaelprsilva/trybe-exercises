const Joi = require('joi');

const requestObject = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
};

const joiPersonalizedErrorMessages = {
  'string.empty': 'O campo {:#label} é obrigatório',
  'string.email': 'Informe um campo válido em {:#label}',
  'string.min': 'O campo {:#label} deve ter pelo menos {:#limit} caracteres',
};

const userSchema = Joi.object(requestObject).messages(joiPersonalizedErrorMessages);

const checkJoiError = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);
  console.log('checkJoiError - error:', error);

  if (error) return next(error);

  next();
};

module.exports = checkJoiError;
