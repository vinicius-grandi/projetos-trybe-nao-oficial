const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const [{ residents }] = data.species.filter(
    (v, index) =>
      data.species[index].name === animal,
  );

  const isOlderThan = residents.every(
    (v, index) => residents[index].age > age,
  );

  return isOlderThan;
}

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;
