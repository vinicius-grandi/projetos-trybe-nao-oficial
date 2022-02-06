const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const [[animals]] = data.employees.filter(
    (val) => val.id === id,
  ).map((val) => val.responsibleFor);

  const [residents] = data.species.filter(
    (specie) => specie.id === animals,
  ).map((filSpecie) => filSpecie.residents);

  const [oldestFromSpecie] = residents.reduce((acc, cVal) => {
    acc.push([cVal.name, cVal.sex, cVal.age]);
    return acc.sort((pV, cV) => {
      if (cV[2] < pV[2]) return -1;
      return 0;
    });
  }, []);

  return oldestFromSpecie;
}

module.exports = getOldestFromFirstSpecies;
