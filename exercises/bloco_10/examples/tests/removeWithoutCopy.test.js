const { myRemoveWithoutCopy } = require('../removeWithoutCopy')

describe('Testa a função myRemoveWithoutCopy' , () => {
  it('myRemoveWithoutCopy is function', () => {
    expect(typeof myRemoveWithoutCopy).toBe('function');
  });

  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o [1, 2, 4]', () => {
    const myArray = [1, 2, 3, 4];
    const item = 3;
    const receivedArray = [1, 2, 4];
    expect(myRemoveWithoutCopy(myArray, item)).toEqual(receivedArray);
  });

  it('myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    const myArray = [1, 2, 3, 4];
    const item = 3;
    const receivedArray = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(myArray, item)).not.toEqual(receivedArray);
  });

  it('Verifica se o array passado por parâmetro sofreu alterações', () => {
    const myArray = [1, 2, 3, 4];
    const item = 3;
    myRemoveWithoutCopy(myArray, item);
    const receivedArray = [1, 2, 3, 4];
    expect(myArray).not.toEqual(receivedArray);
  });

  it('myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const myArray = [1, 2, 3, 4];
    const item = 5;
    const receivedArray = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(myArray, item)).toEqual(receivedArray);
  });
});