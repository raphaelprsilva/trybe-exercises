const fs = require('fs/promises');

const readFileContent = async (filePath) => {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    console.log('readFileContent - fileContent:', fileContent);
    return JSON.parse(fileContent);
  } catch(err) {
    console.log(`Erro: ${err.message}`);
  }
};

const writeFileContent = async (filePath, contentToAdd) => {
  try {
    console.log('writeFileContent - filePath:', filePath);
    const fileContent = await readFileContent(filePath);

    console.log('writeFileContent - fileContent:', fileContent);

    fileContent.push(contentToAdd);

    await fs.writeFile(filePath, JSON.stringfy(fileContent));

    console.log('writeFileContent - contentToAdd:', contentToAdd);

    return contentToAdd;
  } catch(err) {
    console.log(`Erro: ${err.message}`);
  }
};

module.exports = {
  readFileContent,
  writeFileContent,
};
