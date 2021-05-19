const { myRemoveWithoutCopy } = require("../examples/");

describe('Testa a função myRemoveWithoutCopy' , () => {
  it('myRemoveWithoutCopy is function', () => {
    expect(typeof myRemoveWithoutCopy).toBe('function');
  });

  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o [1, 2, 4]', () => {

  });
});