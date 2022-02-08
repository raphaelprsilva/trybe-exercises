const fs = require('fs');

const fileName = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log(data);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}