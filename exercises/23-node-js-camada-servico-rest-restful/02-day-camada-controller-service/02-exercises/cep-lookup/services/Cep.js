const CepModel = require('../models/Cep');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {
  // isValidCep pode retornar 'true' ou 'false'
  const isValidCep = CEP_REGEX.test(searchedCep);

  // caso isValidCep = false, entraremos no 'if', pois !false = true
  if (!isValidCep) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }

  // Vamos na camada model e caso não encontre o CEP buscado, um erro será retornado
  const cep = await CepModel.findAddressByCep(searchedCep);

  if (!cep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return cep;
};

module.exports = {
  findAddressByCep,
};
