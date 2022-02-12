const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author || author.length === 0) {
    return res.status(404).json({ message: 'Author not found.' });
  }

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { firstName, middleName, lastName } = req.body;

  if (!Author.isValid(firstName, middleName, lastName)) {
    return res.status(400).json({ message: 'Dados inválidos.' });
  }

  await Author.create(firstName, middleName, lastName);

  res.status(201).json({ message: 'Autor criado com sucesso!' });
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
