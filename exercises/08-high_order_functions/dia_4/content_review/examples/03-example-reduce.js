const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEvenNumbers = (numbers) => numbers
  .filter((number) => number % 2 === 0)
  .reduce((acc, number) => acc + number, 0);

console.log(sumEvenNumbers(numbers));

const sumEvenNumbers2 = (numbers) => {
  return numbers.reduce((acc, number) => {
    if (number % 2 === 0) {
      acc += number;
    }
    return acc;
  }, 0);
};

console.log(sumEvenNumbers2(numbers));
