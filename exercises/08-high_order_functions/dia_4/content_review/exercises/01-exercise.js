const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (arr) => {
  return arr.reduce((acc, item) => (acc = [...acc, ...item]));
};

console.log(flatten(arrays));
