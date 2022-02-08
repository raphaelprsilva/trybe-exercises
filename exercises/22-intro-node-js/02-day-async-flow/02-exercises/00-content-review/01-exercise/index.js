const areParamsNums = (paramsArray) => paramsArray
  .every((num) => typeof num === 'number');

const doCalc = (param1, param2, param3) => {
  return new Promise((resolve, reject) => {
    const areAllNumbers = areParamsNums([param1, param2, param3]);
    if (!areAllNumbers) reject(new Error('Os parâmetros devem ser números!'));

    const result = (param1 + param2) * param3;
    if (result < 50) reject('Valor muito baixo!');
    resolve(result);
  });
};

doCalc(1, 2, 50)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.error(error));