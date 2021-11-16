test('Test should not pass', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Should fail');
    done();
  }, 500);
})