const data = require('../data/zoo_data');

function getAnimalMap({ includeNames, sorted, sex } = {}) {
  const res = {};
  data.species.forEach((val) => {
    const [location, name, residents] = [val.location, val.name, val.residents];

    if (!Array.isArray(res[location])) res[location] = [];

    const animals = (!sex)
      ? residents
      : residents.filter((resident) => resident.sex === sex);

    res[location].push((!includeNames) ? name : {
      [name]: (!sorted)
        ? animals.map((animal) => animal.name)
        : animals.map((animal) => animal.name).sort(),
    });
  });
  return res;
}

module.exports = getAnimalMap;
