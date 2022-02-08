const areParamsNums = (paramsArray) => paramsArray
  .every((num) => typeof num === 'number');

const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

const randomNumber1 = getRandomNumber();
const randomNumber2 = getRandomNumber();
const randomNumber3 = getRandomNumber();

const doCalc = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    const areAllNumbers = areParamsNums([param1, param2, param3]);
    if (!areAllNumbers) reject(new Error('Os parâmetros devem ser números!'));

    const result = (param1 + param2) * param3;
    if (result < 50) reject('Valor muito baixo!');
    resolve(result);
  });
};

doCalc(randomNumber1, randomNumber2, randomNumber3)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.error(error));