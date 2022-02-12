const rescue = require('express-rescue');
const UserModel = require('../models/User');

const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const foundUser = await UserModel.getById(parseInt(id, 10));

  if (!foundUser) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado.' });
  }

  res.status(200).json(foundUser);
});

module.exports = {
  getById,
};
