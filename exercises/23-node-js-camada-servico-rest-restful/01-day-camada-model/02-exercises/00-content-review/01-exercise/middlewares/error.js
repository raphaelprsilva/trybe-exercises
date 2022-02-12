const getError = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({ error: true, message: err.message });
  }

  if (err.isJoi) {
    console.log('getError - joi error - err.details[0]:', err.details[0]);
    return res.status(400).json({ error: true, message: err.details[0].message })
  }

  console.log(err);

  res.status(500).json({ message: 'Erro interno do servidor!' });
};

module.exports = {
  getError,
};
