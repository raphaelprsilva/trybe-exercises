const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('uppercase("string de teste", callback) should return "STRING DE TESTE"', (done) => {
  uppercase('string de teste', (result) => {
    try {
      expect(result).toBe('STRING DE TESTE');
      done();
    } catch(error) {
      done(error);
    }
  });
});