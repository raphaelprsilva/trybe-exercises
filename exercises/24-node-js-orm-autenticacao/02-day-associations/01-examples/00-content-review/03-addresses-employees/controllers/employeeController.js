const express = require('express');
const router = express.Router();

const { Employee, Address } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Aqui, estamos fazendo um eager loading
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findAll({
      where: { id },
      include: [
        {
          model: Address,
          as: 'addresses',
          attributes: { exclude: ['employeeId'] },
        },
      ],
    });

    if (!employee) {
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    }

    return res.status(200).json(employee);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
