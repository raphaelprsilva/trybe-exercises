const {
  getCities,
  removeCity,
  retrieveCitiesFromCache,
  requestCities,
  isCity,
  resetCities,
} = require('../cities.js');

describe('Retrieving cities from cache', () => {
  // Essa função é chamada sempre antes de executar um it
  // Setup
  beforeEach(() => {
    retrieveCitiesFromCache();
  });

  // Essa função é chamada após a execução de um it
  // Teardown
  afterEach(() => {
    resetCities();
  });

  it('deveria ter apenas 1 cidade depois de remover Belo Horizonte', () => {
    removeCity('Belo Horizonte');
    expect(getCities().length).toBe(1);
  });
  
  it('deveria ter duas cidades, dado que não foram removidas cidades', () => {
    expect.assertions(1);
    expect(getCities().length).toBe(2);
  });
});

describe('Requisitando cidades de uma API', () => {
  beforeEach(() => {
    return requestCities();
  });

  afterEach(() => {
    requestCities();
  })

  it('deveria ter 8 cidades depois da requisição da API', () => {
    expect.assertions(1);
    expect(getCities().length).toBe(8);
  });

  it('deveria ter a cidade de "Belo Horizonte"', () => {
    expect.assertions(1);
    expect(isCity('Belo Horizonte')).toBeTruthy();
  });
});