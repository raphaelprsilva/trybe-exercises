// HOF -> map function
// map recebe uma função, por isso é uma HOF
// Estrutura Básica -> array.map((item[item obrigatório], index, array) => {});
// O map percorre cada item do array e consegue transformá-los, não modificando o array original

const tvShows = [
  {name: 'Breaking Bad', releaseYear: 2008},
  {name: 'Mr. Robot', releaseYear: 2015},
  {name: 'Dr. House', releaseYear: 2004},
  {name: 'Hannibal', releaseYear: 2013},
];

// Retirar os comentários para ver o resultado
// const showNames = tvShows.map(({ name }) => name);
// console.table(showNames);


// HOF -> filter function
// Quando usar o filter? Quando, baseado em uma condição, deseja-se obter um novo array só com alguns items do array original

// Retirar os comentários para ver o resultado
const seriesAfter2010 = tvShows.filter(({ releaseYear }) => releaseYear > 2010);
console.table(seriesAfter2010);


