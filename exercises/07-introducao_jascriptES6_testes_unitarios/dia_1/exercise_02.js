const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const crescentOrder = (numbersArray) => {
  const sortedArray = numbersArray.sort((a, b) => a - b);
  return sortedArray;
}

const sortedArrayFinal = crescentOrder(oddsAndEvens);
console.log(`Os números ${sortedArrayFinal} estão em ordem crescente.`);
