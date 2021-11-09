const techList = (list, personName) => {
  if (!list.length) return 'Vazio!'
  return list
    .sort()
    .reduce((acc, tech) => (
      acc = [...acc, {
        'name': personName,
        'tech': tech,
      }]
    ), []);
};

module.exports = techList;
