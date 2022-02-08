const fs = require('fs').promises;

const fileName = 'meu-arquivo.txt';

fs.writeFile(fileName, 'My text')
  .then(() => console.log('Arquivo escrito com sucesso!'))
  .catch((err) => console.log(err));