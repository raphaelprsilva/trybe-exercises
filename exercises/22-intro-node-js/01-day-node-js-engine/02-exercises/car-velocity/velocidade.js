const readline = require('readline-sync');

const distance = readline.questionInt('Qual sua distância? (em metros): ');
const time = readline.questionInt('Qual o tempo? (em segundos): ');

const getVelocity = () => {
  const velocity = distance / time;
  console.log(`Sua velocidade atual é: ${velocity} m/s`);
};

getVelocity();
