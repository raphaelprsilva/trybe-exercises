function biggestNumber(testArray) {
  let arrayLength = testArray.length;
  let biggestValue = 0;
  let biggestIndex = 0;

  for(let i = 0; i < arrayLength; i+=1) {
    if (testArray[i] > biggestValue) {
      biggestValue = testArray[i];
      biggestIndex = i;
    }
  }
  return biggestIndex;
}

console.log(biggestNumber([200, 10000, 5, 10000, 10]));