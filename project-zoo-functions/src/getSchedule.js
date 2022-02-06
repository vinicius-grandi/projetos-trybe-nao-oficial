const data = require('../data/zoo_data');

const getAvailableAnimals = (dayRequest) =>
  data.species.filter(
    (specie) =>
      specie.availability.some((day) => day === dayRequest),
  ).map((animal) => animal.name);

const getDays = (dayRequest) => {
  const res = {};
  const days = Object.keys(data.hours);
  days.forEach((day) => {
    const [open, closed] = [data.hours[day].open, data.hours[day].close];
    const dayObj = {
      officeHour: (open === 0) ? 'CLOSED' : `Open from ${open}am until ${closed}pm`,
      exhibition: (open === 0) ? 'The zoo will be closed!' : [],
    };
    if (!days.includes(dayRequest)) res[day] = dayObj;
    if (day === dayRequest) {
      res[day] = dayObj;
      res[day].exhibition.push(...getAvailableAnimals(day));
      return res;
    }
  });
  return res;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  const findAnimals = data.species.filter((specie) => specie.name === scheduleTarget);
  const animals = (findAnimals.length === 0) ? data.species : findAnimals;
  const res = getDays(scheduleTarget);
  if (findAnimals.length === 1) {
    const [daysMap] = animals.map((animal) => animal.availability);
    return daysMap;
  }
  if (Object.keys(res).length === 1) return res;

  animals.forEach((animal) => animal.availability.forEach((avDay) => {
    res[avDay].exhibition.push(animal.name);
  }));
  return res;
}

console.log(getSchedule('Monday'))

module.exports = getSchedule;
