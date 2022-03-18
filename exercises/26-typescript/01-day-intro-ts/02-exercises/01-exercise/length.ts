const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

export const convert = (
  value: number,
  forUnit: string,
  toUnit: string
): number => {
  const forIndex = units.indexOf(forUnit);
  const toIndex = units.indexOf(toUnit);
  const expoent = forIndex - toIndex;

  return value * Math.pow(10, expoent);
};
