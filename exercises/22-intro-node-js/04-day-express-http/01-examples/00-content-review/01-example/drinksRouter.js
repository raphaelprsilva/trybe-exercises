const express = require('express');
const router = express.Router();

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

router.get('/search', (req, res) => {
  const { name, minPrice } = req.query;
  const filteredDrinks = drinks.filter(
    (drink) => drink.name.includes(name) && drink.price >= parseInt(minPrice)
  );

  if (!filteredDrinks) {
    return res.status(404).json({ message: 'Not drinks found.' });
  }

  res.status(200).json(filteredDrinks);
});

router.get('/', (_req, res) => {
  const sortedDrinks = drinks.sort((drink1, drink2) =>
    drink1.name.localeCompare(drink2.name)
  );

  res.json(sortedDrinks);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundDrink = drinks.find((drink) => drink.id === parseInt(id, 10));

  if (!foundDrink) {
    return res.status(404).json({ message: 'Drink not found.' });
  }

  res.status(200).json(foundDrink);
});

module.exports = router;
