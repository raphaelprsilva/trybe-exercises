const rescue = require('express-rescue');
const UserModel = require('../models/User');

const deleteUser = rescue(async (req, res, next) => {
  const { id } = req.params;
  const doesUserExists = await UserModel.getById(parseInt(id, 10));

  if (!doesUserExists) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado.' });
  }

  const deleteUser = await UserModel.deleteUser(parseInt(id, 10));
  res.status(200).json(deleteUser);
});

module.exports = {
  deleteUser,
};
