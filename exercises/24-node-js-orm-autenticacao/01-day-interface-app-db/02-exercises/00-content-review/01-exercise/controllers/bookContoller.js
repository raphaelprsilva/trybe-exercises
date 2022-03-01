const express = require('express');
const router = express.Router();

const { Book } = require('../models');

router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();

    return res.status(200).json(books);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);
    console.log('book:', book);

    if (!book) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Book.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.params;

    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );

    console.log('updateBook:', updateBook);

    if (!updateBook) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json({ message: 'usuário atualizado com sucesso' });
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deleteBook = await Book.destroy({ where: { id } });

    console.log('deleteBook', deleteBook);

    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
