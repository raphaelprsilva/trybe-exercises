function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// index = 1;
// index = index - 1 = 1 - 1 = 0
// len = len - 1 = 5 - 1 = 4

console.log(myRemoveWithoutCopy([1, 2, 3, 4, 5], 2));

module.exports = {
  myRemoveWithoutCopy,
};