const express = require('express');
const { Book } = require('../models');
const router = express.Router();

// Esse endpoint usa o método findAll do sequelize para retornar todos os books
router.get('/', async (_req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    res.status(500).json({ message: 'Algo deu errado ❌' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity, createdAt } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity, createdAt });

    res.status(200).json(newBook);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    res.status(500).json({ message: 'Algo deu errado ❌' });
  }
});

module.exports = router;