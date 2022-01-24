const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const middlewares = require('./middlewares/index');

app.use(bodyParser.json());

app.get(
  '/users',
  async (_req, res) => {
    const users = await User.getAllUsers();

  res.status(200).json(users);
});

app.post('/user', middlewares.createUser);

app.use(middlewares.error);

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
