const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// QUESTION - Aqui seria o melhor lugar para colocar o middleware de verificação de erros do joi??
// Pergunto pois as validações não devem se comunicar com o service?
app.post('/user', middlewares.joiError, userController.create); // Create new user
app.get('/user', userController.getAll); // Read users
app.get('/user/:id', userController.getById); // Read user by id
app.put('/user/:id', middlewares.joiError, userController.update); // Update user
app.delete('/user/:id' , userController.exclude); // Delete user

// Erro de rota - Caso o usuário digite uma rota inexistente
// QUESTION - É uma boa prática fazer isso?
app.use('*', middlewares.getNonExistentRoute);

app.use(middlewares.error);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
