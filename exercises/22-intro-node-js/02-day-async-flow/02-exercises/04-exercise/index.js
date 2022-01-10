const simpsons = require('./simpsons.json');

const readCharacters = async () => {
  try {
    const characters = await simpsons;
    const charactersList = characters.map(({id, name}) => `${id} - ${name}`);
    const charactersListAsString = charactersList.join('\n');
    console.log(charactersListAsString);
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

readCharacters();
