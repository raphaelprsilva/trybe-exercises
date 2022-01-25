// Cria uma string com o nome completo da pessoa autora
const AuthorModel = require('../models/Author');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await AuthorModel.getAll();

  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await AuthorModel.findById(id);

  if (!author) return null;

  return getNewAuthor(author);
};

const createAuthor = async (firstname, middleName, lastName) => {
  const validAuthor = isValid(firstname, middleName, lastName);

  if (!validAuthor) return false;

  const author = await AuthorModel.createAuthor(
    firstname,
    middleName,
    lastName
  );

  const authorId = author.insertedId;

  return getNewAuthor({
    id: authorId,
    firstname,
    middleName,
    lastName,
  })
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};