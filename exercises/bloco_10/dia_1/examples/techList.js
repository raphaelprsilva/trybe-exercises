const techList = (techArray, name) => {
  if(techArray.length === 0) return 'Vazio!';
  const sortedTechArray = techArray.sort();
  const techObject = sortedTechArray.reduce((accumulator, techName) => {
    return accumulator.concat({tech: techName, name})
  }, []);
  return techObject;
};

console.log(techList([], 'Lucas'));

module.exports = {
  techList,
};
