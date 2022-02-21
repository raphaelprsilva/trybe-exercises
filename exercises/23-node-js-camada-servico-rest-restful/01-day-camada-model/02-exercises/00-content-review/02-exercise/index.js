const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.use('/user', userController);

app.use('*', middlewares.getNonExistentRoute);
app.use(middlewares.error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
