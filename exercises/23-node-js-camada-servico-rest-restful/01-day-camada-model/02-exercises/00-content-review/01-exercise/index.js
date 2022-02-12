const express = require('express');
const bodyParser = require('body-parser');

const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.post('/user', middlewares.isJoiError, middlewares.create); // Cria usuário
app.get('/user', middlewares.getAll); // Busca todos os usuários
app.get('/user/:id', middlewares.getById); // Busca por um usuário específico
app.put('/user/:id', middlewares.isJoiError, middlewares.update); // Atualiza um usuário
app.delete('/user/:id', middlewares.deleteUser);


app.use(middlewares.getError);

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe!` });
});

app.listen(3000, console.log('Listening on port 3000.'));
