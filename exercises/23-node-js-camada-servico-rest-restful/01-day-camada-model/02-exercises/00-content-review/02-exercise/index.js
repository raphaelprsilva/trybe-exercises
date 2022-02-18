const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const userModel = require('./models/userModel');
const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// Create new user
app.post(
  '/user',
  middlewares.createUser.checkJoiError,
  middlewares.createUser.validatesNewUserCreation,
);

// Read users
app.get('/user', middlewares.getAllUsers.getAllUsers);

// Read user by id
app.get('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;

  const user = await userModel.getById(id);
  console.log('get - /user/:id - user:', user);

  if (!user) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado'
    });
  }

  return res.status(200).json(user);
}));

// Update user
app.put('/user/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const updatedUser = await userModel.update(id, firstName, lastName, email, password);

  if (!updatedUser) {
    return res.status(404).json({ message: 'Não foi possível atualizar o status' });
  }

  return res.status(200).json(updatedUser);
}));

// Delete user
app.delete('/user/:id' , rescue(async (req, res) => {
  const { id } = req.params;

  await userModel.exclude(parseInt(id, 10));

  return res.status(201).json({ message: `Usuário com id ${id} deletado` });
}));

// Erro de rota - Caso o usuário digite uma rota inexistente
app.use('*', async (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe!` });
});

app.use(middlewares.error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
