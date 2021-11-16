const asyncSum = (num1, num2, callback) => {
  setTimeout(() => {
    const result = num1 + num2;
    callback(result);
  }, 500);
};

test('asyncSum(5, 10, callback) should return 15', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  })
});