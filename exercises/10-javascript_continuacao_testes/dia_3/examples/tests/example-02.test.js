const math = require('../example-02.js');

// Para ver o teste, descomentar
// Mock de um module

// jest.mock('../example-02.js');

// test('Testa função "somar"', () => {

//   // O método mockImplementation faz eu acessar o comportamento
//   // da função somar.
//   math.somar.mockImplementation((a, b) => a + b);
//   math.somar(1, 2);

//   expect(math.somar).toHaveBeenCalled();
//   expect(math.somar).toHaveBeenCalledTimes(1);
//   // toHaveBeenCalledWith valida quais parametros foram passados para a func
//   expect(math.somar).toHaveBeenCalledWith(1, 2);
//   expect(math.somar(1, 2)).toBe(3);
// });


// Mock com jest.spyOn()
test('função somar com jest.spyOn()', () => {

  const mockSomar = jest.spyOn(math, 'somar');

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});


test('função subtrair com jest.spyOn()', () => {

  const mockSubrtrair = jest.spyOn(math, 'subtrair');

  mockSubrtrair(4, 3);
  expect(mockSubrtrair).toHaveBeenCalled();
  expect(mockSubrtrair).toHaveBeenCalledTimes(1);
  expect(mockSubrtrair).toHaveBeenCalledWith(4, 3);
  expect(mockSubrtrair(4, 3)).resolves.toBe(1);
});


// Mock com jest.spyOn() e mock.mockRestore()
// describe('Testando a função "somar" com mock.spyOn()', () => {
//   test('se função somar retorna o valor esperado', () => {
//     expect(math.somar(1, 2)).resolves.toBe(3);

//     const mockSomar = jest
//       .spyOn(math, 'somar')
//       .mockImplementation((a, b) => a - b);

//     math.somar(5, 2);
//     expect(mockSomar).toHaveBeenCalled();
//     expect(mockSomar).toHaveBeenCalledTimes(1);
//     expect(mockSomar(5, 2)).toBe(3);
//     expect(mockSomar).toHaveBeenCalledTimes(2);
//     expect(mockSomar).toHaveBeenCalledWith(5, 2);

//     math.somar.mockRestore();
//     expect(math.somar(1, 2)).resolves.toBe(3);

//   });
// });