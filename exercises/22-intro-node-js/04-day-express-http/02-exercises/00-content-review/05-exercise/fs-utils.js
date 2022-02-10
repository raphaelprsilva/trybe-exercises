const fs = require('fs/promises');
const chalk = require('chalk');

// Função para logar os testes
const logBlue = (messageToLog, variable) =>
  console.log(chalk.blue.bold(messageToLog), variable);

// Função para ler todos os simpsons
const getSimpsons = async () => {
  try {
    const simpsonsContent = await fs.readFile('./simpsons.json', 'utf8');
    return await JSON.parse(simpsonsContent);
  } catch(err) {
    console.log(`Erro: ${err.message}`);
  }
};

// Função para escrever os simpsons
const setSimpsons = async (contentToAdd) => {
  try {
    await fs.writeFile('./simpsons.json', JSON.stringify(contentToAdd));
  } catch(err) {
    console.log(`Erro: ${err.message}`);
  }
};

module.exports = {
  getSimpsons,
  setSimpsons,
}