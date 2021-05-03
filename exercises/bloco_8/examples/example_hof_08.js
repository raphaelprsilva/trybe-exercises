// A HOF ou método reduce, é muito poderosa. Ela consegue retornar qualquer tipo de valor.

const cart = [
  {name: 'Jogo 1', price: 20.28},
  {name: 'Jogo 2', price: 15.24},
  {name: 'Jogo 3', price: 102.5},
  {name: 'Jogo 4', price: 75.94},
];

const productLitst = cart.reduce((accumulator, { name }) => `${accumulator}- ${name}\n`, '');

// Obs.: O valor retornado será uma string, pois declaramos uma string vazia no final da função

// Primeira iteração
// accumulator = ''-;
// name = 'Jogo 1';

// Segunda iteração
// accumulator = -'Jogo 1';
// name = 'Jogo 2';

// Terceira iteração
// accumulator = -'Jogo 1'- 'Jogo 2';
// name = 'Jogo 3';


console.log(productLitst);

