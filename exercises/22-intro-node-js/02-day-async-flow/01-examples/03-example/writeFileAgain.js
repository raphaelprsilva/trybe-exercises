const fs = require('fs').promises;

fs.writeFile('./meu-novo-arquivo.txt', 'Eu estive aqui! :eyes:', {flag: 'wx'})
  .then(() => {
    console.log('Aquivo salvo!');
  })
  .catch((err) => {
    console.error(`Erro: ${err.message}`);
  });
