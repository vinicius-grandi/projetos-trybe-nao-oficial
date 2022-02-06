const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (typeof ids === 'undefined') return [];
  const res = [];

  data.species.forEach((val, index) => {
    const specieID = data.species[index].id;
    const regex = new RegExp(`${specieID}`, 'gi');

    if (ids.join('/').match(regex)) {
      res.push(data.species[index]);
    }
  });

  return res;
}

module.exports = getSpeciesByIds;
