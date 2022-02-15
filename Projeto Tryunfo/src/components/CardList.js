import React from 'react';
import PropTypes from 'prop-types';

class CardList extends React.Component {
  render() {
    const { saveCard, deleteCard } = this.props;

    return (
      <>
        <h1>Cartas Salvas</h1>
        <div className="save-card">
          { saveCard.map((card) => (
            <div key={ card.cardName }>
              <div className="card-view">
                <div className="card-view-internal">
                  <p className="head-card">{ card.cardName }</p>
                  <img
                    src={ card.cardImage }
                    alt={ card.cardName }
                    className="img-card"
                  />
                  <p className="inf-card">{ card.cardDescription }</p>
                  <div className="attrs-card">
                    <p>{ card.cardAttr1 }</p>
                    <p>{ card.cardAttr2 }</p>
                    <p>{ card.cardAttr3 }</p>
                    <p>{ card.cardAttr3 }</p>
                    <p>{ card.cardRare }</p>
                  </div>
                  { card.cardTrunfo === true ? (
                    <p id="super">
                      { card.cardTrunfo }
                      Super Trunfo
                      { ' ' }
                    </p>
                  ) : (
                    ''
                  ) }
                </div>
              </div>
              <button
                id={ card.cardName }
                type="button"
                data-testid="delete-button"
                onClick={ deleteCard }
                className="exclude"
              >
                Excluir
              </button>
            </div>
          )) }
        </div>
      </>
    );
  }
}

export default CardList;

CardList.propTypes = {
  deleteCard: PropTypes.func.isRequired,
  saveCard: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.number.isRequired,
      cardAttr2: PropTypes.number.isRequired,
      cardAttr3: PropTypes.number.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
