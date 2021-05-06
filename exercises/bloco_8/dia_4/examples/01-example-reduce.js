const numbers = [-50, -85, -30, 3, 15];

// Exercício: retornar o maior valor de um array
// Fazer utlizando um for, e depois o reduce
// Compare as maneiras de se chegar no resultado

const largestNumber = (array) => {
  let largest = array[0] || null;
  let number = 0;
  
  for (let index = 0; index < array.length; index += 1) {
    number = array[index];
    largest = Math.max(largest, number);
  }
  return largest;
};

console.log(largestNumber(numbers));


const largestNumberReduce = numbers.reduce((accumulator, number) => (accumulator > number) ? accumulator : number, 0);

console.log(largestNumberReduce);