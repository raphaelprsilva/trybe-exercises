const express = require('express');
const app = express();
const PORT = 3000;

const { getAllAuthors } = require('./models/Author');

app.get('/authors',
  async (_req, res) => {
    const authors = await getAllAuthors();
    res.status(200).json(authors);
  }
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));