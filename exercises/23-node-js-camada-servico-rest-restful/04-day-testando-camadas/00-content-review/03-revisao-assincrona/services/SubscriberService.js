const SubscriberModel = require('../models/SubscriberModel');

const getAll = async () => {
  const subscribers = await SubscriberModel.getAll();

  return subscribers;
};

const create = async ({ name, email }) => {
  const newSubscriber = await SubscriberModel.create({ name, email });

  return newSubscriber;
};

module.exports = {
  getAll,
  create,
};
