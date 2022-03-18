const units: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convert = (
  value: number,
  currentUnit: string,
  toUnit: string
): number => {
  if (!units.includes(currentUnit)) {
    throw new Error(`A unidade "${currentUnit}" não foi encontrada.`);
  }

  if (!units.includes(toUnit)) {
    throw new Error(`A unidade "${toUnit}" não foi encontrada`);
  }

  const currentIndex = units.indexOf(currentUnit);
  const toIndex = units.indexOf(toUnit);
  const expoent = toIndex - currentIndex;

  return value * Math.pow(10, expoent);
};

console.log(convert(15, 'cml', 'cl'));
