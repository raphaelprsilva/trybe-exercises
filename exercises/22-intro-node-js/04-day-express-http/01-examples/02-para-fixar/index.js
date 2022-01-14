const express = require("express");
const app = express();

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

app.get("/drinks/search", (req, res) => {
  const { name } = req.query;
  console.log(req.query);
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));
  res.status(200).json(filteredDrinks);
});

app.get("/drinks/:minPrice", (req, res) => {
  const { minPrice } = req.params;
  const drink = drinks.filter((d) => d.price >= minPrice);

  if (!drink) return res.status(404).json({ message: "Drink not found!" });

  res.status(200).json(drink);
});

app.listen(3001, () => {
  console.log("Ouvindo na porta 3001!");
});
