const MoviesModel = require('../models/movieModel');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

// No gabarito, existem duas funçẽos "findById". Não entendi o por quê!
// Dar uma olhadinha depois.
const findById = async (id) => {
  const movie = await MoviesModel.findById(id);

  if (!movie) return null;

  const { title, directedBy, releaseYear } = movie;

  return { id, title, directedBy, releaseYear };
};

module.exports = {
  create,
  findById,
};
