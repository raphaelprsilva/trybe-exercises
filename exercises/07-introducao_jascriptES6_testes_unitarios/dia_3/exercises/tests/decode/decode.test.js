const decode = require('./decode.js');

describe('Decode function tests', () => {
  test('decode should be a funcion', () => {
    expect(typeof decode).toBe('function');
  });

  test('decode("12345") should return "aeiou"', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('decode("1b2d3f4g5h") should return "abedifoguh"', () => {
    expect(decode('1b2d3f4g5h')).toBe('abedifoguh');
  });

  test('decode("12345") should have length 5', () => {
    expect(decode('12345')).toHaveLength(5);
  });
});