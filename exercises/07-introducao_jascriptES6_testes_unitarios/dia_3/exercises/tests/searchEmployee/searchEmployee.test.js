const searchEmployee = require('./searchEmployee.js');

describe('searchEmployee function tests', () => {
  test('searchEmployee should be defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  test('searchEmployee should be a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('searchEmployee("4456-4", "firstName") should return "Leila"', () => {
    const actual = searchEmployee('4456-4', 'firstName');
    const expected = 'Leila';

    expect(actual).toBe(expected);
  });

  test('searchEmployee("9852-2-2", "firstName") should return "Jeff"', () => {
    const actual = searchEmployee('9852-2-2', 'firstName');
    const expected = 'Jeff';

    expect(actual).toBe(expected);
  });

  test('searchEmployee("4678-2", "lastName") should return "Dodds"', () => {
    const actual = searchEmployee('4678-2', 'lastName');
    const expected = 'Dodds';

    expect(actual).toBe(expected);
  });

  test('searchEmployee("1256-4", "specialities") should return "Hooks, Context API, Tailwind CSS"', () => {
    const actual = searchEmployee('1256-4', 'specialities');
    const expected = 'Hooks, Context API, Tailwind CSS';

    expect(actual).toBe(expected);
  });

  test('searchEmployee("1", "firstName") should throw an error', () => {
    expect(() => searchEmployee('1', 'firstName')).toThrow();
  });

  test('searchEmployee("2", "lastName") should throw error message "ID não identificada"', () => {
    expect(() => searchEmployee('2', 'lastName')).toThrowError(new Error('ID não identificada'));
  });

  test('searchEmployee("3", "firstName") should throw error message "ID não identificada"', () => {
    expect(() => searchEmployee('3', 'firstName')).toThrowError(new Error('ID não identificada'));
  });

  test('searchEmployee("1256-4", "nonExistentDetail") should throw error message "Informação indisponível"', () => {
    expect(() => searchEmployee('1256-4', 'nonExistentDetail')).toThrowError(new Error('Informação indisponível'));
  })
});