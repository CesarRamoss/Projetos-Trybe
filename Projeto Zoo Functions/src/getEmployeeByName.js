const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((name) => {
    const firstName = name.firstName.includes(employeeName);
    const lastName = name.lastName.includes(employeeName);
    return (firstName || lastName);
  });
}

module.exports = getEmployeeByName;
