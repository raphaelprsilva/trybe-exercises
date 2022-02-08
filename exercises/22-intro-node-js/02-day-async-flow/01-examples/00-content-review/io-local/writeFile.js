const fs = require('fs').promises;

const fileName = 'meu-arquivo.txt';

(async function () {
  try {
    await fs.writeFile(fileName, 'My new text 2', { flag: 'w' });
    console.log('Text read successfully!');
  } catch(err) {
    console.log(err.message);
  }
})()