const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');
// const Book = require('./models/Book');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found author!' });

  res.status(200).json(author);
});

// app.get('/books', async (req, res) => {
//   const books = await Book.getAll();

//   res.status(200).json(books);
// })

app.listen(port, () => console.log(`Listening on port ${port}`));