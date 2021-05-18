const { menorPopulacao, 
        maiorPopulacao, 
        mediaDePopulacao 
      } = require('./countries');

describe('countries.js tests', () => {
  test('menorPopulação', () => {
    expect(menorPopulacao()).toEqual('Bahamas');
  });

  test('maiorPopulação', () => {
    expect(maiorPopulacao()).toEqual('Alemanha');
  });

  test('mediaDePopulação', () => {
    expect(mediaDePopulacao()).toEqual(17412305.167);
  });
});