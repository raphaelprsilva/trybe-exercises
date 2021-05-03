const numbers = [19, 21, 30, 3, 45, 22, 15];

// Exercício: retornar um array com todos os números pares

const even = (number) => number % 2 === 0;

const evenNumber = numbers.filter(even, []);

console.log(evenNumber);


numbers.forEach((number, index) => {
  if (numbers[index] % 2 === 0) {
    console.log(numbers[index]);
  }
});


