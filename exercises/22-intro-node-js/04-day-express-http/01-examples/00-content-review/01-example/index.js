const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');

const recipesRouter = require('./recipesRouter');
const drinksRouter = require('./drinksRouter');

const logBlue = (message, valueToLog) =>
  console.log(chalk.blue.inverse(`${message}:`), valueToLog);

const app = express();

app.use(bodyParser.json());
app.use('/recipes', recipesRouter);
app.use('/drinks', drinksRouter);

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe!` });
});

app.listen(3000, () => console.log('Listening on port 3000'));
