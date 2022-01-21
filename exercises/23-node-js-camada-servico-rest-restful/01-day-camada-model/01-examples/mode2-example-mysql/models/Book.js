const connection = require('./connection');


const serialize = (book) => ({
  id: book.id,
  title: book.title,
  authorId: book.author_id,
});

const getAllBooks = async () => {
  const BOOKS_QUERY = 'SELECT id, title, author_id FROM model_example.books';
  const [books] = await connection.execute(BOOKS_QUERY);
  return books.map(serialize);
};

const getBooksByAuthorId = async (id) => {
  const QUERY =
    'SELECT id, title, author_id FROM model_example.books WHERE id=?';
  const [book] = await connection.execute(QUERY, [id]);

  if (book.length === 0) return null;

  const newBook = book.map(serialize);
  const { title, authorId } = newBook;
  return { id, title, authorId };
};

module.exports = {
  getAllBooks,
  getBooksByAuthorId,
};
