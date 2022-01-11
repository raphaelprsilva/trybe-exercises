const fs = require('fs');

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      return resolve(content);
    });
  });
}

readFilePromise('./file1.txt')
  .then((content) => {
    console.log(`Lido arquivo file1 com ${content.byteLenght} bytes.`);
    return readFilePromise('./file2.txt');
  })
  .then((content) => {
    console.log(`Lido aquivo file2 com ${content.byteLenght} bytes.`);
  })
  .catch((error) => {
    console.error(`Erro ao ler arquivo: ${error.message}.`);
  });
