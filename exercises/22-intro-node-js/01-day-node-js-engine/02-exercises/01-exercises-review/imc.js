const readline = require('readline-sync');

const getIMC = (height, weight) => Number((weight / (height ** 2)).toFixed(2));

const personHeight = readline.questionFloat('Type your height (meters): ');
const personWeight = readline.questionFloat('Type your weight (kg): ');

const personIMC = getIMC(personHeight, personWeight);

console.log(`Your IMC is: ${personIMC}`);

if (personIMC < 18.5) {
  console.log('Abaixo do peso (magreza)');
}

if (personIMC >= 18.5 && personIMC < 24.9) {
  console.log('Peso normal');
}

if (personIMC > 25 && personIMC < 29.9) {
  console.log('Acima do peso (sobrepeso)');
}

if (personIMC >= 30 && personIMC < 34.9) {
  console.log('Obesidade grau I');
}

if (personIMC >= 35 && personIMC < 39.9) {
  console.log('Obesidade grau II');
}
