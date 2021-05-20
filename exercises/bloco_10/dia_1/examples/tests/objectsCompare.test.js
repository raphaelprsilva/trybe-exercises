const { obj1, obj2, obj3 } = require('../objectsCompare');

describe('Compare dois objetos JSON', () => {
  it('Objeto 1 é igual ao Objeto 2', () => {
    expect(obj1).toEqual(obj2);
  });

  it('Objeto 1 não é igual ao Objeto 3', () => {
    expect(obj1).not.toEqual(obj3);
  });

  it('Objeto 2 não é igual ao Objeto 3', () => {
    expect(obj2).not.toEqual(obj3);
  });
});