
const skills = ['JS', 'DOM', 'HTML', 'CSS', 'React'];

const exFunction1 = (string) => {
  const newWord = 'Bebeto';
  const result = string.replace(/x/g, newWord);
  return result;
}

let resultFunction1 = exFunction1('Raphael x arqui asdas x  dsads xx.');

const exFunction2 = (stringA , stringB) => {
  return `${stringA} ${stringB}`;
}

console.log(exFunction2(resultFunction1, skills));

