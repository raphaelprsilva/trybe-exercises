module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ error: true, message: err.details[0].message });
  }

  if (err.code) {
    const statusByErrorCode = {
      alreadyExists: 409,
      notFound: 404,
    };

    const status = statusByErrorCode[err.code] || 500;

    return res.status(status).json(err);
  }

  console.log(err);

  return res.status(500).json({ message: 'Erro interno do servidor' });
};
