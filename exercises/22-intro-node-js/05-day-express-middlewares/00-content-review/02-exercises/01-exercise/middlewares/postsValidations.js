const isAValidId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ message: 'It is not a valid id.' });
  }

  next();
};

module.exports = {
  isAValidId,
};
