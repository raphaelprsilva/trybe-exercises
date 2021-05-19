const { encode, decode } = require('../encode');

describe('Testa a função "encode"', () => {
  it('"encode" é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  it('O input é uma string', () => {
    const notAString = 1234;
    expect(() => encode(notAString)).toThrow();
  });

  it('a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    const myString = 'aeiou';
    const result = '12345';
    expect(encode(myString)).toBe(result);
  });

  it('Demais letras/números não são convertidos para cada caso', () => {
    const myString = 'testando uma vez';
    const result = 't2st1nd4 5m1 v2z';
    expect(encode(myString)).toBe(result);
  });

  it('String que é retornada têm mesmo tamaho que a original', () => {
    const myString = 'testando uma vez';
    const result = 't2st1nd4 5m1 v2z';
    expect(encode(myString).length).toBe(result.length);
  });

});

describe('Testa a função "decode"', () => {
  it('"decode" é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  it('O input é uma string', () => {
    const notAString = 1234;
    expect(() => decode(notAString)).toThrow();
  });

  it('1, 2, 3, 4 e 5 são convertidos em a, e, i, o, u', () => {
    const myString = '12345';
    const result = 'aeiou';
    expect(decode(myString)).toBe(result);
  });

  it('Demais letras/números não são convertidos para cada caso', () => {
    const myString = 't2st1nd4 5m1 v2z';
    const result = 'testando uma vez';
    expect(decode(myString)).toBe(result);
  });

  it('String que é retornada têm mesmo tamaho que a original', () => {
    const myString = 't2st1nd4 5m1 v2z';
    const result = 'testando uma vez';
    expect(decode(myString).length).toBe(result.length);
  });

});