const AuthorServices = require('../services/Author');

const getAll = async (_req, res) => {
  const authors = await AuthorServices.getAll();

  res.status(200).json(authors);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const author = await AuthorServices.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
};

const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const author = await AuthorServices.createAuthor(first_name, middle_name, last_name);

  if (!author) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  res.status(201).json(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};