const readline = require('readline-sync');

const personWeight = readline.questionFloat('Qual o seu peso? (em kg): ');
const personHeight = readline.questionInt('Qual sua altura? (em centímetros): ');

const getImc = () => {
  const heightInMeters = personHeight / 100;
  const imc = personWeight / (heightInMeters ** 2);
  const roundedImc = Math.round(imc).toFixed(2);

  console.log(`Seu IMC é: ${roundedImc}`);

  if (roundedImc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (roundedImc >= 18.5 && roundedImc <= 24.9) {
    console.log('Situação: Peso normal');
    return;
  }

  if (roundedImc >= 25 && roundedImc <= 29.9) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (roundedImc >= 30 && roundedImc <= 34.9) {
    console.log('Situação: Obesidade Grau I');
    return;
  }

  if (roundedImc >= 35 && roundedImc <= 39) {
    console.log('Situação: Obesidade Grau II');
    return;
  }

  console.log('Situação: Obesidade grays III e IV');
};

getImc();
