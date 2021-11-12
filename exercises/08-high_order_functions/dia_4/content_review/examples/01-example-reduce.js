const numbers = [32, 15, 3, 2, -5, 56, 10];

let sumNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}

console.log(sumNumbers);

const sumNumbersWithReduce = numbers
  .reduce((acc, number) => acc + number, 0);

console.log(sumNumbersWithReduce);