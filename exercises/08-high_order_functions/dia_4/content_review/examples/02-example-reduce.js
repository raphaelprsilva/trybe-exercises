const numbers = [50, 85, -30, 3, 110, 15];

let biggestNumber = -100_000_000_000;

for (let index = 0; index < numbers.length; index += 1) {
  if (biggestNumber < numbers[index]) {
    biggestNumber = numbers[index];
  }
}

console.log('biggestNumber with for:', biggestNumber);


const biggestNumberWithReduce = numbers
  .reduce((acc, number) => (acc > number ? acc : number), 0);

console.log('biggestNumberWithReduce:', biggestNumberWithReduce);