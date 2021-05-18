const countries = [
  { name: 'Senegal', population: 14799859, area: 196722 },
  { name: 'Alemanha', population: 81770900, area: 357114 },
  { name: 'Guadalupe', population: 400132, area: 13959 },
  { name: 'Bahamas', population: 378040, area: 13943 },
  { name: 'Guiana', population: 746900, area: 214969 },
  { name: 'Irlanda', population: 6378000, area: 70273 },
];


const menorPopulacao = () => {
  return countries.reduce((accumulator, country) => {
    return accumulator.population < country.population ? accumulator : country;
  }, {}).name;
};

const maiorPopulacao = () => {
  return countries.reduce((accumulator, country) => {
    return accumulator.population > country.population ? accumulator : country;
  }, {}).name;
};

const mediaDePopulacao = () => {
  const populationSum = countries.reduce((accumulator, { population }) => {
    return accumulator + population;
  }, 0);
  const numberOfCountries = countries.length;
  const populationAverage = Number((populationSum / numberOfCountries).toFixed(3));
  return populationAverage;
};

module.exports = {
  menorPopulacao,
  maiorPopulacao,
  mediaDePopulacao,
};