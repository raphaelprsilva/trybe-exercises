const numbers = [1, 2, 3];

const sum = numbers.reduce((accumulator, item) => accumulator + item, 0);

console.log(`A soma dos valores do array é: ${sum}.\n`);

const cart = [
  {name: 'Jogo 1', price: 20.28},
  {name: 'Jogo 2', price: 15.24},
  {name: 'Jogo 3', price: 102.5},
  {name: 'Jogo 4', price: 75.94},
];

const cartGames = cart.reduce((accumulator , { name }) => `${accumulator}- ${name}\n`, '');

console.log(cartGames);



const people = [
  {id: 5, name: 'Angélica', age: 18, federativeUnit: 'Minas Gerais'},
  {id: 81, name: 'Thales', age: 19, federativeUnit: 'São Paulo'},
  {id: 47, name: 'Ana', age: 18, federativeUnit: 'Alagoas'},
  {id: 87, name: 'Felipe', age: 20, federativeUnit: 'Rio de Janeiro'},
  {id: 9, name: 'Gabriel', age: 19, federativeUnit: 'Brasília'},
];

/*
  Resultado esperado:

  { 18: 2, 19: 2, 20: 1}
*/

const ageFrequency = people.reduce((accumulator, { age }) => {
  accumulator[age] = accumulator[age] + 1 || 1;
  return accumulator;
}, {});

console.log(ageFrequency);
