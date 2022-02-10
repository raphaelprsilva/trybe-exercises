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

// Exercício 03
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) {
    return res.status(200).json({ message: `Hello, ${name}!` });
  }

  res.status(401).end();
});

// Exercício 04
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(201).json({ message: `Seu nome é ${name} e você tem ${age} anos!` });
});

app.all('*', (req, res) => {
  res.status(404).json({ message: `Rota '${req.path}' não existe.` });
});

app.listen(3000, () => console.log('Listening on port 3000.'));