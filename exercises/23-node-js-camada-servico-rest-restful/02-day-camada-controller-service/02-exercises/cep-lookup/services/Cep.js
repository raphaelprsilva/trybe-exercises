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

const createNewAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const existingCep = await CepModel.findAddressByCep(cep);

  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  return await CepModel.createNewAddress({ cep, logradouro, bairro, localidade, uf });
};

module.exports = {
  findAddressByCep,
  createNewAddress,
};
