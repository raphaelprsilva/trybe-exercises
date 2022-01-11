const fs = require('fs').promises;

const checkParamType = (nums) => nums.every((num) => typeof num === 'number');

const handleNumbers = async (num1, num2, num3) => {
  try {
    const areParamsNumbers = checkParamType([num1, num2, num3]);
    if (!areParamsNumbers) throw new Error('Informe apenas números!');

    const numbersOperation = (num1 + num2) * num3;
    const isNumbersOperationLessThan50 = numbersOperation < 50;

    if (isNumbersOperationLessThan50) throw new Error('Valor muito baixo!');

    return numbersOperation;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

/*
handleNumbers(1, 2, 3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

handleNumbers(30, 20, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

handleNumbers('1', 2, 3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
*/

module.exports = {
  handleNumbers,
};
