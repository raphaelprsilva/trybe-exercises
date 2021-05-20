const { sum } = require('../sumTwoNumbers');

describe('Teste do da função sum(a, b)', () => {
  test('Testa se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Testa se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Testa se erro é lançado, caso parâmetros sejam 4 e "5"', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });

  const testMessage = `Testa se a mensagem de erro é "parameters must be
      numbers" quando a chamada é sum(4, '5')`;
  test(testMessage, () => {
    expect(() => sum(4, '5')).toThrow(/parameters must be numbers/);
  });
});