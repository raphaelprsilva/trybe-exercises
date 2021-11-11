/*
  exemplo 01
*/

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];

food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

/*
  exemplo 02
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 102];

numbers.sort();
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
// 😮



/*
  exemplo 03
*/

const points = [40, 100, 1, 5, 25, 10];

points.sort((element1, element2) => element1 - element2);
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]


/*
  exemplo 04
*/

const points2 = [40, 100, 1, 5, 25, 10];

points2.sort((element1, element2) => element2 - element1);
console.log(points2); // [ 100, 40, 25, 10, 5, 1 ]


/*
  Utilize a sort para ordenar o array pela idade das pessoas em
  ordem crescente
*/

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((person1, person2) => person1.age - person2.age);

console.log(people);