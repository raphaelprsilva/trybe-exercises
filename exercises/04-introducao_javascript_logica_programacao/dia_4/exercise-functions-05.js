//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function mostRepeatedNumber(arrayNumbers) {

  let countRepeatedNumbers = 0;
  let maximumFrequency = 1;
  let item;

  for (let i = 0; i < arrayNumbers.length; i+= 1) {
    for (let j = 0; j < arrayNumbers.length; j+=1) {
      if (arrayNumbers[i] === arrayNumbers[j]) {
        countRepeatedNumbers += 1;
      }
      if (maximumFrequency < countRepeatedNumbers) {
        maximumFrequency = countRepeatedNumbers;
        item = arrayNumbers[i];
      }
    }
    countRepeatedNumbers = 0;
  }
  return item;
}

console.log(mostRepeatedNumber([2, 3, 3, 5, 8, 2, 3]));