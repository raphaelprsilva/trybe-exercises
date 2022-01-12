const checkNumber = (number) => {
  if (typeof number !== 'number') throw TypeError('O valor deve ser um número');

  const result = Math.sign(number);
  const isPositive = result === 1;
  const isNegative = result === -1;

  if (isPositive) return 'positivo';
  if (isNegative) return 'negativo';
  return 'neutro';
};

module.exports = {
  checkNumber,
};

