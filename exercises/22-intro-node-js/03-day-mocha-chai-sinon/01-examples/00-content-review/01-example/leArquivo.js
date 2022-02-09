const fs = require('fs');

const leArquivo = (nomeArquivo) => {
  try {
    return fs.readFileSync(nomeArquivo, 'utf8');
  } catch(err) {
    return null;
  }
};

module.exports = leArquivo;
