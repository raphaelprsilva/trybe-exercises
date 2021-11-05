const myRemove = require('./myRemove');

const FIRST_FOUR_NUMBERS = [1, 2, 3, 4];

test('myRemove([1, 2, 3, 4], 3) should return [1, 2, 4]', () => {
  expect(myRemove(FIRST_FOUR_NUMBERS, 3)).toEqual([1, 2, 4]);
});

test('myRemove([1, 2, 3, 4], 3) should not return [1, 2, 3, 4]', () => {
  expect(myRemove(FIRST_FOUR_NUMBERS, 3)).not.toEqual([1, 2, 3, 4]);
});

test('myRemove([1, 2, 3, 4], 5) should return [1, 2, 3, 4]', () => {
  expect(myRemove(FIRST_FOUR_NUMBERS, 5)).toEqual(FIRST_FOUR_NUMBERS);
});