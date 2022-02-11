const isAValidUsername = (req, res, next) => {
  const { username } = req.body;

  console.log('Validei o username');

  if (!username && username.length < 3) {
    return res.status(400).json({ message: 'Invalid data.' });
  }

  next();
};

const isAValidEmail = (req, res, next) => {
  const { email } = req.body;

  console.log('Validei o email');

  if (!email && !email.includes('@') && !email.includes('.com')) {
    return res.status(400).json({ message: 'Invalid data.' });
  }

  next();
};

const isAValidPassword = (req, res, next) => {
  const { password } = req.body;

  console.log('Validei o password');

  if ((typeof password !== 'number') || password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: 'Invalid data.' });
  }

  next();
};

module.exports = {
  isAValidUsername,
  isAValidEmail,
  isAValidPassword,
};
