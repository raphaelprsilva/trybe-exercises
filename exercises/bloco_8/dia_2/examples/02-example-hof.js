// 2. - Dado um array, encontre e imprima no console,
// o primeiro elemento que seja divisível por 5
// 2.1 - Utilize o loop for
// 2.2 - Utilize uma HOF (sugestão: find)

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

let firstMatch;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    firstMatch = numbers[index];
    console.log(firstMatch);
    break;
  }
}

const firstMultipleOf5 = numbers.find((number) => number % 5 === 0, 0);

console.log(firstMultipleOf5);


// ----------------------------------------------------------------------
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((currentValue, index, array) => {
  console.log(`- Valor Atual: ${currentValue}\n - Index: ${index}\n - Array: ${array}`);

});