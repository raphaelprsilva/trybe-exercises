const rescue = require('express-rescue');
const UserModel = require('../models/User');

const update = rescue(async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  const updatedUser = await UserModel.update(id, { firstName, lastName, email, password });

  if (!updatedUser) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado.' });
  }

  res.status(200).json(updatedUser);
});

module.exports = {
  update,
};
