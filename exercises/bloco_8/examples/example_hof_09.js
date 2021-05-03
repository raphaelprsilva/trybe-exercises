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
  // Entendendo a expressão abaixo:
  // Se deixássemos a expressão accumulator[age] = accumulator[age] + 1
  // e por ventura, ela não existisse previamente no objeto, receberíamos um objeto assim: {'18': NaN, '19': NaN, '20': NaN},
  // pois não será possível acessar algo que não existe.

  // Para resolver este problema, fazemos um curto-circuito, ou seja, se a expressão accumulator[age] + 1 resultar em NaN,
  // ela retornará 1. Então, booleanamente falando, se a expressão (accumulator[age] + 1) for avaliado como um true, o valor
  // da expressão é atribuído para a propriedade. Se o valor for avaliado como false, o valor a direita de || é atribuído, no caso 1.
  accumulator[age] = accumulator[age] + 1 || 1;
  return accumulator;
}, {});

/* 
  Resultado esperado:

  '- Jogo 1
   - Jogo 2
   - Jogo 3
   - Jogo 4'
*/

console.log(ageFrequency);
