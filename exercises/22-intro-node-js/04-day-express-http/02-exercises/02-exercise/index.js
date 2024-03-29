const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const { getSimpsons, setSimpsons } = require('./fs-utils');

const app = express();
app.use(bodyParser.json());

app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const simpsons = await getSimpsons();
    const simpson = simpsons.find((s) => s.id === id);

    if (!simpson)
      return res.status(404).json({ message: `Simpson not found.` });

    res.status(202).json(simpson);
  })
);

app.get(
  '/simpsons',
  rescue(async (_req, res) => {
    const simpsons = await getSimpsons();
    res.status(200).json(simpsons);
  })
);

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;
    const newSimspon = { id, name };
    const simpsons = await getSimpsons();
    const doesSimpsonExists = simpsons.find((s) => s.id === id);

    if (doesSimpsonExists)
      return res.status(409).json({ message: `id already exists!` });

    simpsons.push(newSimspon);
    await setSimpsons(simpsons);
    console.log(simpsons);
    res.status(204).end();
  })
);

app.listen(3001, () => {
  console.log(`Escutando na porta 3001.`);
});
