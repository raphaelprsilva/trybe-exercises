const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Exercício 01
app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

// Exercício 02
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello ${name}!`});
});

app.all('*', (req, res) => {
  res.status(404).json({ message: `Rota '${req.path}' não existe.` });
});

app.listen(3000, () => console.log('Listening on port 3000.'));