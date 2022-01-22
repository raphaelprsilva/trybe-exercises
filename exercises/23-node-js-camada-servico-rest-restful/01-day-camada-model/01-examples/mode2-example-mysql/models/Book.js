const { getAuthorsById } = require('./Author');
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

const getBooksByAuthorId = async (bookId) => {
  const QUERY =
    'SELECT id, title, author_id FROM model_example.books WHERE id=?';
  const [book] = await connection.execute(QUERY, [bookId]);

  if (book.length === 0) return null;
  
  const [newBook] = book.map(serialize);
  const { id, title, authorId } = newBook;
  return { id, title, authorId };
};

const isAValidBook = async (title, authorId) => {
  console.log('title:', title);
  console.log('typeof title:', typeof title);
  console.log('title.length:', title.length);
  console.log('authorId:', authorId);
  console.log('typeof authorId:', typeof authorId);
  console.log('!(await getAuthorsById(authorId):', !(await getAuthorsById(authorId)));
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await getAuthorsById(authorId))) return false;
  return true;
};

const setNewBook = async (title, authorId) => {
  const QUERY =
    'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)';
  connection.execute(QUERY, [title, authorId]);
};

module.exports = {
  getAllBooks,
  getBooksByAuthorId,
  isAValidBook,
  setNewBook,
};
