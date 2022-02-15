import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cart from '../images/cart.svg';
import { getItem } from '../services/api';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      item: {},
      description: [],
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct() {
    const { match } = this.props;
    getItem(match.params.id).then((response) => {
      this.setState({
        item: response,
        description: response.attributes,
      });
    });
  }

  render() {
    const {
      item: { title, thumbnail, price },
      description, item,
    } = this.state;
    return (
      <>
        <Link to="/shoppingCart">
          <img
            src={ cart }
            alt="carrinho de compras"
            width="20px"
            data-testid="shopping-cart-button"
          />
          <p>Carrinho de Compras</p>
        </Link>
        <div>
          <p data-testid="product-detail-name">{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>
            Preço:
            {price}
          </p>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => {
              localStorage.setItem('compras', JSON.stringify([item]));
            } }
          >
            Adicionar Item
          </button>
          {description.map((detail) => (
            <div key={ detail.id }>
              <span>{detail.name}</span>
              <span>{detail.value_name}</span>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Product;
Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
