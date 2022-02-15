import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../images/cart.svg';
import { getItem } from '../services/api';
import CartItem from './components/CartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getCartStorage();
  }

  // funcao para trazer o item do local storage e adicionar no state
  getCartStorage() {
    const elements = JSON.parse(localStorage.getItem('compras'));
    this.setState(
      {
        products: elements,
      },
    );
  }

  // funcao para adicionar novo item ao state baseado no estado anterior
  addProductState() {
    const { item } = this.state;
    if (item != null) {
      item.forEach((product) => {
        getItem(product).then((response) => {
          this.setState((prevState) => ({
            products: [...prevState.products, response],
          }));
        });
      });
    }
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <Link to="/">
          <img src={ cart } alt="carrinho de compras" width="20px" />
          <p>Voltar para a Home</p>
        </Link>

        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
        {products && products.map((item) => (
          <CartItem key={ item.id } item={ item } />
        ))}
      </>
    );
  }
}

export default ShoppingCart;
