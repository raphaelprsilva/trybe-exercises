const express = require('express');
const bodyParser = require('body-parser');

const employeesController = require('./controllers/employeeControllers');

const app = express();

app.use(bodyParser.json());
const { Employee, Address } = require('./models');

(async () => {
  const employee = await Employee.findByPk(1);
  console.log('employee.dataValues:', employee.dataValues);
  const address = await employee.getAddresses();
  console.log('address:', address);
})();

app.use('/employees', employeesController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
