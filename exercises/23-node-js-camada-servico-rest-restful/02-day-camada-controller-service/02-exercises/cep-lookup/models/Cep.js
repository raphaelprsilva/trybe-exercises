const connection = require('./connection');

const CEP_REGEX = /\d{5}-\d{3}/;

const formatCep = (cep) => {
  const isCepValid = CEP_REGEX.test(cep);
  if (isCepValid) return cep;
  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const findAddressByCep = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace('-', '');
  const QUERY = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';

  const result = await connection.execute(QUERY, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null));

  if (!result) return null;
  return getNewCep(result);
};

const createNewAddress = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
  const cep = rawCep.replace(/-/ig, '');
  const QUERY =
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  const addressData = [cep, logradouro, bairro, localidade, uf];

  await connection.execute(QUERY, addressData);
  return { cep, logradouro, bairro, localidade, uf};
};

module.exports = {
  findAddressByCep,
  createNewAddress,
};
