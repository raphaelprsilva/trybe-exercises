const express = require('express');
const router = express.Router();

const {
  isAValidUsername,
  isAValidEmail,
  isAValidPassword,
} = require('../middlewares/validations');

console.log('Passei pelo userRouter');

// Exercício 01
router.post(
  '/register',
  isAValidUsername,
  isAValidEmail,
  isAValidPassword,
  (_req, res) => {
    console.log('Passei pelo último middleware - router/post');

    res.status(201).json({ message: 'user created.' });
  },
);

// Exercício 02
router.post(
  '/login',
  isAValidEmail,
  isAValidPassword,
  (_req, res) => {
    console.log('Passei pelo último middleware - router/login');

    res.status(200).json({ token: '86567349784e' });
  }
);

module.exports = router;
