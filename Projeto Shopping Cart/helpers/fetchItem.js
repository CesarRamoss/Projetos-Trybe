const fetchItem = async (item) => {
  if (!item) {
    return new Error('You must provide an url');
  }
  const resultItem = await fetch(`https://api.mercadolibre.com/items/${item}`)
    .then((response) => response.json())
    .then((data) => data);
  return resultItem;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
