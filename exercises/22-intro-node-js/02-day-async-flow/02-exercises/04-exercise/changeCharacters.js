const fs = require('fs').promises;

(async function changeCharacter() {
  try {
    const simpsons = await fs
      .readFile('./simpsonsFamily.json', 'utf-8')
      .then((fileContent) => JSON.parse(fileContent));
    const simpsonsWithoutNelson = simpsons.filter(({id}) => id !== '5');
    const simpsonsWithMaggie = [
      ...simpsonsWithoutNelson,
      {id: '5', name: 'Maggie Simpson'},
    ];

    return await fs
      .writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
})();
