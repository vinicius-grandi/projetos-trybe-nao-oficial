const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((val) =>
    val.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const notManagers = data.employees.filter(
      (val) => val.managers.some(
        (manager) => manager === managerId,
      ),
    );

    return notManagers.map(
      (val) => `${val.firstName} ${val.lastName}`,
    );
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
