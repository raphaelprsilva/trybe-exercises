const readline = require('readline-sync');

const getRandomNumberBetween0And10 = () => Math.round(Math.random() * 10);


const playGame = () => {
  const randomNumber = getRandomNumberBetween0And10();
  const userNumber = readline.questionInt('Type a number between 0 and 10: ');

  if (randomNumber === userNumber) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Ah, não foi dessa vez. O número era ${randomNumber}`);
    const playAgain = readline.keyInYN('Quer jogar novamente? ');
    if (playAgain) playGame();
  }
};

playGame();