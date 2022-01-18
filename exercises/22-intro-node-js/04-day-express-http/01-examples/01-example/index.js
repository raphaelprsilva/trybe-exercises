const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

app.get('/open', (_req, res) => {
  res.send('open!');
});

const recipesRouter = require('./recipesRouter');

app.use('/recipes', recipesRouter);

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe.` });
});

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});
