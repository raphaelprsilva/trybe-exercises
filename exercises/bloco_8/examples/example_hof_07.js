// Soma de números em um array
const numbers = [1, 2, 3];

const sum = numbers.reduce((accumulator, item) => accumulator + item, 0);

console.log(sum);

// Como o reduce vai funcionar?
// const sum = numbers.reduce((accumulator, item) => accumulator + item, 0);

// Primeira iteração
// ----------------------------------------------------
// accumulator = 0; (Recebe o zero do final da função)
// item = 1; (Recebe o número 1 do rray);
// const sum = numbers.reduce((0, 1) => 0 + 1, 0);
// accumulator = 1;

// Segunda iteração
// ----------------------------------------------------
// accumulator = 1;
// item = 2; (array numbers);
// const sum = numbers.reduce((1, 2) => 1 + 2, 0);
// accumulator = 3;

// Terceira iteração
// ----------------------------------------------------
// accumulator = 3;
// item = 3; (array numbers);
// const sum = numbers.reduce((3, 3) => 3 + 3, 0);
// accumulator = 6;

// sum = 6;