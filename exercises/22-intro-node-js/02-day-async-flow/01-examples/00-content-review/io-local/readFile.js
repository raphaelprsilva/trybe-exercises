const fs = require('fs');

const fileName = 'meu-arquivo2.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${fileName}.\nErro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
})