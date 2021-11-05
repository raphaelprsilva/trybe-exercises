function endinWord(word, ending) {
  let sizeEnding = ending.length;
  let sizeWord = word.length;
  let diffWordEnding = sizeWord - sizeEnding;
  let countMatches = 0;

  if(word.length > ending.length) {
    for (let index = 0; index < sizeEnding; index += 1) {
      if(word[index + diffWordEnding] === ending[index]) {
        countMatches += 1;
      }
    }
    if(countMatches === sizeEnding) return true;
    return false;
  }
  return 'Você está digitando o parâmetro de maneira errada.';
}

console.log(endinWord('raphael', 'ael'));