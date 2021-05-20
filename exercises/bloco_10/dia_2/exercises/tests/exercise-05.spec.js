beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

// Primeiro será mostrado '1 - beforeEach'
// Depois '1 - test'
// Depois '1 - afterEach'

// O segundo teste iniciará, mas como o escopo de '1 - beforeEach' é global
// Ele será executado novamente, então teremos:

// '1 - beforeEach'
// '2 - beforeEach'
// '2 - test'
// '2 - afterEach'
// '1 - afterEach'
