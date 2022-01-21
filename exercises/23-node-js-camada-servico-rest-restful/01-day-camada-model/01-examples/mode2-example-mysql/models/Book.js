const connection = require('./connection');

const BOOKS_QUERY = 'SELECT id, title, author_id FROM model_example.books';

const serialize = (book) => ({
  id: book.id,
  title: book.title,
  authorId: book.author_id,
});

const getAllBooks = async () => {
  const [books] = await connection.execute(BOOKS_QUERY);
  return books.map(serialize);
};

const getBooksByAuthorId = async (id) => {
  const books = await getAllBooks();
  const filteredBooks = books.filter(
    ({ authorId }) => authorId === parseInt(id, 10)
  );

  return filteredBooks;
};

module.exports = {
  getAllBooks,
  getBooksByAuthorId,
};
