const betResult = (betNumber, callback) => {
  let randomNumber = Math.floor((Math.random() * 5) + 1);
  const result = callback(betNumber, randomNumber);

  if (result) {
    return console.log('Parabéns, você ganhou!');
  }
  return console.log('Tente novamente');

};

const checkBet = (bettedNumber, betResult) => {
  if (bettedNumber === betResult) return true;
  return false;
};

betResult(5, checkBet);