import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="newCard-main">
        <h1>Adicione nova carta</h1>
        <form className="form">
          <label className="label-down" htmlFor="name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="name"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
            />
          </label>

          <label className="label-down" htmlFor="description">
            Descrição
            <textarea
              id="description"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
              maxLength="150"
            />
          </label>

          <label htmlFor="at01">
            Attr01
            <input
              id="at01"
              type="number"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
            />
          </label>

          <label htmlFor="at02">
            Attr02
            <input
              id="at02"
              type="number"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
            />
          </label>

          <label htmlFor="at03">
            Attr03
            <input
              id="at03"
              type="number"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="image"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          { hasTrunfo === false ? (
            <label htmlFor="trunfo">
              <input
                id="trunfo"
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                name="cardTrunfo"
              />
              Super Trybe Trunfo
            </label>) : (<p>Você já tem um Super Trunfo em seu baralho</p>) }

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            name={ isSaveButtonDisabled }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
