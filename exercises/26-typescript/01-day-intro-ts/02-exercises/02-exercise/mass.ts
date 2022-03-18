const units: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const throwErrorMessage = (unit: string) => {
  throw new Error(`A unidade "${unit}" não é válida.`);
};

const convert = (value: number, forUnit: string, toUnit: string): number => {
  if (!units.includes(forUnit)) throwErrorMessage(forUnit);
  if (!units.includes(toUnit)) throwErrorMessage(toUnit);

  const forIndex = units.indexOf(forUnit);
  const toIndex = units.indexOf(toUnit);
  const expoent = toIndex - forIndex;

  return value * Math.pow(10, expoent);
};

console.log(convert(150, 'cmg', 'g'));
