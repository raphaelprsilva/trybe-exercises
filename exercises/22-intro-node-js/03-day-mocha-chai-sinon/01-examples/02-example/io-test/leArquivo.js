const fs = require('fs');

const leArquivo = (nomeDoArquivo) => {
  try {
    const conteudoArquivo = fs.readFileSync(nomeDoArquivo, 'utf8');
    return conteudoArquivo;
  } catch (error) {
    return null;
  }
};

module.exports = leArquivo;
