const fizzBuzz = require('./fizzBuzz.js');

describe('', () => {
  test('fizzBuzz(15) should return "fizzbuzz"', () => {
    expect(fizzBuzz(15)).toEqual('fizzbuzz');
  });

  test('fizzBuzz(9) should return "fizz"', () => {
    expect(fizzBuzz(9)).toEqual('fizz');
  });

  test('fizzBuzz(5) should return "buzz"', () => {
    expect(fizzBuzz(5)).toEqual('buzz');
  });

  test('fizzBuzz(7) should return "7"', () => {
    expect(fizzBuzz(7)).toEqual(7);
  });

  test('fizzBuzz([]) should return "false"', () => {
    expect(fizzBuzz([])).toEqual(false);
  });
});
