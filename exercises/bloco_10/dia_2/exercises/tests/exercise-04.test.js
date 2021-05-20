const { getRepository } = require('../exercise-04');

describe('Testa a função getRepository', () => {
  it('testa se repositórios específicos se encontram na lista', async () => {
    expect.assertions(2);
    const url = 'https://api.github.com/orgs/tryber/repos';
    const listOfRepos = await getRepository(url);

    expect(listOfRepos).toContain('sd-01-week4-5-project-todo-list');
    expect(listOfRepos).toContain('sd-01-week4-5-project-meme-generator');
  });
});