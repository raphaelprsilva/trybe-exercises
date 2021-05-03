const topBrazilMovies = [
  {title: 'Movie 1', peopleAmount: 19_686_119, distributeBy: 'Disney'},
  {title: 'Movie 2', peopleAmount: 17_050_000, distributeBy: 'Paramount'},
  {title: 'Movie 3', peopleAmount: 16_276_649, distributeBy: 'Disney'},
  {title: 'Movie 4', peopleAmount: 14_625_182, distributeBy: 'Universal'},
  {title: 'Movie 5', peopleAmount: 13_035_000, distributeBy: 'Paris Filmes'},
  {title: 'Movie 6', peopleAmount: 11_944_536, distributeBy: 'Zazen'},
  {title: 'Movie 7', peopleAmount: 11_259_815, distributeBy: 'Embrafilme'},
  {title: 'Movie 8', peopleAmount: 11_204_524, distributeBy: 'Disney'},
];

// Mostrar a soma das pessoas viram os filmes da Disney
console.log(
  topBrazilMovies
  .filter(({ distributeBy }) => distributeBy === 'Disney')
  .reduce((accumulator, { peopleAmount }) => accumulator + peopleAmount, 0)
);