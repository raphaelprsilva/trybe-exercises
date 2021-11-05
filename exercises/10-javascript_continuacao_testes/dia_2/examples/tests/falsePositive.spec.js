// O resultado do teste abaixo, acaba sendo um falso-positivo, pois
// o mesmo testa uma função que é assíncrona, ou seja, ela demora
// um tempo específico para retornar o resultado. Até que este retorno
// aconteça, a função test foi finalizada como positiva
describe('Teste de um falso positivo', () => {
  test('Testa se 10 é igual a 5', () => {
    setTimeout(() => {
      expect(10).toBe(5);
    }, 2000);
  });
});

// Testando com o uso da função 'done' no callback
// Após chamar a callback 'done', veremos que o teste não passará
// O que faz sentido, pois 10 não é igual a 5.
// Sendo assim, o uso do 'done', é imprescindível, neste caso
describe('Testa uma callback asíncrona', () => {
  test('Se 10 é igual a 5', (done) => {
    setTimeout(() => {
      expect(10).toBe(5);
      done();
    }, 2000);
  });
});