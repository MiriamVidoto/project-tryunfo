import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './styles/app.css';

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

  const validateAttr = [cardAttr1, cardAttr2, cardAttr3]
    .every((attr) => attr > 0 && attr <= max);

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
  } = this.state;

  return (
    <div className="app">
      <h1>Tryunfo</h1>
      <div className="new-card">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
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
        />
      </div>
    </div>
  );
}
}

export default App;
