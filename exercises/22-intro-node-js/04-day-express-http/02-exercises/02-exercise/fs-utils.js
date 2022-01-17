const fs = require('fs').promises;

const simpsons = './simpsons.json';

const getSimpsons = async () => {
  try {
    return fs
      .readFile(simpsons, 'utf-8')
      .then((fileContent) => JSON.parse(fileContent));
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

const setSimpsons = async (newSimpsons) => {
  try {
    return fs.writeFile(simpsons, JSON.stringify(newSimpsons));
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
};

module.exports = {
  getSimpsons,
  setSimpsons,
};
