const MoviesService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400).send('Dados inválidos');
  }

  res.status(201).send('Filme criado com sucesso!');
};

const findById = async (req, res) => {
  const { id } = req.params;

  const movie = await MoviesService.findById(id);

  if (!movie) {
    return res.status(404).send('Not found');
  }
};

module.exports = {
  create,
  findById,
};
