const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const { getSimpsons, setSimpsons } = require('./fs-utils');

const app = express();
app.use(bodyParser.json());

app.get(
  '/simpsons',
  rescue(async (req, res) => {
    const simpsons = await getSimpsons();
    res.status(200).json(simpsons);
  })
);

app.listen(3001, () => {
  console.log(`Escutando na porta 3001.`);
});
