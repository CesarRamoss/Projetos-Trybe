// funcao fetch que retorna a lista de results da API
const fetchProducts = async (product) => {
  if (!product) {
    return new Error('You must provide an url');
  }
  const results = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`)
    .then((response) => response.json())
    .then((data) => data);
  return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
