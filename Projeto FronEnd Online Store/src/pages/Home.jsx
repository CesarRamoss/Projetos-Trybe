import React from 'react';
import { Link } from 'react-router-dom';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import cart from '../images/cart.svg';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
      inputValue: '',
      categoryId: '',
      productLocalStorage: [],
    };
  }

  componentDidMount() {
    this.requiredCategories();
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  categoryFilter = async (event) => {
    await this.setState({
      categoryId: event.target.id,
    });
    this.requiredProducts();
  };

  addCart = (card) => {
    this.setState((prevState) => ({
      productLocalStorage: [...prevState.productLocalStorage, card],
    }), () => {
      const { productLocalStorage } = this.state;
      localStorage.setItem('compras', JSON.stringify(productLocalStorage));
    });
  }

  async requiredCategories() {
    const response = await getCategories();

    this.setState({
      categories: [...response],
    });
  }

  async requiredProducts() {
    const { inputValue, categoryId } = this.state;
    const response = await getProductsFromCategoryAndQuery(
      categoryId,
      inputValue,
    );
    this.setState({
      products: response.results,
    });
  }

  render() {
    const { categories, inputValue, products } = this.state;
    return (
      <>
        <div>
          <aside>
            <ul>
              {categories.map((category) => (
                <li key={ category.name }>
                  <label htmlFor={ category.id }>
                    <input
                      data-testid="category"
                      id={ category.id }
                      type="radio"
                      name="category"
                      onChange={ this.categoryFilter }
                    />
                    {category.name}
                  </label>
                </li>
              ))}
            </ul>
          </aside>
          <div>
            <section>
              <input
                type="text"
                data-testid="query-input"
                onChange={ this.handleChange }
                value={ inputValue }
                id="input"
                name="inputValue"
              />
              <button
                onClick={ (event) => {
                  event.preventDefault();
                  this.requiredProducts();
                } }
                data-testid="query-button"
                type="submit"
              >
                Buscar
              </button>
            </section>
          </div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <div>
            {products.map((card) => (
              <div key={ card.id }>
                <Link
                  data-testid="product-detail-link"
                  to={ `/product/${card.id}` }
                >
                  <div data-testid="product">
                    <h3>{card.title}</h3>
                    <img
                      src={ card.thumbnail }
                      alt={ card.thumbnail_id }
                      width="100"
                    />
                    <p>
                      Preço: R$
                      {card.price}
                    </p>
                  </div>

                </Link>
                <button
                  data-testid="product-add-to-cart"
                  type="button"
                  onClick={ () => this.addCart(card) }
                >
                  Adicionar Item
                </button>
              </div>
            ))}
          </div>
        </div>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          <img src={ cart } alt="carrinho de compras" width="20px" />
        </Link>
      </>
    );
  }
}

export default Home;
