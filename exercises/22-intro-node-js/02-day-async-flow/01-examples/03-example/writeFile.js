const fs = require('fs').promises;

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Novo texto escrito!');
    console.log('Texto escrito com sucesso!');
  } catch (err) {
    console.log(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();
