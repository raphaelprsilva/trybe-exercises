const express = require('express');
const router = express.Router();

const authMiddleware = './auth-middleware';

router.use(authMiddleware);

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

router.get('/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.name.includes(name) && recipe.price < parseInt(maxPrice, 10)
  );

  if (!filteredRecipes) {
    return res.status(404).json({ message: 'Recipe not found.' });
  }

  res.status(200).json(filteredRecipes);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const foundRecipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));
  console.log('foundRecipe:', foundRecipe);

  if (!foundRecipe) {
    return res.status(404).json({ message: 'Recipe not found.' });
  }

  res.status(200).json(foundRecipe);
});

router.get('/', (_req, res) => {
  // Converte a resposta em json
  const sortedRecipes = recipes.sort((recipe1, recipe2) =>
    recipe1.name.localeCompare(recipe2.name)
  );

  res.json(sortedRecipes);
});

router.post('/', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });

  console.log(chalk.blue.bold('recipes:'), recipes);

  res.status(200).json({ message: 'Recipe created successfuly!' });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex(
    (recipe) => recipe.id === parseInt(id, 10)
  );

  console.log(chalk.blue.inverse('recipeIndex:'), recipeIndex);

  if (recipeIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found.' });
  }

  console.log(chalk.blue.inverse('recipes before:'), recipes);

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  console.log(chalk.blue.inverse('recipes after:'), recipes);

  res.status(204).end();
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const recipesIndex = recipes.findIndex(
    (recipe) => recipe.id === parseInt(id, 10)
  );

  if (recipesIndex === -1) {
    return res.status(404).json({ message: 'Recipe not found.' });
  }

  logBlue('recipes before', recipes);

  recipes.splice(recipesIndex, 1);

  logBlue('recipes after', recipes);

  res.status(204).end();
});

module.exports = router;
