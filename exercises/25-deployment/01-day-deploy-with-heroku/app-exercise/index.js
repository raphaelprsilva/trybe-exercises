const express = require('express');

const app = express();

app.get('/', (request, response, next) => {
  return response.json({ message: 'Está vivo!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`🚀 Listening on PORT ${PORT}`));
