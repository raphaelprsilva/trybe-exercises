const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];

const sortedFoods = food.sort();

console.log(sortedFoods);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sortedNumbers = numbers.sort();

// Perceba que ele não ordenou da maneira correta
console.log(sortedNumbers);

const rightSortedNumbers = numbers.sort((elementOne, elementTwo) => elementOne - elementTwo);

console.log(rightSortedNumbers);