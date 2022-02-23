const SubscriberService = require('../services/SubscriberService');

const getAll = async (req, res) => {
  const subscribers = await SubscriberService.getAll();

  return res.status(200).json(subscribers);
};

const validateParams = async (req, res, next) => {
  const { name, email } = req.body;
  if (!name) return res.status(422).json({ message: 'Nome é obrigatório' });
  if (!email) return res.status(422).json({ message: 'Email é obrigatório' });

  next();
};

const create = async (req, res) => {
  const { name, email } = req.body;

  const subscriber = await SubscriberService.create({ name, email });

  return res.status(201).json(subscriber);
};

module.exports = {
  getAll,
  create,
  validateParams,
};
