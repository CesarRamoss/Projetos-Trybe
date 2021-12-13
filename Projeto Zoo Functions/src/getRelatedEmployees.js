const data = require('../data/zoo_data');

function isManager(id) {
  const verifyManager = data.employees.some(({ managers }) => managers.includes(id));
  return verifyManager;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const objManager = data.employees.filter(({ managers }) => managers.includes(managerId));
  return objManager.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
