const rescue = require('express-rescue');
const UserModel = require('../models/User');

const getAll = rescue(async (_req, res) => {
  const allUsers = await UserModel.getAll();
  res.status(200).json(allUsers);
});

module.exports = {
  getAll,
};
