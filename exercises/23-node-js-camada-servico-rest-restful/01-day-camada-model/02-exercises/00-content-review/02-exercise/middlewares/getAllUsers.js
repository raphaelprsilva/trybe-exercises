const userModel = require('../models/userModel');
const rescue = require('express-rescue');

const getAllUsers = rescue(async (_req, res) => {
  const users = await userModel.getAll();

  if (!users.length) {
    return res.status(404).json({ message: 'Not found users' });
  }

  return res.status(200).json(users);
});

module.exports = {
  getAllUsers,
};
