const { filterBySpeed } = require('../filterBySpeed.js');

describe('Testing filterBySpeed function', () => {
  it('Return the correct pokemons when minimumSpeed is 60', () => {
    expect.assertions(1); // Camada adicional de segurança do teste
    return filterBySpeed(60).then((pokemons) => {
      expect(pokemons).toStrictEqual(['Charmander', 'Pickachu']);
    })
  });

  it('Return an error when passing an invalid minimumSpeed', () => {
    expect.assertions(1);
    return filterBySpeed(95).catch((error) => {
      expect(error).toBe('No pokemons found');
    });
  })
});

describe('Testing filterBySpeed function with async/await', () => {
  it('Return the correct pokemons when minimumSpeed is 60', async () => {
    expect.assertions(1);
    const pokemons = await filterBySpeed(60);
    expect(pokemons).toStrictEqual(['Charmander', 'Pickachu']);
  });

  it('Return an error when passing an invalid minimumSpeed', async () => {
    expect.assertions(1);
    try {
      await filterBySpeed(99);
    } catch(error) {
      expect(error).toBe('No pokemons found');
    }
  });

});