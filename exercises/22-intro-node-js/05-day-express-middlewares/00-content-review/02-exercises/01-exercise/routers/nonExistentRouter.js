module.exports = (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe.` });
};
