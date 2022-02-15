import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

    handleIncrease = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }

    handleDecrease = () => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }

    render() {
      const { count } = this.state;
      const { item } = this.props;
      return (
        <div key={ item.id }>
          <p data-testid="shopping-cart-product-name">{item.title}</p>
          <img src={ item.thumbnail } alt={ item.title } />
          <p>
            R$
            {item.price * count}
          </p>
          <p data-testid="shopping-cart-product-quantity">{ count }</p>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ this.handleIncrease }
          >
            +
          </button>

          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ count > 0 && this.handleDecrease }
          >
            -
          </button>
        </div>
      );
    }
}

CartItem.propTypes = PropTypes.shape({
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}).isRequired;

export default CartItem;
