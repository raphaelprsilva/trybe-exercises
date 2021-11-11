/*
  Crie uma função que verifique se pelo menos algum
  número é ímpar
*/

const numbers = [2, 4, 6, 8, 12, 14, 16, 17];

const checkOddNumbers = (numbers) => {
  return numbers.some((number) => number % 2 !== 0);
};

console.log(checkOddNumbers(numbers));

/*
  Crie uma função que verifique se todos os números
  são ímpares
*/

const numbers2 = [1, 3, 5, 7, 9, 10];

const checkAllOddNumbers = (numbers) => {
  return numbers
    .every((number) => number % 2 !== 0);
}

console.log(checkAllOddNumbers(numbers2));

/*
  Crie uma função que verifique se dado uma lista de
  nomes, algum nome começa com a letra especificada
*/

const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names
  .some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false


/*
  Crie uma função que verifica se o estudante passou
  em todas as matérias
*/

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => {
  const studentStatus = Object.values(studentGrades);
  const approved = 'Aprovado';
  const isStudentApprovedAll = studentStatus
    .every((status) => status === approved);

  return isStudentApprovedAll ?
    'Parabéns, o estudante foi aprovado em tudo'
    : 'O estudante não foi aprovado em tudo';
};

console.log(verifyGrades(grades));


/*
  Escreva uma função que dado um array de nomes e um nome
  retorne true se ele estiver contido e caso contrário,
  retorne false , use some
*/

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const hasSomeName = arr.some((element) => element === name);

  return hasSomeName ?
    `O nome ${name} existe no array`:
    `O nome ${name} não existe no array`;
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Raphael'));


/*
  Escreva uma função que dado um array de pessoas e uma idade mínima retorne
  true se todas tiverem a idade maior ou igual a mínima e caso contrário
  false , use every
*/

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 19 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const hasAllAgesGreaterThanMinAge = arr
    .every(({ age }) => age >= minimumAge);

  return hasAllAgesGreaterThanMinAge ?
    `Todos possuem idade maior ou igual à ${minimumAge}`
    : `Nem todos possuem a idade maior ou igual à ${minimumAge}`;
};

console.log(verifyAges(people, 18));

