const fs = require('fs').promises;

const read = async () => {
  try {
    const content = await fs.readFile('simpsons.json', 'utf8');
    const parsedContent = JSON.parse(content);
    
    parsedContent.forEach(({id, name}) => console.log(`${id} - ${name}`))
  } catch(err) {
    console.log(`Erro: ${err}`);
  }
};

const getById = async (id) => {
  try {
    const loadFileContent = await fs.readFile('simpsons.json', 'utf8');
    const parsedCharacter = JSON.parse(loadFileContent);
    const foundCharacter = parsedCharacter.find(
      (character) => character.id === id
    );

    if (!foundCharacter) throw new Error('Character not found!');
    console.log(`- Character: ${foundCharacter.name}\n- Id: ${foundCharacter.id}`);
  } catch(err) {
    console.log(`Erro: ${err.message}`);
  }
};

const removeCharacter = async () => {
  try {
    const fileContent = await fs.readFile('simpsons.json', 'utf8');
    const parseContent = JSON.parse(fileContent);
    const filteredCharacters = parseContent.filter((character) => character.id !== '10' & character.id !== '6');

    if (!filteredCharacters) throw new Error('Characters not found');
  } catch(err) {
    console.log(`Erro: ${err.message}`);
  }
};

const loadFile = async (filePath) => {
  try {
    const loadedFile = await fs.readFile(filePath);
    if (!loadedFile) throw new Error('Não foi possível ler o arquivo');

    return JSON.parse(loadedFile);
  } catch(err) {
    console.log(`Erro: ${err.message}`);
  }
}

const createNewFamily = async () => {
  try {
    const simpsons = await loadFile('simpsons.json');
    const newFamily = simpsons.slice(0, 4);
    const newFamilyStringfied = JSON.stringify(newFamily);
    await fs.writeFile('simpsonsFamily.json', newFamilyStringfied, { flag: 'wx'});
  } catch(err) {
    console.log(`Erro: ${err.message}`);
  }
};

const addNewCharacter = async () => {
  try {
    const newSimpsons = await loadFile('simpsonsFamily.json');
    const lastId = newSimpsons[newSimpsons.length - 1].id;
    const lastIdAsNumber = Number(lastId) + 1;
    const character = { id: `${lastIdAsNumber}`, name: 'Nelson Muntz'};

    newSimpsons.push(character);

    await fs.writeFile('simpsonsFamily.json', JSON.stringify(newSimpsons), { flag: 'w'});
    console.log('New character added');
  } catch(err) {
    console.log(`Erro: ${err.message}`);
  }
};

const changeCharacter = async (characterToBeReplaced, characterToReplace) => {
  try {
    const newSimpsons = await loadFile('simpsonsFamily.json');
    const removeNelson = newSimpsons.filter((character) => character.name !== characterToBeReplaced);
    removeNelson.push({id: '5', name: characterToReplace});
    await fs.writeFile('simpsonsFamily.json', JSON.stringify(removeNelson), { flag: 'w' });
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
};

changeCharacter('Nelson Muntz', 'Maggie Simpson');

