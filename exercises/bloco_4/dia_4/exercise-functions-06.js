function sumNumbers(numbers) {
  let sumAux = 0;
  for (let index = 1; index <= numbers; index += 1) {
    sumAux += index;
  }
  return sumAux;
}

console.log(sumNumbers(5));