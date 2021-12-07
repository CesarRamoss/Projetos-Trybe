const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const people = entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    } if (age >= 18 && age < 50) {
      acc.adult += 1;
    } if (age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, {
    child: 0,
    adult: 0,
    senior: 0,
  });
  return people;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const { child: cprice, adult: aprice, senior: sprice } = data.prices;

  const totalValue = (child * cprice) + (adult * aprice) + (senior * sprice);
  return totalValue;
}
module.exports = { calculateEntry, countEntrants };
