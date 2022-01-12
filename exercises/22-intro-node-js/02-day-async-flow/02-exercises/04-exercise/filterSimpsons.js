const fs = require('fs').promises;

const filterSimpsons = async () => {
  try {
    const simpsons = await fs.readFile('./simpsons.json', 'utf8');
    const simpsonsParsed = await JSON.parse(simpsons);
    const filteredSimpsons = await simpsonsParsed
      .filter(({id}) => id !== '10' && id !== '6');
    const newSimpsonsContent = await fs
      .writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
    return newSimpsonsContent;
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

filterSimpsons();

