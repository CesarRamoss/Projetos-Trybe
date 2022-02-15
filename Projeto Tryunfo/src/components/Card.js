import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="create-card">
        <h2>Pré-visualização</h2>
        <div className="card-view">
          <div className="card-view-internal">
            <p data-testid="name-card" className="head-card">
              { cardName }
            </p>
            <img
              src={ cardImage }
              alt={ cardName }
              data-testid="image-card"
              className="img-card"
            />
            <p data-testid="description-card" className="inf-card">{ cardDescription }</p>
            <div className="attrs-card">
              <p data-testid="attr1-card">{ cardAttr1 }</p>
              <p data-testid="attr2-card">{ cardAttr2 }</p>
              <p data-testid="attr3-card">{ cardAttr3 }</p>
              <p data-testid="rare-card">{ cardRare }</p>
            </div>
            { cardTrunfo && <p data-testid="trunfo-card" id="super"> Super Trunfo </p> }
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
