const people = [
  { id: '1', name: 'Raphael', age: 27},
  { id: '2', name: 'Danielle', age: 26},
  { id: '3', name: 'Rodrigo', age: 25},
  { id: '4', name: 'Milo', age: 10},
];

let result;

// -------------------------------------------------------------------
// Contar o número de pessoas no array de objetos

// Como desejamos contar, o nosso resultado, será um number
result = people.reduce((accumulator, person) => accumulator + 1, 0);

//console.log(result);
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// Somar as idades
result = people.reduce((accumulator, person) => accumulator + person.age, 0);

// console.log(result);

// -------------------------------------------------------------------


// -------------------------------------------------------------------
// Fazer um array dos nomes
// Existem duas maneira: com o map ou com o reduce

// map
result = people.map(({name}) => name);
// console.log(result);

// reduce
result = people.reduce((accumulator, person) => [...accumulator, person.name], []);
//ou
result = people.reduce((accumulator, {name}) => [...accumulator, name], []);

// console.log(result);

// -------------------------------------------------------------------


// -------------------------------------------------------------------
// Converter o id em uma key e encontrar a pessoa

result = people.reduce((accumulator, person) => {
  return {...accumulator, [person.id] : person};
}, {});

// console.log(result);

// -------------------------------------------------------------------


// -------------------------------------------------------------------
// Encontre a idade máxima
result = people.reduce((accumulator, person) => {
  if (accumulator === null || person.age > accumulator) return person.age;
  return accumulator;
}, null);

// 1ª iteração
// if (null === null || 27 > null) return 27;

// 2ª iteração
// accumulator = 27
// person.age = 26
// if (27 === null || 26 > 27) false;
// return 27;

// 3ª iteração
// accumulator = 27
// person.age = 25


// console.log(result);




// -------------------------------------------------------------------
// Encontre pelo nome

// First way: using find
result = people.find((person) => person.name === 'Raphael');

// console.log(result);


// Second way: using reduce
result = people.reduce((accumulator, person) => {
  if (accumulator !== null) return accumulator;
  if (person.name === 'Raphael') return person;
  return null;
}, null);

// console.log(result);

// -------------------------------------------------------------------


// -------------------------------------------------------------------
// Retornar se todos são maiores que 18

// usando every
result = people.every((person) => person > 18);

// Resultado: false, ou seja, nem todos são maiores que 18 anos
console.log(result);

// Quem é menor que 18 anos?
result = people.find((person) => person.age < 18);
console.log(result);


// usando reduce
result = people.reduce((accumulator, person) => {
  console.log(accumulator);
  if (!accumulator) return false;
  console.log(accumulator);
  return person.age > 18;
}, true);

// 1ª iteração
// 


console.log(result);
