const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const res = {};

  const childCount = entrants.filter((val) => val.age < 18).length;
  const adultCount = entrants.filter((val) => val.age >= 18 && val.age < 50).length;
  const seniorCount = entrants.filter((val) => val.age >= 50).length;

  [res.child, res.adult, res.senior] = [childCount, adultCount, seniorCount];

  return res;
}

function calculateEntry(entrants) {
  if (!countEntrants(entrants)) return 0;

  const { adult: aPrice, child: cPrice, senior: sPrice } = data.prices;

  const { adult, child, senior } = countEntrants(entrants);

  const res = Number(((aPrice * adult) + (cPrice * child) + (sPrice * senior)).toFixed(2));

  return res;
}

module.exports = { calculateEntry, countEntrants };
