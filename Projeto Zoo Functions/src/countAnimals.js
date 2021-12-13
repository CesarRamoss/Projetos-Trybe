const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = species.reduce((acc, value) => {
      acc[value.name] = value.residents.length;
      return acc;
    }, {});
    return allAnimals;
  }
  if (Object.keys(animal).length === 1) {
    const animalFind = species.find(({ name }) => name.includes(animal.specie));
    return animalFind.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const animalFind = species.find(({ name }) => name === animal.specie).residents;
    return animalFind.filter(({ sex }) => sex === animal.sex).length;
  }
}

module.exports = countAnimals;
