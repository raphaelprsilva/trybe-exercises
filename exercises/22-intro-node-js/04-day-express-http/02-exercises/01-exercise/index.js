const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(3001, () => {
  console.log(`Escutando na porta 3001`);
});
