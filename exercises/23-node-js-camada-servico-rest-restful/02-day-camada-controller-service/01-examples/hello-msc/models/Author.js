const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => authorData
  .map((item) => {
      return {
        id: item.id,
        firstName: item.first_name,
        middleName: item.middle_name,
        lastName: item.last_name,
      }
    }
  );

// Busca todos os autores do banco.
// A função retorna um array
const getAll = async () => {
  // O resultado de "await connection..." é um array com vários elementos
  // Desconstruimos o resultado, para trazer apenas o primeiro item do array
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  return serialize(authors);
};

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  const query =
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?';

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return serialize(authorData)[0];
};

const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
    [firstName, middleName, lastName]
  );

  return { id: author.insertId, firstName, middleName, lastName };
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
