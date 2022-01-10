const fs = require('fs').promises;

const checkParamType = (nums) => nums.every((num) => typeof num === 'number');

const handleNumbers = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    const areParamsNumbers = checkParamType([num1, num2, num3]);

    if (!areParamsNumbers) return reject('Informe apenas números!');

    const numbersOperation = (num1 + num2) * num3;
    const isNumbersOperationLessThan50 = numbersOperation < 50;

    if (isNumbersOperationLessThan50) return reject('Valor muito baixo.');
    resolve(numbersOperation);
  });
};

handleNumbers(1, 2, 3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

handleNumbers(30, 20, 10)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

handleNumbers('1', 2, 3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));

