const { myFizzBuzz } = require('../fizzBuzz');

describe('Testa a função myFizzBuzz(num)', () => {
  it('Testa se myFizzBuzz é uma função', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });

  it('Se passado 15 como parâmetro, retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Se passado 9, retorna "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Se passado 20, retorna "buzz"', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });

  it('Se passado 7, retorna 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  it('Se passado um parâmetro, algo que não seja número, retorna "false"', () => {
    expect(myFizzBuzz('321')).toBe(false);
  });
});