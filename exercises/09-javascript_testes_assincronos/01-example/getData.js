const fetch = require('node-fetch');

const HERO_URL = 'https://www.superheroapi.com/api.php/4192484924171229/720';

const getSuperHero = () => {
  const result = fetch(HERO_URL)
    .then((response) => response.json())
    .then((hero) => hero.name)
    .catch(() => 'erro');

  return result;
};

getSuperHero();

module.exports = getSuperHero;
