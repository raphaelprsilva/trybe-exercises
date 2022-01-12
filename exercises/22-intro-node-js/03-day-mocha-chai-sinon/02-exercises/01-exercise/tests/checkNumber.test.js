const {expect} = require('chai');

const {checkNumber} = require('../checkNumber');

describe('checkNumber function tests', () => {
  it('Tests if checkNumber function exists', () => {
    expect(checkNumber).to.exist;
  });

  it('Tests if checkNumber is a function', () => {
    expect(checkNumber).to.be.a('function');
  });

  it('Tests if checkNumber parameter type is a "number"', () => {
    const result = checkNumber('lalala');

    expect(() => checkNumber('lalala')).to.throw(TypeError);
  });

  describe('Test checkNumber function for positive results', () => {
    it('checkNumber result should be a "string" type', () => {
      const result = checkNumber(4);

      expect(result).to.be.a('string');
    });

    it('checkNumber(4) should return "positivo"', () => {
      const result = checkNumber(4);

      expect(result).to.be.equal('positivo');
    });
  });

  describe('Test checkNumber function for negative results', () => {
    it('checkNumber result should be a "string" type', () => {
      const result = checkNumber(-4);

      expect(result).to.be.a('string');
    });

    it('checkNumber(-4) should return "negativo"', () => {
      const result = checkNumber(-4);

      expect(result).to.be.equal('negativo');
    });
  });

  describe('Test checkNumber function for neutral results', () => {
    it('checkNumber result should be a "string" type', () => {
      const result = checkNumber(0);

      expect(result).to.be.a('string');
    });

    it('checkNumber(0) should return "neutro"', () => {
      const result = checkNumber(0);

      expect(result).to.be.equal('neutro');
    });
  });
});
