const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const chalk = require('chalk');

// Função para logar os testes
const logBlue = (messageToLog, variable) =>
  console.log(chalk.blue.bold.inverse(messageToLog), variable);

const utils = require('./fs-utils');

const app = express();

app.use(bodyParser.json());

// Exercício 06
app.get('/simpsons', rescue(async (_req, res) => {
  const simpsons = await utils.getSimpsons();

  if (!simpsons) {
    return res.status(500).json({ message: 'Erro interno!' });
  }

  res.status(200).json(simpsons);
}));

// Exercício 07
app.get('/simpsons/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const simpsons = await utils.getSimpsons();
  logBlue('simpsons:', simpsons);
  const simpsonsFilteredById = simpsons.filter(
    (simpson) => simpson.id === id
  );

  if (simpsonsFilteredById.length === 0) {
    return res.status(404).json({ message: 'Simpsons not found.' });
  }

  res.status(200).json(simpsonsFilteredById);
}));

// Exercício 08
app.post('/simpsons', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await utils.getSimpsons();
  const isSimpsonFound = simpsons.find((simpson) => simpson.id === id);
  logBlue('isSimpsonFound:', isSimpsonFound);
  
  if (isSimpsonFound) {
    return res.status(409).json({ message: 'id already exists.' });
  }

  simpsons.push({ id, name });
  await utils.setSimpsons(simpsons);
  res.status(204).end();
}));

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe!` });
});

app.listen(3000, () => console.log('Listening on port 3000'));
