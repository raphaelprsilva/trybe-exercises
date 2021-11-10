/*
  Queremos encontrar e imprimir no console o
  primeiro elemento de um array que satisfaça a uma
  determinada condição.

  Pode ser, por exemplo, encontrar o primeiro
  número que seja divisível por 5 em uma lista de
  números.
*/

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];


// Utilizando for e if:

const findFirstNumberDivisibleByFive = (numbers) => {
  for (let index = 0; index < numbers.length; index += 1) {
    const currentNumber = numbers[index];
    if (currentNumber % 5 === 0) return currentNumber;
  }
}

console.log(findFirstNumberDivisibleByFive(numbers));


// utilizando o Array.find

const findDivBy5 = (numbers) => numbers
  .find((number) => number % 5 === 0)


console.log(findDivBy5(numbers));
