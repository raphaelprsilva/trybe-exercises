const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(bodyParser.json());

app.get('/open', (_req, res) => {
  res.send('open!');
});

app.use(authMiddleware);

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (typeof price === 'number' && price > 0)
    return res.status(400).json({ message: 'Invalid price!' });

  next();
};

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) => r.name.includes(name) && r.price < parseInt(maxPrice)
  );
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
  console.log('req.params:', req.params);
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

app.get('/recipes', (_req, res) => {
  if (!recipes) return res.status(204).json({ message: 'Recipes not found.' });

  res.status(200).json(recipes);
});

app.post('/recipes', validatePrice, (req, res) => {
  const { id, name, price } = req.body;
  const { username } = req.user;
  recipes.push({ id, name, price, chef: username });
  console.log('recipes:', recipes);
  res.status(201).json({ message: 'Recipe created successfully!' });
});

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16)
    return res.status(401).json({ message: 'Invalid Token!' });

  res.status(200).json({ message: 'Valid Token!' });
});

app.put('/recipes/:id', validatePrice, (req, res) => {
  console.log('req:', req);
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: 'Recipe not found!' });

  recipes.slice(recipeIndex, 1);

  res.status(204).end();
});

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe.` });
});

app.listen(3002, () => {
  console.log('Aplicação ouvindo na porta 3002');
});
