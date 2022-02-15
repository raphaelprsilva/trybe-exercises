const express = require('express');
const router = express.Router();

const { CepMiddlewares } = require('../middlewares');

router.get('/:cep', CepMiddlewares.findAddressByCep); // Busca endereço pelo cep
router.get('/', CepMiddlewares.findAddresses); // Busca todos os endereços
router.post('/', CepMiddlewares.createNewAddress); // Cria novo endereço

module.exports = router;
