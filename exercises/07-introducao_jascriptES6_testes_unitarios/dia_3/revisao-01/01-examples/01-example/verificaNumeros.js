const checkNumbersAtArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Passar o array corretamente!');
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (typeof numbers[index] !== 'number') {
      return false;
    }
  }
  return true;
};

module.exports = checkNumbersAtArray;
