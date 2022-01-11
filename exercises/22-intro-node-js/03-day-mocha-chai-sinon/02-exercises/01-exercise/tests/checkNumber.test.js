const {expect} = require('chai');

const {checkNumber} = require('../checkNumber');

describe('checkNumber function tests', () => {
  it('Tests if checkNumber exists', () => {
    expect(checkNumber).to.exist;
  });

  it('Tests if checkNumber is a function', () => {
    expect(checkNumber).to.be.a('function');
  });

  it('Tests if checkNumber(4) returns "positivo"', () => {
    const result = checkNumber(4);

    expect(result).to.be.equal('positivo');
  });

  it('Tests if checkNumber(-4) returns "negativo"', () => {
    const result = checkNumber(-4);

    expect(result).to.be.equal('negativo');
  });

  it('Tests if checkNumber(0) returns "neutro"', () => {
    const result = checkNumber(0);

    expect(result).to.be.equal('neutro');
  });
});
