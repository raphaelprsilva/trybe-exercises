//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowestIndexValue(newArray) {
  var lowest = 0;

  for (let i = 0; i < newArray.length; i+=1) {
    if (newArray[i] < newArray[lowest]) {
      lowest = i;
    }
  }
  return lowest;
}


console.log(lowestIndexValue([4, 1, 10, 100]));