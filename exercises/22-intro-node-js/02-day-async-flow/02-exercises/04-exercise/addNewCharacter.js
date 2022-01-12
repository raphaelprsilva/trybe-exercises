const fs = require('fs').promises;

const addNewCharacter = async () => {
  try {
    const simpsonsFamily = await fs
      .readFile('./simpsonsFamily.json', 'utf-8')
      .then((fileContent) => JSON.parse(fileContent));

    simpsonsFamily.push({id: '5', name: 'Nelson Muntz'});

    return await fs
      .writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  } catch(error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

addNewCharacter();
