const formatUsersResult = (movies) =>
  movies.map((movie) => ({
    id: movie.id,
    firstName: movie.first_name,
    lastName: movie.last_name,
    email: movie.email,
  }));

module.exports = {
  formatUsersResult,
};
