const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const {
  getAllAuthors,
  getAuthorsById,
  setNewAuthor,
  isValidAuthor,
} = require('./models/Author');
const {
  getAllBooks,
  getBooksByAuthorId,
  setNewBook,
  isAValidBook,
} = require('./models/Book');

const setJSONResMessage = (res, status, message) => res
  .status(status)
  .json({ message });

app.use(bodyParser.json());

app.get('/authors',
  async (_req, res) => {
    const authors = await getAllAuthors();
    res.status(200).json(authors);
  }
);

app.get(
  '/books',
  async (_req, res) => {
    const books = await getAllBooks();
    res.status(200).json(books);
});

app.get(
  '/authors/:id',
  async (req, res) => {
    const { id } = req.params;
    const authorById = await getAuthorsById(id);

    if (!authorById) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json(authorById);
  }
);

app.post(
  '/authors',
  async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;
    const errorMessage = 'Was not possible create an author';
    const successMessage = 'Author successfully created';
    const isValidAuthorData = await isValidAuthor(first_name, middle_name, last_name);

    if (!isValidAuthorData) return setJSONResMessage(res, 400, errorMessage);

    await setNewAuthor(first_name, middle_name, last_name);
    setJSONResMessage(res, 201, successMessage);
  },
);

app.get(
  '/books/:id',
  async (req, res) => {
    const { id } = req.params;
    const booksByAuthorId = await getBooksByAuthorId(id);

    if (!booksByAuthorId) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    res.status(200).json(booksByAuthorId);
  }
)

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  const errorMessage = 'Was not possible create a new book';
  const successMessage = 'Book successfully created';
  const isValidBook = await isAValidBook(title, author_id);
  console.log('isAValidBook:', isValidBook);
  if (!isValidBook) return setJSONResMessage(res, 400, errorMessage);

  await setNewBook(title, author_id);
  setJSONResMessage(res, 201, successMessage);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));