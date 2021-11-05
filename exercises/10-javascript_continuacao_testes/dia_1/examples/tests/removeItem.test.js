const { myRemove } = require('../removeItem');

describe('Testa a função myRemove', () => {
  test('myRemove is function', () => {
    expect(typeof myRemove).toBe('function');
  });

  test('myRemove([1, 2, 3, 4], 3) returns [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('myRemove([1, 2, 3, 4], 3) doesn\'t returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('array [1, 2, 3, 4] doesn\'t change', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 3);
    expect([1, 2, 3, 4]).toEqual(arr);
  });

  test('myRemove([1, 2, 3, 4], 5) returns [1, 2, 3, 4]', () => {
    const myArray = [1, 2, 3, 4];
    expect(myRemove(myArray, 5)).toEqual(myArray);
  });
});