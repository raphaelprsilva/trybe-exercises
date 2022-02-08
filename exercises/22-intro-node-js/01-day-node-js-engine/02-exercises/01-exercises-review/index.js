const readline = require('readline-sync');

const runScripts = () => {
  const options = ['Sorteio', 'Calcular Velocidade', 'Calcular IMC'];
  const index = readline.keyInSelect(options, 'Qual dos scripts você quer rodar?');
  const newIndex = index + 1;

  if (newIndex === 1) require('./sorteio');
  if (newIndex === 2) require('./velocity');
  if (newIndex === 3) require('./imc');
};

runScripts();
