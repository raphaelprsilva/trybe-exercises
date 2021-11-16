test('Test should not pass', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('should fail');
      done();
    } catch (error) {
      done(error);
    }
  }, 500);
});