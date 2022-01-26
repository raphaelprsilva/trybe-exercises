const express = require('express');
const app = express();

app.get('/ping', async (req, res) => {
  res.status(200).json({ message: "pong!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
