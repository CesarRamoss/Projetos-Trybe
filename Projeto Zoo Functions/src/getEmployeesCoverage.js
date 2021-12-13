const data = require('../data/zoo_data');

// funçao para retornar o id da especie
function getEspeciesById(id) {
  return data.species.find((specie) => specie.id === id);
}
// funcao que estrutura o objeto retornado pelo getEmployee
function createObj(employee) {
  const structure = { id: '', fullName: '', species: [], locations: [] };
  structure.id = employee.id;
  structure.fullName = `${employee.firstName} ${employee.lastName}`;

  employee.responsibleFor.forEach((idSpecie) => {
    const foundSpecie = getEspeciesById(idSpecie);
    structure.species.push(foundSpecie.name);
    structure.locations.push(foundSpecie.location);
  });
  return structure;
}

// funcao que retorna o funcionario de acordo com o parametro passado
function getEmployee({ name, id }) {
  if (id !== undefined) {
    return data.employees.find((employee) => employee.id === id);
  }
  return data.employees.find((employee) =>
    employee.firstName === name || employee.lastName === name);
}

// funcao inicial que recebe o parametro do teste
function getEmployeesCoverage(param) {
  // se parametro vazio
  if (param === undefined) {
    return data.employees.map((employees) => createObj(employees));
  }
  const saveEmployee = getEmployee(param);
  // se parametro passado for inexistente dentro de data
  if (saveEmployee === undefined) {
    throw new Error('Informações inválidas');
  }
  // se parametro correto
  return createObj(saveEmployee);
}

module.exports = getEmployeesCoverage;
