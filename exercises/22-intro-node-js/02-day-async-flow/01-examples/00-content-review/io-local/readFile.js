const fs = require('fs').promises;

const fileName = 'meu-arquivo.txt';

// Antes => Usando callback => Não recomendado
// fs.readFile(fileName, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Não foi possível ler o arquivo ${fileName}.\nErro: ${err}`);
//     process.exit(1);
//   }
//   console.log(`Conteúdo do arquivo: ${data}`);
// });

// Depois => Utilizando Promises => Mais Recomendado
fs.readFile(fileName, 'utf8')
  .then((data) => console.log(`Conteúdo do arquivo: ${data}`))
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${fileName}.\nErro: ${err}`);
    process.exit(1);
  });