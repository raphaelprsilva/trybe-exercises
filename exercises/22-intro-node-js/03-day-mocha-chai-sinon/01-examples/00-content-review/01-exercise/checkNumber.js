const checkNumber = (num) => {
  if (typeof num !== 'number') {
    return 'O parâmetro deve ser do tipo "number"';
  }

  if (num > 0) return 'positivo';
  if (num < 0) return 'negativo';
  return 'neutro';
};

module.exports = checkNumber;