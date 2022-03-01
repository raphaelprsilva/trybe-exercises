const express = require('express');
const router = express.Router();

const { Employee, Address } = require('../models');

router.get('/', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    return res.status(500).json({ message: 'Algo deu errado ' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // EAGER LOADING

    // const employee = await Employee.findOne({
    //   where: { id },
    //   include: [
    //     {
    //       model: Address,
    //       as: 'addresses',
    //       attributes: { exclude: ['employeeId'] },
    //     },
    //   ],
    // });

    // LAZY LOADING
    const employee = await Employee.findOne({ where: { id } });

    console.log('req.query:', req.query);

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });

      return res.status(200).json({ employee, addresses });
    }

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
