const getNonExistentRoute = async (req, res) => {
  return res.status(404).json({ message: `Rota "${req.baseUrl}" não existe!` });
};

module.exports = getNonExistentRoute;
