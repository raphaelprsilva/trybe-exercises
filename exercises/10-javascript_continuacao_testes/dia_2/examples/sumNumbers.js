const sumNumbers = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 1000);
};

module.exports = { sumNumbers };