const fs = require('fs').promises;

const createSimpsonsFamilyFile = async () => {
  try {
    const simpsonsFile = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsonsParsed = await JSON.parse(simpsonsFile);
    const simpsonsFamily = await simpsonsParsed
      .filter(({id}) => id === '1' || id === '2' || id === '3' || id === '4');
    const newFile = await fs
      .writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
    return newFile;
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

createSimpsonsFamilyFile();
