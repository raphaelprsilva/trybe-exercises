const isNumber = value => typeof value === 'number';

// Quando insiro um 'async' na function, o retorno será uma Promise

//Faça o link deste código em uma página html e teste os resultados

async function add (firstNumber, secondNumber) {
  if (!isNumber(firstNumber) || !isNumber(secondNumber)) {
    throw 'firstNumber e secondNumber devem ser números';
  }

  return firstNumber + secondNumber;
}

add(5, 9)
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })