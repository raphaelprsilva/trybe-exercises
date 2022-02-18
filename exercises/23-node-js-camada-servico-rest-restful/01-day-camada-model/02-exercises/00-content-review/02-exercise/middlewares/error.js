module.exports = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  if (err.isJoi) {
    return res.status(400).json({ error: true, message: err.details[0].message });
  }

  console.log(err);

  return res.status(500).json({ message: 'Erro interno do servidor' });
};
