const express = require('express');
const bodyParser = require('body-parser');

const employeesController = require('./controllers/employeeControllers');

const app = express();

app.use(bodyParser.json());

app.use('/employees', employeesController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
