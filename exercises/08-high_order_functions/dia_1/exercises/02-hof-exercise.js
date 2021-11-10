const checkResult = (number1, number2) => number1 === number2;

const betResult = (betNumber, callback) => {
  const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);

  const isCorretNumber = callback(betNumber, randomNumber);

  return isCorretNumber ?
    'Parabéns, você ganhou'
    : 'Tente novamente';
};

console.log(betResult(3, checkResult));