const sum = (...numbers) => numbers
  .reduce((acc, number) => acc + number, 0);

console.log(sum(2, 5, 3, 9, 12, 4, 5));