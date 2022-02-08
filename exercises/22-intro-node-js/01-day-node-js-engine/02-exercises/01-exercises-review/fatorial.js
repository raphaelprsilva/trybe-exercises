const readline = require('readline-sync');

const getFatorial = (num) => {
  let result = 1;

  if (num === 1) return 0;
  if (num <= 0) return 'Digite um valor inteiro e positivo';

  for (let index = num; index >= 1; index -= 1) {
    result *= index;
  }

  return result;
};

const userFatorialInput = readline.questionInt('Digite o número para calcular o fatorial: ');
console.log(`O fatorial de ${userFatorialInput}! é ${getFatorial(userFatorialInput)}`);