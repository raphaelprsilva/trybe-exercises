const express = require('express');
const app = express();
const PORT = 3000;

const { getAllAuthors, getAuthorsById } = require('./models/Author');
const { getAllBooks, getBooksByAuthorId } = require('./models/Book');

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
)

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

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));