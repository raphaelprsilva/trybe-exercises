const convertToRoman = require('../roman-numerals');
const assert = require('assert');

describe('Testa a função convertToRoman', () => {
  test('Converte os números de 1 a 4', () => {
    expect(convertToRoman(1)).toBe('I');
    expect(convertToRoman(2)).toBe('II');
    expect(convertToRoman(3)).toBe('III');
    expect(convertToRoman(4)).toBe('IV');
  });
  
  test('Converte os números de 5 a 9', () => {
    expect(convertToRoman(5)).toBe('V');
    expect(convertToRoman(6)).toBe('VI');
    expect(convertToRoman(7)).toBe('VII');
    expect(convertToRoman(8)).toBe('VIII');
    expect(convertToRoman(9)).toBe('IX');
  });
});
