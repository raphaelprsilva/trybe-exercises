const express = require('express');
const app = express();
const PORT = 3000;

const { getAllAuthors } = require('./models/Author');
const { getAllBooks } = require('./models/Book');

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

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));