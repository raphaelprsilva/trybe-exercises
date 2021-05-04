const people = [
  {id: '1', name: 'Raphael', age: 25},
  {id: '2', name: 'Danielle', age: 21},
  {id: '3', name: 'Rodrigo', age: 25},
  {id: '4', name: 'Valéria', age: 50},
];

let result;

// count
result = people.reduce((accumulator) => accumulator + 1, 0);

console.log(result);

// sum ages
result = people.reduce((accumulator, { age }) => accumulator + age, 0);

console.log(result);



// arr of names (map)
result = people.reduce((accumulator, { name }) => [...accumulator , name ], []);

// Entendendo a lógica do exercício

//Priemeira iteração
let accumulator = [];
let name = 'Raphael';
let retorno = [...accumulator, name];

retorno

// Segunda iteração
let accumulator2 = retorno;
let name2 = 'Danielle';
let retorno2 = [...accumulator2, name2];

retorno2;
// e assim por diante, até terminar a iteração

console.log(result);


// Convert to id => person lookup

result = people.reduce((accumulator, person) => {
  return {...accumulator, [person.id]: person};
}, {});

console.log(result);
console.log(result['3']);


// max age

// foi colocado 'null' no lugar de 0, imaginando que possivelmente pode haver um número
// máximo que seja menor que 0. Se for, o maior resultado seria 0.
result = people.reduce((accumulator, person) => {
  if (accumulator === null || person.age > accumulator) return person.age;
  return accumulator;
}, null);

//primeira iteração
// accumulator = null;
// person.age = 25;
// if (null === null || 25 > null) return 25;

//segunda iteração
// accumulator = 25;
// person.age = 21;
// if (25 === null || 21 > 25) => false;
// return 25;

//terceira iteração
// accumulator = 25;
// person.age = 35;
// if (25 === null || 35 > 25) return 35;

//quarta iteração
// accumulator = 35;
// person.age = 50;
// if(35 === null || 50 > 35) return 50;

console.log(result);



// find min age

result = people.reduce((accumulator, person) => {
  if( accumulator === null || person.age < accumulator) return person.age;
  return accumulator;
}, null);

console.log(result);


// find by name

result = people.reduce((accumulator, person) => {
  if (accumulator !== null) return accumulator;
  if (person.name === 'Danielle') return person;
  return null;
}, null);

console.log(result);


// find all over 