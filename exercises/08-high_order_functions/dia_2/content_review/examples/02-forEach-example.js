const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplicationTable = (numbers, multiplicator) => numbers
  .forEach((number) => {
    console.log(`${multiplicator} x ${number} = ${number * multiplicator}`);
  });

multiplicationTable(numbers, 2);


const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

names.forEach((name, index) => names[index] = name.toUpperCase());

console.log(names);
