const starterPokemons = [
  {name: 'Bubasaur', type: 'Grass/Poison', speed: 45},
  {name: 'Charmander', type: 'Fire', speed: 65},
  {name: 'Squirtle', type: 'Water', speed: 43},
  {name: 'Pickachu', type: 'Eletric', speed: 90},
];

// Simulação de uma Promise (async func)
const filterBySpeed = (minimumSpeed) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bySpeed = starterPokemons
        .filter(pokemons => pokemons.speed >= minimumSpeed)
        .map(pokemon => pokemon.name);
      if (bySpeed.length > 0) resolve(bySpeed);
      return reject('No pokemons found');
    }, 1500);
  });
};

// filterBySpeed(60).then((result) => console.log(result));

module.exports = {
  filterBySpeed,
};