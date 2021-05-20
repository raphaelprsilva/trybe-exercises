const { getListAnimals } = require('../findAnimals.js');

describe('Quando o tipo do animal existe', () => { 
  test('Retorne a lista de cachorros', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then((pet) => {
      expect(pet[0].name).toBe('Dorminhoco');
      expect(pet[1].name).toBe('Soneca');
    });
  });

  test('Retorna a lista de gatos', () => {
    expect.assertions(1);
    return getListAnimals('Cat').then((pet) => {
      expect(pet[0].name).toBe('Preguiça');
    });
  });

  test('Retona a idade dos cachorros', () => {
    expect.assertions(2);
    return getListAnimals('Dog').then((pet) => {
      expect(pet[0].age).toBe(1);
      expect(pet[1].age).toBe(2);
    });
  });

  test('Quando o animal não existe', () => {
    expect.assertions(1);
    return getListAnimals('Lion').catch((error) => {
      expect(error).toEqual({ error: 'Não possui esse tipo de animal.' });
    });
  });
});

// Utilizando async/await

describe('Testa a função getListAnimals com async/await', () => {
  test('Testa se retorna uma lista de cachorros', async () => {
    const ListOfDogs = await getListAnimals('Dog');
    expect(ListOfDogs[0].name).toEqual('Dorminhoco');
    expect(ListOfDogs[1].name).toEqual('Soneca');
  });

  test('Se possui o tipo de animal passado existe', async () => {
    try {
      await getListAnimals('Lion');
    } catch(error) {
      expect(error).toEqual({ error: 'Não possui esse tipo de animal.' });
    }
  });
});


// Utilizando .resolves e .rejects

describe('Testa a função getListAnimals usando .resolves e .rejects', () => {
  describe('Quando o tipo de animal existe', () => {
    test('Retorna a lista de cachorros', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      expect.assertions(1);
      return expect(getListAnimals('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      const error = { error: 'Não possui esse tipo de animal.' };
      return expect(getListAnimals('Lion')).rejects.toEqual(error);
    });
  });
});

// Utilizando .resolves e .rejects com async/await

describe('Testa função getListAnimals com .resolve/.rejects e async/await', () => {
  describe('Quando o animal existe', () => {
    test('Retorna uma lista com os cachorros', async () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      expect.assertions(1);
      await expect(getListAnimals('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o animal não existe', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      const error = { error: 'Não possui esse tipo de animal.' };
      await expect(getListAnimals('Lion')).rejects.toEqual(error);
    });
  });
});