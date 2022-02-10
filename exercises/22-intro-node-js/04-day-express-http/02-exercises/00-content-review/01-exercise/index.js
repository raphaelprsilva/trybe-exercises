const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.all('*', (req, res) => {
  res.status(404).json({ message: `Rota '${req.path}' não existe.`});
});

// Exercício 01
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(3000, () => console.log('Listening on port 3000.'));