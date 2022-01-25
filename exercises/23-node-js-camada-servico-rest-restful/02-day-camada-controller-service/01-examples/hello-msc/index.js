const express = require('express');
const bodyParser = require('body-parser');

const AuthorController = require('./controllers/Author');

const app = express();

app.use(bodyParser.json());

app.get('/authors', AuthorController.getAll);
app.get('/authors/:id', AuthorController.findById);
app.post('/authors', AuthorController.createAuthor);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
