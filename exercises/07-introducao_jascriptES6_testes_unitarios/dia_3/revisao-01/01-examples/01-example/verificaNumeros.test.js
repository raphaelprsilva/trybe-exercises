const checkNumbersAtArray = require('./verificaNumeros');

describe('Check function checkNumbersAtArray', () => {
  test('checkNumbersAtArray should be defined', () => {
    expect(checkNumbersAtArray).toBeDefined();
  });
  test('checkNumbersAtArray should be a function', () => {
    expect(typeof checkNumbersAtArray).toBe('function');
  });

  test('checkNumbersAtArray([1, 2, 3]) should return true', () => {
    expect(checkNumbersAtArray([1, 2, 3])).toBe(true);
  });

  test('checkNumbersAtArray(["1", 2, 3]) should return false', () => {
    expect(checkNumbersAtArray(['1', 2, 3])).toBe(false);
  });

  test('checkNumbersAtArray() should throw an error', () => {
    expect(() => checkNumbersAtArray()).toThrow(Error);
  })

  test('checkNumbersAtArray() should return an error message: "Passar o array corretamente!"', () => {
    const errorMessage = 'Passar o array corretamente!';
    expect(() => checkNumbersAtArray()).toThrowError(errorMessage);
  })
});