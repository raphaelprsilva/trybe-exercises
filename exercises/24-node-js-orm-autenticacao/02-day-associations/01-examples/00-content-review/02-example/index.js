const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');

const app = express();
app.use(bodyParser.json());

app.use('/userbooks', userController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
