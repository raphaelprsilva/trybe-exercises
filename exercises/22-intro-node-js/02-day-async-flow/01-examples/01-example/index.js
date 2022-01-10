const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Aquivo lido com sucesso. Conteúdo: ${content.ttoString('utf8')}`);
});
