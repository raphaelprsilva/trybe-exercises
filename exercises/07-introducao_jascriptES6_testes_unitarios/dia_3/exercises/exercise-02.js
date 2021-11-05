const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// 2. A função myRemove(arr, item) recebe um array arr e retorna uma 
// cópia desse array sem o elemento item caso ele exista no array

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado

const expected = myRemove([1, 2, 3, 4], 3);

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(expected, [1, 2, 4]);
assert.notDeepStrictEqual(expected, [1, 2, 5]); // return true
