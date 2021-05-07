
// __________________Exemplo 1 de rest parameter_____________________
const howMuchParameters = (...args) => {
  console.log(`Parâmetros: ${args}`);
  return `Você passou ${args.length} parâmetros para a função`;
};

console.log(howMuchParameters(1, [2, 3, 1], 'Raphael'));
// __________________________________________________________________


// __________________Exemplo 2 de rest parameter_____________________
const sum = (...args) => args.reduce((accumulator, number) => accumulator + number, 0);

console.log(sum(1, 2, 3, 4, 1, 2, -2, 1, 1));
