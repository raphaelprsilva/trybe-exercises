const hydrate = (drinkText) => {
  const numberOfGlassesWater = drinkText
    .split('')
    .sort()
    .map((item) => parseInt(item))
    .filter((item) => item)
    .reduce((acc, item) => acc + item, 0);

  return numberOfGlassesWater === 1
    ? `${numberOfGlassesWater} copo de água`
    : `${numberOfGlassesWater} copos de água`;
};

module.exports = hydrate;
