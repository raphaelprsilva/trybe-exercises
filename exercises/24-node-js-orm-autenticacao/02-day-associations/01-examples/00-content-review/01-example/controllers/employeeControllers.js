const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

const { Employee, Address } = require('../models');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

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

router.post('/employees', async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t }
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t }
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();

    return res.status(201).json({ message: 'Cadastrado com sucesso' });
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
