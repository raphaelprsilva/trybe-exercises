const fetch = require('node-fetch');

const GITHUB_URL = 'https://api.github.com/orgs/tryber/repos';

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
    .catch((error) => console.log(error));
};

test('getRepos(url) should not contains project-todo-list and meme-generator repos',
  async () => {
    const result = await getRepos(GITHUB_URL);

    expect(result).not.toContain('sd-01-week4-5-project-todo-list');
    expect(result).not.toContain('sd-01-week4-5-project-meme-generator');
  });
