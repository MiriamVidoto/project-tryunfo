import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './styles/app.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    cards: [],
  }

enableButton = () => {
  const {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
  } = this.state;

  const validateValues = cardName !== ''
  && cardDescription !== ''
  && cardImage !== ''
  && cardRare !== '';

  const maxSum = 210;
  const max = 90;
  const min = 0;

  const validateAttr = [cardAttr1, cardAttr2, cardAttr3]
    .every((attr) => attr >= min && attr <= max);

  const sumAttr = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum);

  if (validateValues && validateAttr && sumAttr) {
    this.setState({ isSaveButtonDisabled: false });
  } else {
    this.setState({ isSaveButtonDisabled: true });
  }
}

handleChange = ({ target }) => {
  const { name, type } = target;
  const value = type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]: value,
  }, () => this.enableButton());
}

addNewcard = (event) => {
  event.preventDefault();

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
  } = this.state;

  const card = {
    cardName,
    cardDescription,
    cardAttr1,
    cardAttr2,
    cardAttr3,
    cardImage,
    cardRare,
    cardTrunfo,
    hasTrunfo,
  };

  this.setState((prevState) => ({
    cards: [...prevState.cards, card],
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  }), () => this.validateTrunfo());
}

validateTrunfo = () => {
  const { cards } = this.state;
  if (cards.some((card) => card.cardTrunfo)) {
    this.setState({ hasTrunfo: true });
  } else {
    this.setState({ hasTrunfo: false });
  }
}

handleDetete = ({ target }) => {
  const { cards } = this.state;
  const cardDel = target.previousElementSibling.firstChild.innerText;
  const newCards = cards.filter((card) => card.cardName !== cardDel);

  this.setState({
    cards: newCards,
  }, () => this.validateTrunfo());
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
    isSaveButtonDisabled,
    hasTrunfo,
    cards,
  } = this.state;

  return (
    <div className="app">
      <Header />
      <main>
        <div className="new-card">
          <div>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.addNewcard }
              hasTrunfo={ hasTrunfo }
            />
          </div>
          <div className="preview">
            <h2>Pré-visualização</h2>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        <div className="cards">
          { cards.map((card) => (
            <div className="card" key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                data-testid="delete-button"
                type="button"
                onClick={ this.handleDetete }
              >
                Excluir
              </button>
            </div>
          )) }
        </div>
      </main>
      <Footer />
    </div>
  );
}
}

export default App;
