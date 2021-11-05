const list = [
  { year: 1956, size: 'XXL' },
  { year: 1968, size: 'XL' },
  { year: 2009, size: 'M' },
  { year: 2009, size: 'M' },
];

console.log(list.color);

const result = list.sort((a, b) => (a.year - b.year) ? -1 : 1);

// Entendendo a lógica

// (1956 > 1968) ? Não. Então, return 1. Faça com que 'b' preceda 'a'.
// (1956 > 2009) ? Não. Então, return 1. Faça com que '

console.log(result);