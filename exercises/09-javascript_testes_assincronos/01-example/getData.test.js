const getSuperHero = require('./getData');

test('getSuperHero() should return "Wonder Woman"', async () => {
  const hero = await getSuperHero();
  expect(hero).toBe('Wonder Woman');
});

test('getSuperHero() should return an error message "erro"', async () => {
  const error = await getSuperHero();
  expect(error).toMatch('erro');
});
