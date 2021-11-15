const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const transformToObject = ([carName, brand, year]) => ({ carName, brand, year });

console.log(transformToObject(palio));
console.log(transformToObject(shelbyCobra));
