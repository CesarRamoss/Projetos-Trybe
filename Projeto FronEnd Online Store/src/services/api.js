export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const responde = await fetch(endpoint);
  const responseJSON = await responde.json();
  return responseJSON;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await (await fetch(endpoint)).json();
  return response;
}

export async function getItem(id) {
  const endpoint = `https://api.mercadolibre.com/items/${id}`;
  const response = await (await fetch(endpoint)).json();
  return response;
}
