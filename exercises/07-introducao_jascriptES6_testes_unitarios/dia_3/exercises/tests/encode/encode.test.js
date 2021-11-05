const encode = require('./encode.js');

describe('Encode function tests', () => {
  test('encode should should be a function', () => {
    expect(typeof encode).toBe('function');
  });

  test('encode("aeiou") should should return "12345"', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('encode("bacepirodu") should return "b1c2p3r4d5"', () => {
    expect(encode('bacepirodu')).toBe('b1c2p3r4d5');
  });

  test('encode("aeiou") should have length of 5', () => {
    expect(encode('aeiou')).toHaveLength(5);
  });
});