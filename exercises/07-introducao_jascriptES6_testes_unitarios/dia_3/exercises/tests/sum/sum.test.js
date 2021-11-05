const sum = require('./sum');

test('sum(4, 5) should return 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('sum(0, 0) should return 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('sum(4, "5") should throw error', () => {
  expect(() => { sum(4, "5") }).toThrow();
});

test('sum(4,"5") should throw error message "parameters must be numbers"', () => {
  expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
});