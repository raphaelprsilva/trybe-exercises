const carros = ['Gol', 'Celta', 'HB20'];
const motos = ['Biz', 'Fan', 'Titan'];

const veiculos1 = [...carros, ...motos];

const veiculos2 = [...motos, ...carros];

const veiculos3 = ['Marea',...motos, 'Fusion', ...carros];


// A ordem como os elementos são inseridos, é importante

console.log(veiculos1);
console.log(veiculos2);
console.log(veiculos3);