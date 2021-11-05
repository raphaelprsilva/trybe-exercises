const { getUserName } = require('../execise-02.js');

describe('Testando a função "getUserName"', () => {
  it('testa se a promise retorna um usurário específico', async () => {
    expect.assertions(1);
    const foundUser = await getUserName(4);
    expect(foundUser).toBe('Mark');
  });

  it('testa se retorna um erro, caso um usuário não for encontrado', async () => {
    expect.assertions(1);
    const id = 7;
    const error = { error: `User with ${id} not found.` };
    await expect(getUserName(id)).rejects.toEqual(error);
  });
});