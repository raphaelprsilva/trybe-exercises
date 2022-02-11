// usar o rescue nas funções de validação?

const isAValidName = (req, res, next) => {
  const { name } = req.body;
  console.log("isAValidName ~ name:", name)

  if (!name || name.length < 5) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

const isValidInitials = (req, res, next) => {
  const { initials } = req.body;
  console.log("isValidInitials ~ initials:", initials)

  if (!initials || initials.length < 3) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

const isValidCountry = (req, res, next) => {
  const { country } = req.body;
  console.log("isValidCountry ~ country:", country)

  if (!country || country.length < 3) {
    res.status(400).json({ message: 'invalid data' });
  }

  next();
};

module.exports = {
  isAValidName,
  isValidInitials,
  isValidCountry,
};
