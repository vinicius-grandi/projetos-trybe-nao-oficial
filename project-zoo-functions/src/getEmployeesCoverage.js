const data = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');

const convertIdToName = (employeeID) =>
  data.employees.filter(
    (employee) => employee.id === employeeID,
  ).map((emp) => emp.firstName);

const getAnimalInfo = (speciesID) => {
  const animals = { name: [], location: [] };
  speciesID.forEach((sID) => {
    const [{ name: sName, location }] = data.species.filter((specie) => specie.id === sID);
    animals.name.push(sName);
    animals.location.push(location);
  });
  return animals;
};

function getEmployeesCoverage(options) {
  if (options === undefined) {
    return data.employees.map((employee) =>
      getEmployeesCoverage({ name: employee.firstName }));
  }
  const { name, id } = options;
  try {
    const { id: employeeID, firstName, lastName, responsibleFor } = (name)
      ? getEmployeeByName(name) : getEmployeeByName(...convertIdToName(id));

    const animals = getAnimalInfo(responsibleFor);

    return {
      id: employeeID,
      fullName: `${firstName} ${lastName}`,
      species: [...animals.name],
      locations: [...animals.location],
    };
  } catch (err) { throw new Error('Informações inválidas'); }
}

module.exports = getEmployeesCoverage;
