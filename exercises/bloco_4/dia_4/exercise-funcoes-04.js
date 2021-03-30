//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function largerAmountCharacters(newArray) {

  let auxiliar = 1;
  let maxCharacters = '';

  for (let i = 0; i < newArray.length; i+= 1) {
    if (newArray[i].length > maxCharacters.length) {
      maxCharacters = newArray[i];
    }
  }
  return maxCharacters;
}


console.log(largerAmountCharacters(['José', 'Lucasaaaaa', 'Nádia', 'Fernanda', 'Cairo', 'Joanaaaaaaaaaa']));