const olCart = document.querySelector('.cart__items');
const totalPrice = document.querySelector('.total-price');
const totalCart = document.querySelector('.total');

let total = 0;
if (localStorage.getItem('price', total) > 0) {
  total = localStorage.getItem('price', total);
}

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image, price }, callback) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', `R$ ${(price).toFixed(2)}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  section.addEventListener('click', callback);
  return section;
}
// funçao para extrair o ID em texto do elemento clicado 
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// funçao para remover o item do carrinho e atualizar o valor da variavel price
function cartItemClickListener(event) {
  const idItemSelected = event.target.innerText.slice(5, 18);
  fetchItem(idItemSelected)
    .then((response) => {
      const priceItemSelected = response.price;
      const priceHtml = totalPrice;
      priceHtml.innerText = `R$ ${(total - priceItemSelected).toFixed(2)}`;
      total -= priceItemSelected;
      saveCartItems(olCart.innerHTML);
      localStorage.setItem('price', total);
    });

  event.target.remove();

  return event;
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  return li;
}

// funçao para somar os itens do carrinho
function sumCart(item) {
  total += item;
  totalPrice.style.display = 'block';
  totalCart.style.display = 'block';
  const priceHtml = totalPrice;
  priceHtml.innerText = `R$ ${(total.toFixed(2))}`;
}

// funçao para adicionar item no carrinho
function addCart(e) {
  if (e.target.className === 'item__add') {
    const idItem = getSkuFromProductItem(e.path[1]);
    fetchItem(idItem)
      .then((response) => {
        const element = createCartItemElement(response);
        olCart.appendChild(element);
        sumCart(response.price);
        saveCartItems(olCart.innerHTML);
        localStorage.setItem('price', total);
      });
  }
}

// funçao para zerar o carrinho
function resetCart() {
  const button = document.querySelector('.empty-cart');
  button.addEventListener('click', () => {
    olCart.innerHTML = '';
    total = 0;
    totalPrice.innerText = total;
    saveCartItems(olCart.innerHTML);
    localStorage.setItem('price', total);
  });
}

// funcao para criar nó filho dos items 
function append(results) {
  results.forEach(({ id, title, thumbnail, price }) => {
    const items = document.querySelector('.items');
    const newThumb = thumbnail.slice(0, 28);
    const newThumbEnd = thumbnail.slice(28, -5);
    const newLettersInicials = 'NQ_NP_';
    const newLettersEnd = 'W.webp';
    thumbnail = `${newThumb}${newLettersInicials}${newThumbEnd}${newLettersEnd}`;

    const productHtml = createProductItemElement({ id, title, thumbnail, price }, addCart);
    items.appendChild(productHtml);
  });
}

// funçao loading add e remove 
function loading() {
  const body = document.querySelector('body');
  const classLoading = document.querySelector('.loading');
  if (!classLoading) {
    const loadingHtml = document.createElement('section');
    loadingHtml.className = 'loading';
    loadingHtml.innerText = 'carregando...';
    body.appendChild(loadingHtml);
  } else {
    classLoading.remove();
  }
}

// listener para elemento Storage
olCart.addEventListener('click', cartItemClickListener);

// funçao para getStorage
function getStorage() {
  olCart.innerHTML = getSavedCartItems();
  totalPrice.innerHTML = localStorage.getItem('price');
}

window.onload = async () => {
  loading();
  const data = await fetchProducts('computador');
  loading();
  append(data.results);
  resetCart();
  getStorage();
};
