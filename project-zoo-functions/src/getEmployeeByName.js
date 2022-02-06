const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return {};

  const [employee] = data.employees.filter((v) =>
    v.firstName === employeeName
    || v.lastName === employeeName);

  return employee;
}

module.exports = getEmployeeByName;
