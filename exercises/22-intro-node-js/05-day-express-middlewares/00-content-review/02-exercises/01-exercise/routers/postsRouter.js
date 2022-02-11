const express = require('express');
const router = express.Router();

const { isAValidId } = require('../middlewares/postsValidations');

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
];

// Exercício 04
router.get('/', (_req, res) => res.status(200).json(posts));

router.get(
  '/:id',
  isAValidId,
  (req, res) => {
    const { id } = req.params;
    const foundPost = posts.find((post) => post.id === parseInt(id, 10));

    if (!foundPost) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    res.status(200).json(foundPost);
  }
);

module.exports = router;
