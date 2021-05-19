function encode(inputString) {
  if (typeof inputString !== 'string') {
    throw new Error('Você deve digitar uma string');
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const numbers = [1, 2, 3, 4, 5];
  let outputString = '';
  let storeNumber = 0;
  for (let index = 0; index < inputString.length; index += 1) {
    for (let index2 = 0; index2 < vowels.length; index2 += 1) {
      if (inputString[index] === vowels[index2]) {
        storeNumber = numbers[index2];
      }
    }
    if (storeNumber !== 0) {
      outputString += storeNumber;
      storeNumber = 0;
    } else {
      outputString += inputString[index];
    }
  }
  return outputString;
}

function decode(inputString) {
  if(typeof inputString !== 'string') {
    throw new Error('Você deve digitar uma string');
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const numbers = [1, 2, 3, 4, 5];
  let outputString = '';
  let storeVowel = null;
  for (let index = 0; index < inputString.length; index += 1) {
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (inputString[index] == numbers[index2]) {
        storeVowel = vowels[index2];
      }
    }
    if (storeVowel !== null) {
      outputString += storeVowel;
      storeVowel = null;
    } else {
      outputString += inputString[index];
    }
  }
  return outputString;
}

module.exports = { 
  encode,
  decode,
};