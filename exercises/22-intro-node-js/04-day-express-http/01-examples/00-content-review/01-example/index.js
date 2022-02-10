const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');

const logBlue = (message, valueToLog) =>
  console.log(chalk.blue.inverse(`${message}:`), valueToLog);

const app = express();
app.use(bodyParser.json());

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

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const foundRecipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));
  console.log('foundRecipe:', foundRecipe);

  if (!foundRecipe) {
    return res.status(404).json({ message: 'Recipe not found.' });
  }

  res.status(200).json(foundRecipe);
});

app.get('/recipes', (_req, res) => {
  // Converte a resposta em json
  const sortedRecipes = recipes
    .sort((recipe1, recipe2) => recipe1.name.localeCompare(recipe2.name));

  res.json(sortedRecipes);
});

app.post('/recipes', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });

  console.log(chalk.blue.bold('recipes:'), recipes);
  
  res.status(200).json({ message: 'Recipe created successfuly!' });
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id, 10));

  console.log(chalk.blue.inverse('recipeIndex:'), recipeIndex);

  if (recipeIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found.' });
  }

  console.log(chalk.blue.inverse('recipes before:'), recipes);

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  console.log(chalk.blue.inverse('recipes after:'), recipes);

  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipesIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id, 10));

  if (recipesIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found.' });
  }

  logBlue('recipes before', recipes);

  recipes.splice(recipesIndex, 1);

  logBlue('recipes after', recipes);

  res.status(204).end();
});


app.get('/drinks/search', (req, res) => {
  const { name, minPrice } = req.query;
  const filteredDrinks = drinks.filter((drink) => drink.name.includes(name) && drink.price >= parseInt(minPrice));

  if (!filteredDrinks) {
    return res.status(404).json({ message: 'Not drinks found.' });
  }

  res.status(200).json(filteredDrinks);
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

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota ${req.path} não existe!` });
});

app.listen(3000, () => console.log('Listening on port 3000'));
