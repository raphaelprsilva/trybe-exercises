const express = require('express');
const router = express.Router();

const middlewares = require('../middlewares');

router.post('/', middlewares.joiValidateUser, middlewares.create); // Create new user
router.get('/', middlewares.getAll); // Read users
router.get('/:id', middlewares.getById); // Read user by id
router.put('/:id', middlewares.joiValidateUser, middlewares.update); // Update user
router.delete('/:id' , middlewares.exclude); // Delete user

module.exports = router;
