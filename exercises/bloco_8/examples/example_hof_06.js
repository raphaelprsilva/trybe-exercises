const firstTravelerCities = [
  'Uberlândia',
  'Uberaba',
  'São Paulo',
  'BH',
  'Fortaleza',
];

const secondTravelerCities = [
  'Manaus',
  'BH',
  'Uberlândia',
  'Florianópolis',
  'Porto Alegre',
];

// Exercicio: Mostrar na tela, as cidades em comum dos dois viajantes

const commonCities = firstTravelerCities.filter(city => secondTravelerCities.includes(city));

console.table(commonCities);