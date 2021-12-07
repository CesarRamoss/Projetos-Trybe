const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieName = data.species.find((animals) => animals.name === animal);
  const result = specieName.residents.every((elemento) => elemento.age >= age);

  return result;
}
module.exports = getAnimalsOlderThan;
