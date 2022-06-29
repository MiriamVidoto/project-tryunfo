import React from 'react';
import PropTypes from 'prop-types';
import '../styles/form.css';

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
      <form>
        <h2>Adicionar nova carta</h2>
        <div className="container">
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              name="cardName"
              id="cardName"
              placeholder="Nome da carta"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="cardDescription">
            Descrição
            <textarea
              data-testid="description-input"
              name="cardDescription"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="cardAttr1">
            Velocidade
            <input
              type="number"
              data-testid="attr1-input"
              name="cardAttr1"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="cardAttr2">
            Força
            <input
              type="number"
              data-testid="attr2-input"
              name="cardAttr2"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="cardAttr3">
            Inteligência
            <input
              type="number"
              data-testid="attr3-input"
              name="cardAttr3"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              name="cardImage"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="cardRare">
            Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <div className="container" id="super-trunfo">
          { hasTrunfo && (
            <small>Você já tem um Super Trunfo em seu baralho</small>
          )}
          { !hasTrunfo && (
            <label htmlFor="cardTrunfo">
              Super Trunfo
              <input
                type="checkbox"
                data-testid="trunfo-input"
                name="cardTrunfo"
                id="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )}
        </div>
        <div className="container">
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
