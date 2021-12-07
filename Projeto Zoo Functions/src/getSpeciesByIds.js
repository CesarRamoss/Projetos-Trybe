const data = require('../data/zoo_data');

// includes (true/false)- determina se um array contém determinado elemento
function getSpeciesByIds(...ids) {
  return data.species.filter(({ id }) => ids.includes(id));
}

module.exports = getSpeciesByIds;
