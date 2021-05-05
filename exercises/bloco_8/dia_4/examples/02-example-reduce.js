const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// faça uma função que some todos os números pares do array acima

// 1º passo: filtrar os números pares
// 2º passo: somá-los

const verifyEvenNumbers = (number) => number % 2 === 0;
const sumNumbers = (accumulator, number) => accumulator + number;

const sumEven = numbers.filter(verifyEvenNumbers).reduce(sumNumbers);


console.log(sumEven);