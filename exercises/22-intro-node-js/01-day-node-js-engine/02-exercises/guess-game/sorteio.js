const readline = require('readline-sync');

const getRandomNumber = () => {
  const min = 0;
  const max = Math.floor(10);
  return Math.floor(Math.random() * (max - min) + min);
};


const playAgain = () => {
  const willPlayAgain = readline.question(
    'Digite "s" para jogar novamente e qualquer coisa para não.'
  );
  if (willPlayAgain === 's') {
    checkUserInputWithRandomNumber();
  }
};

const checkUserInputWithRandomNumber = () => {
  const numberUserInput = readline.questionInt('Insira um número inteiro: ');
  const randomNumber = getRandomNumber();
  const isRandomNumberEqualUserNumber = randomNumber === numberUserInput;

  if (isRandomNumberEqualUserNumber) {
    console.log('Você acertou!');
    playAgain();
  } else {
    console.log(`Ah, não foi dessa vez. O número sorteado foi ${randomNumber}.`);
    playAgain();
  }

}

checkUserInputWithRandomNumber();

