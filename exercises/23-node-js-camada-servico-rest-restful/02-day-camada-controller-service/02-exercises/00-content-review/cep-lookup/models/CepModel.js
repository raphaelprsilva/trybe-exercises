const connection = require('./connection');

// Regex que identifica um CEP já formatado
const CEP_REGEX = /\d{5}-\d{3}/;

// Função que formata um Cep
const formatCep = (cep) => {
  // Caso o cep já esteja formatado, será retornado o próprio cep
  if (CEP_REGEX.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

// Formata os campos para exibição
const getFormatedAddress = async ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const findAddresses = async () => {
  const query = 'SELECT * from cep_lookup.ceps';
  const [foundAddresses] = await connection.execute(query);

  if (!foundAddresses) return null;

  return foundAddresses;
}

const findAddressByCep = async (cep) => {
  // Iremos remover toda a formatação, pois armazenamos o cep puro, só com números
  const treatedCep = cep.replace('-', '');
  const query =
    'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?';

  const [result] = await connection.execute(query, [treatedCep]);
  console.log('Model - findById - result:', result);

  const foundCep = result.length ? result[0] : null;

  if (!foundCep) return null;

  return getFormatedAddress(foundCep);
};

const createNewAddress = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = rawCep.replace(/-/gi, '');

  const query =
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';

  const newAddress = await connection.execute(query, [
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  ]);
  console.log('model - createNewAddress - newAddress:', newAddress);

  return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
  findAddresses,
  findAddressByCep,
  createNewAddress,
};
