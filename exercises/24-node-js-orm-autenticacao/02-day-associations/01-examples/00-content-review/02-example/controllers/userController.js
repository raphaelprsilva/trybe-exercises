const express = require('express');
const router = express.Router();

const { User, Book } = require('../models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      // Eager Loading
      include: [
        {
          model: Book /* Nome da Model */,
          as: 'books' /* alias definido aqui e no UserBook.associate. Mude o nome e veja o resultado! */,
          through: {
            attributes: [],
          } /* Faz com que as informações da tabela UserBook não seja trazida. Descomente e veja! */,
        },
      ],
    });

    console.log('user:', user);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
