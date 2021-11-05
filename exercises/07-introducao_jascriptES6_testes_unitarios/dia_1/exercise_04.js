// let stringTest = 'Raphaella Pereira Silva';
// let result = stringTest.split(' ');


// console.log(result[0].length);

const longestWord = (str) => {
  const result = str.split(' ');
  let lgtWord = 0;

  for (let index = 0; index < result.length; index += 1) {
    if (result[index].length > lgtWord) {
      lgtWord = result[index].length;
    }
  }
  return lgtWord;
}

console.log(longestWord('Raphael Pereira Silva'));