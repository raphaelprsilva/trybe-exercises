const bodyParser = require('body-parser');
const express = require('express');

const employeeController = require('./controllers/employeeController');

const app = express();
app.use(bodyParser.json());

app.use('/employees', employeeController);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Listening on Port ${PORT}`));
