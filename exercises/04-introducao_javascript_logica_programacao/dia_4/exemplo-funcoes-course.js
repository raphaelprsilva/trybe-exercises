function sum (a, b) {
  let soma = a + b;
  return soma;
}

function less(a, b) {
  let menos = a - b;
  return menos;
}

function multiply(a, b) {
  let multiplica = a * b;
  return multiplica;
}

function divide(a, b) {
  if (b <= 0) {
    return console.log('Não é possível dividir um valor por zero.');
  } else {
    let divisao = a / b;
    return divisao;
  }
}

function modulo(a, b) {
  let moduloDiv = a % b;
  return moduloDiv;
}

console.log ('A soma dos números é: ' + sum(2, 4));
console.log ('A subtração dos números é: ' + less(2, 4));
console.log ('A multiplicacao dos números é: ' + multiply(2, 4));
console.log ('A divisão dos números é: ' + divide(2, 4));
console.log ('O resto da divisão dos números é: ' + modulo(2, 4));