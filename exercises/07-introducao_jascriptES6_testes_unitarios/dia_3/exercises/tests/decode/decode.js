function decode(inputString) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = [1, 2, 3, 4, 5];
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

module.exports = decode;
