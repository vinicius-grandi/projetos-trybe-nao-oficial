const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const res = {};
    data.species.forEach((val) => {
      res[val.name] = val.residents.length;
    });
    return res;
  }
  const { specie, sex } = animal;
  const { residents } = data.species.find((val) => val.name === specie);

  if (typeof sex === 'undefined') return residents.length;

  return residents.reduce((aC, cV) => {
    if (cV.sex === sex) return aC + 1;
    return aC + 0;
  }, 0);
}

module.exports = countAnimals;
