const express = require('express');
const bodyParser = require('body-parser');

const CepController = require('./controllers');
const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.use('/cep', CepController);

app.use(middlewares.error);

app.use('*', async (req, res) => {
  res.status(404).json({ message: `A rota ${req.path} não existe!` });
});

app.listen(3000, () => console.log('Listening on Port 3000.'));
