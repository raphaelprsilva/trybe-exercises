const numbers = [19, 21, 30, 3, 45, 22, 15];

const filterAllEvenNumbers = (numbers) => {
  const getEvenNumbers = (number) => number % 2 === 0;
  return numbers.filter(getEvenNumbers);
};

console.log(filterAllEvenNumbers(numbers));