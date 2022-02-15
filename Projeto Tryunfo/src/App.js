import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';
import './index.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCard: [],
    };
  }

  handleInputChange = ({ target }) => {
    // desconstruindo o event
    const { name } = target;

    const value = target.type === 'checkbox' ? target.checked : target.value; // ternário criado para caso especifico checkbox

    this.setState(
      {
        [name]: value,
      },
      () => this.onEnableButton(),
    );
  };

  attTrunfo = () => {
    const { saveCard } = this.state;
    const verify = saveCard.some((itemCard) => itemCard.cardTrunfo === true);
    this.setState({ hasTrunfo: verify });
  }

  deleteCard = ({ target }) => {
    const { saveCard } = this.state;
    const newArray = saveCard.filter((card) => (
      card.cardName !== target.id));
    this.setState(
      { saveCard: newArray }, this.attTrunfo,
    );
  };

  onEnableButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const stateNoEmpty = cardName && cardDescription && cardImage && cardRare !== ''; // variavel para validar inputs vazios
    const totalAttr = 210;
    const maxAttr = 90;
    const minAttr = 0;
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (
      stateNoEmpty && sumAttr <= totalAttr
      && cardAttr1 <= maxAttr
      && cardAttr2 <= maxAttr
      && cardAttr3 <= maxAttr
      && cardAttr1 >= minAttr
      && cardAttr2 >= minAttr
      && cardAttr3 >= minAttr
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;
    const infoCards = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }

    this.setState(
      (prevState) => ({ saveCard: [...prevState.saveCard, infoCards] }),
      () => {
        this.defaultStates();
      },
    );
  };

  defaultStates = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

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
      saveCard,
    } = this.state;

    return (
      <>
        <Form
          cardName={ cardName }
          onInputChange={ this.handleInputChange }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        <CardList
          saveCard={ saveCard }
          deleteCard={ this.deleteCard }
        />
      </>
    );
  }
}

export default App;
