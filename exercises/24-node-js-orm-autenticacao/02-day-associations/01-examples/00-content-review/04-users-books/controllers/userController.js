const express = require('express');
const router = express.Router();

const { User, Book } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findAll({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
});

module.exports = router;
