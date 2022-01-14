const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age >= 17) return res.status(200).json({ message: `Hello, ${name}!` });
  return res.status(401).json({ message: 'Unauthorizated' });
});

app.listen(3001, () => {
  console.log(`Escutando na porta 3001`);
});
