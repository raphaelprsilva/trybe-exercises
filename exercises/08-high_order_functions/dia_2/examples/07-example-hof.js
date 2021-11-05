// Verificar se todo elemento do array é maior do que 30

let numbers = [40, 12, 56, 874, 93, 4, 02, 94, 45, 2];

const numbersGreaterThan30 = numbers.every((element) => {
  return element > 30;
});

console.log(numbersGreaterThan30);


// Verificar se pelo menos um elemento do array é maior do que 30

const someNumberGreaterThan30 = numbers.some((element) => {
  return element > 30;
});

console.log(someNumberGreaterThan30);

// Verificar quais elementos são maiores que 30

const greaterThan30 = numbers.filter((element) => element > 30, []);

console.log(greaterThan30);


const lowerThan30 = numbers.filter(element => element < 30, []);

console.log(lowerThan30);
