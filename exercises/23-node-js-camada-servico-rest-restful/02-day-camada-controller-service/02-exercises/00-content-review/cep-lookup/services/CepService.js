const CepModel = require('../models');

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddresses = async () => {
  const foundAddresses = await CepModel.findAddresses();
  console.log('Services - findAddresses - foundAddresses:', foundAddresses);

  if (!foundAddresses) {
    return {
      error: {
        code: 'notFound',
        message: 'Endereços não encontrados',
      },
    };
  }

  return foundAddresses;
};

const findAddressByCep = async (cep) => {
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    }
  }

  const foundAddress = await CepModel.findAddressByCep(cep);

  if (!foundAddress) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    }
  }

  return foundAddress;
};

const createNewAddress = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const existentCep = await CepModel.findAddressByCep(cep);
  console.log('Service - createNewAddress - existentCep:', existentCep);

  if (existentCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existe',
      },
    };
  }

  const newAddress = await CepModel.createNewAddress({ cep, logradouro, bairro, localidade, uf });
  return newAddress;
};

module.exports = {
  findAddresses,
  findAddressByCep,
  createNewAddress,
};
