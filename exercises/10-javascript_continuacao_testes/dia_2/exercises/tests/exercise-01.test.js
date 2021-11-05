const { uppercase } = require('../exercise-01.js');

describe('Test uppercase function', () => {
  it('test uppercase', () => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      // done();
    });
  });
});