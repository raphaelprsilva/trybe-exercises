const fs = require('fs').promises;

const readSimpsonsFile = async () => {
  try {
    const response = await fs.readFile('./simpsons.json', 'utf-8');
    const parsedResponse = await JSON.parse(response);
    const newFormat = await parsedResponse
      .map(({id, name}) => `${id} - ${name}`);
    console.log(newFormat);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

readSimpsonsFile();

const readCharacter = async (characterId) => {
  try {
    const simpsonsFile = await fs.readFile('./simpsons.json', 'utf-8');
    const parsedSimpsonsFile = await JSON.parse(simpsonsFile);
    const hasCharacter = parsedSimpsonsFile
      .find((character) => character.id === characterId);

    if (!hasCharacter) {
      throw new Error('Id não encontrado.');
    }
    console.log('character:', hasCharacter);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

readCharacter('1');
