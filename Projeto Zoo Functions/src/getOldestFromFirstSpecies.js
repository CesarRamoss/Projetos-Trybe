const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimalOfEmployee = data.employees.find((managerId) =>
    managerId.id === id).responsibleFor[0];

  const infoAnimal = data.species.find((animal) => animal.id === firstAnimalOfEmployee).residents;

  const olderAnimal = infoAnimal.reduce((acc, animal) => {
    if (acc.age > animal.age) return acc;
    return animal;
  });

  const { name, sex, age } = olderAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
