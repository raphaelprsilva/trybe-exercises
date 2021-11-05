const { searchEmployee } = require('../searchEmployee.js');

describe('Test function searchEmployee' , () => {
  it('Tests if searchEmployee is defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Tests if searchEmployee is a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Tests if searchEmployee returns the expected result', () => {
    const id = '4678-2';
    const result = {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    };
    expect(searchEmployee(id)).toEqual(result);
  });

  it('Tests if doesn\'t was passed a parameter, throw an error', () => {
    expect(() => searchEmployee()).toThrow();
  });
});