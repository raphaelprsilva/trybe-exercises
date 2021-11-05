//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo (word) {
  let sizeArray = word.length;
  let decrement = sizeArray - 1;
  let countPalindrome = 0;
  let isPalindrome = true;

  for (let i = 0; i < Math.floor(sizeArray / 2); i+=1) {
    if (word[i] === word[decrement]) {
      countPalindrome += 1;
    }
    decrement -= 1;
  }
  if ((sizeArray % 2 === 0 && countPalindrome === ((sizeArray / 2))) || (sizeArray % 2 !== 0 && countPalindrome === (((sizeArray - 1) / 2)))) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
  }
  return isPalindrome;
}

console.log(verificaPalindromo('asstutssa'));