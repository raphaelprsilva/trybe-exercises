const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const User = require('./models/User');

app.use(bodyParser.json());

const responseJSONMessage = (res, status, message) => res
  .status(status).json({ error: true, message });

app.get(
  '/users',
  async (_req, res) => {
    const users = await User.getAllUsers();

  res.status(200).json(users);
});

app.post(
  '/user',
  async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const newUser = User
      .validateNewUser({ first_name, last_name, email, password });
    const errorMessage = 'Can not create new user';
    console.log('newUser:', newUser);

    if (!newUser) return responseJSONMessage(res, 400, errorMessage);

    await User.setNewUser(first_name, last_name, email, password);
    res.status(201).json(newUser);
  }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
