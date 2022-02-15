const rescue = require('express-rescue');
const Joi = require('joi');

const CepService = require('../services');

const findAddresses = rescue(async (req, res, next) => {
  const foundAddresses = await CepService.findAddresses();
  console.log('Middlewares - findAddress - foundAddresses:', foundAddresses);

  res.status(200).json(foundAddresses);
});

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;

  const foundAddress = await CepService.findAddressByCep(cep);
  console.log('Middlewares - findAddressByCep - foundAddress:', foundAddress);

  if (foundAddress.error) return next(foundAddress.error);

  res.status(200).json(foundAddress);
});

const createNewAddress = rescue(async (req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  })
    .messages({
      'any.required': 'O campo {#label} é obrigatório.',
      'string.empty': 'O campo {#label} não pode ser vazio.',
    })
    .validate(req.body);

  console.log('Middlewares - creataNewAddress - error:', error);
  if (error) return next(error);

  const newAddress = await CepService.createNewAddress(req.body);
  console.log('Middlewares - createNewAddress - newAddress:', newAddress);
  console.log(
    'Middlewares - createNewAddress - newAddress.error:',
    newAddress.error
  );

  if (newAddress.error) {
    return next(newAddress.error);
  }

  res.status(201).json(newAddress);
});

module.exports = {
  findAddresses,
  findAddressByCep,
  createNewAddress,
};
