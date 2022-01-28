const rescue = require('express-rescue');
const CepService = require('../services/Cep');
const Joi = require('joi');

const findAddressByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const address = await CepService.findAddressByCep(cep);

  if (address.error) return next(address.error);

  res.status(200).json(address);
});

const createNewAddress = rescue(async (req, res, next) => {
  const requiredNonEmptyString = Joi.string().not().empty().required();
  
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: requiredNonEmptyString,
    bairro: requiredNonEmptyString,
    localidade: requiredNonEmptyString,
    uf: requiredNonEmptyString.length(2),
  }).validate(req.body);

  if (error) return next(error);

  const newCep = await CepService.createNewAddress(req.body);

  if (newCep.error) return next(newCep.error);

  res.status(200).json(newCep);
})

module.exports = {
  findAddressByCep,
  createNewAddress,
};
