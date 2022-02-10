const chalk = require('chalk');
const express = require('express');
const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.includes(name) && recipe.price < parseInt(maxPrice, 10)
  );

  if (!filteredRecipes) {
    return res.status(404).json({ message: 'Recipe not found.' });
  }

  res.status(200).json(filteredRecipes);
});

app.get('/recipes', (_req, res) => {
  // Converte a resposta em json
  const sortedRecipes = recipes
    .sort((recipe1, recipe2) => recipe1.name.localeCompare(recipe2.name));

  res.json(sortedRecipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const foundRecipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));
  console.log('foundRecipe:', foundRecipe);

  if (!foundRecipe) {
    return res.status(404).json({ message: 'Recipe not found.' });
  }

  res.status(200).json(foundRecipe);
});

app.get('/drinks', (_req, res) => {
  const sortedDrinks = drinks
    .sort((drink1, drink2) => drink1.name.localeCompare(drink2.name));

  res.json(sortedDrinks);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const foundDrink = drinks.find((drink) => drink.id === parseInt(id, 10));

  if (!foundDrink) {
    return res.status(404).json({ message: 'Drink not found.' });
  }

  res.status(200).json(foundDrink);
});

app.listen(3000, () => console.log('Listening on port 3000'));
