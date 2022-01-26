const express = require('express');
const bodyParser = require('body-parser');

const CepController = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

app.get('/ping', async (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', CepController.findAddressByCep);

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
